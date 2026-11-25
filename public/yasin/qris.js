// QRIS (EMVCo MPM) helpers: turn a static QRIS into one that carries an amount.

/** CRC-16/CCITT-FALSE, as QRIS tag 63 requires. */
export function crc16(str) {
  let crc = 0xffff;
  for (const b of new TextEncoder().encode(str)) {
    crc ^= b << 8;
    for (let i = 0; i < 8; i++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

/** Top-level TLV fields, in order. Throws on a malformed payload. */
export function parseTlv(payload) {
  const out = [];
  let i = 0;
  while (i < payload.length) {
    const tag = payload.slice(i, i + 2);
    const len = Number(payload.slice(i + 2, i + 4));
    if (!/^\d{2}$/.test(tag) || !Number.isInteger(len) || i + 4 + len > payload.length) {
      throw new Error('QRIS tidak valid');
    }
    out.push([tag, payload.slice(i + 4, i + 4 + len)]);
    i += 4 + len;
  }
  return out;
}

const field = (tag, value) => tag + String(value.length).padStart(2, '0') + value;

/** True when the payload's own CRC matches its content. */
export function isValidQris(payload) {
  if (!payload.startsWith('000201') || payload.length < 8) return false;
  try { parseTlv(payload); } catch { return false; }
  return crc16(payload.slice(0, -4)) === payload.slice(-4).toUpperCase();
}

/**
 * Static QRIS + rupiah amount → dynamic QRIS: tag 01 becomes "12", tag 54
 * carries the amount (placed in tag order), and the CRC is recomputed.
 */
export function withAmount(staticPayload, amount) {
  if (!isValidQris(staticPayload)) throw new Error('QRIS tidak valid');
  if (!Number.isInteger(amount) || amount <= 0 || amount > 99999999) throw new Error('Nominal tidak valid');
  const fields = parseTlv(staticPayload).filter(([t]) => t !== '63' && t !== '54');
  const i = fields.findIndex(([t]) => t === '01');
  if (i >= 0) fields[i] = ['01', '12'];
  const at = fields.findIndex(([t]) => Number(t) > 54);
  fields.splice(at < 0 ? fields.length : at, 0, ['54', String(amount)]);
  const body = fields.map(([t, v]) => field(t, v)).join('') + '6304';
  return body + crc16(body);
}

/** Merchant name (tag 59), for showing who the money goes to. */
export function merchantName(payload) {
  try { return parseTlv(payload).find(([t]) => t === '59')?.[1] ?? ''; } catch { return ''; }
}
