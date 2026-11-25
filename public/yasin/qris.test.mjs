// Self-check: node public/yasin/qris.test.mjs
import assert from 'node:assert/strict';
import { crc16, isValidQris, parseTlv, withAmount, merchantName } from './qris.js';

assert.equal(crc16('123456789'), '29B1'); // CCITT-FALSE check value

const f = (t, v) => t + String(v.length).padStart(2, '0') + v;
const body = f('00', '01') + f('01', '11') + f('26', f('00', 'ID.CO.EXAMPLE.WWW') + f('01', 'ABCD'))
  + f('52', '5812') + f('53', '360') + f('58', 'ID') + f('59', 'BASKOM LABS') + f('60', 'JAKARTA') + '6304';
const staticQris = body + crc16(body);
assert.ok(isValidQris(staticQris));
assert.ok(!isValidQris(staticQris.slice(0, -1) + '0'));
assert.equal(merchantName(staticQris), 'BASKOM LABS');

const dyn = withAmount(staticQris, 25000);
assert.ok(isValidQris(dyn));
const tags = parseTlv(dyn);
assert.deepEqual(tags.find(([t]) => t === '01'), ['01', '12']);
assert.deepEqual(tags.find(([t]) => t === '54'), ['54', '25000']);
assert.deepEqual(tags.map(([t]) => t), ['00', '01', '26', '52', '53', '54', '58', '59', '60', '63']);
// Re-applying replaces the amount instead of adding a second one.
assert.equal(parseTlv(withAmount(dyn, 10000)).filter(([t]) => t === '54').length, 1);
assert.throws(() => withAmount(staticQris, 0));
assert.throws(() => withAmount('garbage', 1000));
console.log('qris ok');
