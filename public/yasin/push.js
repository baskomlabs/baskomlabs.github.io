// Web push via FCM. The token goes to Firestore (create-only rules); a GitHub
// Actions job subscribes new tokens to the "hikmah" topic and sends the pushes.
import { FIREBASE, VAPID_KEY } from './config.js';

const SDK = 'https://www.gstatic.com/firebasejs/10.12.2';
const KEY = 'pushToken';

/** iOS only exposes PushManager to an installed (home-screen) PWA, so this is false in a Safari tab. */
export const pushSupported = () =>
  Boolean(FIREBASE.apiKey && FIREBASE.appId && VAPID_KEY) &&
  'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window;

/** Asks for permission (must run inside a tap on iOS), then registers. Returns the permission. */
export async function enablePush() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') await syncToken();
  return permission;
}

/** Re-sends the token whenever FCM rotates it, so a granted reader keeps receiving pushes. */
export async function syncToken() {
  const [{ initializeApp }, { getMessaging, getToken }] = await Promise.all([
    import(`${SDK}/firebase-app.js`),
    import(`${SDK}/firebase-messaging.js`),
  ]);
  const token = await getToken(getMessaging(initializeApp(FIREBASE)), {
    vapidKey: VAPID_KEY,
    serviceWorkerRegistration: await navigator.serviceWorker.ready,
  });
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch { /* private mode */ }
  if (!token || token === saved) return;
  const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE.projectId}/databases/(default)/documents/webTokens?key=${FIREBASE.apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: { token: { stringValue: token }, createdAt: { timestampValue: new Date().toISOString() } } }),
  });
  if (!res.ok) throw new Error(`Gagal menyimpan token notifikasi (${res.status})`);
  try { localStorage.setItem(KEY, token); } catch { /* private mode */ }
}
