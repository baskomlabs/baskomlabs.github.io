// Isi dengan string QRIS statis (000201...). Kosong = halaman Sedekah menampilkan "segera hadir".
export const QRIS_PAYLOAD = '';

// Pilihan nominal sedekah, rupiah.
export const AMOUNTS = [10000, 25000, 50000, 100000];

// Notifikasi (FCM, paket gratis). Ambil dari Firebase Console → Project settings:
//  - FIREBASE: General → Your apps → Web app → SDK config (apiKey, projectId, messagingSenderId, appId)
//  - VAPID_KEY: Cloud Messaging → Web Push certificates → Key pair
// Kosong = kartu "Aktifkan notifikasi" tidak ditampilkan.
export const FIREBASE = { apiKey: '', projectId: 'yasin-tahlil-maulid-nu', messagingSenderId: '', appId: '' };
export const VAPID_KEY = '';
