import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAvxFRrN-K9QQ5rhfP3cc9caZ88ewJTR4U",
  authDomain: "siddhi-car-rental.firebaseapp.com",
  projectId: "siddhi-car-rental",
  storageBucket: "siddhi-car-rental.firebasestorage.app",
  messagingSenderId: "386158181501",
  appId: "1:386158181501:web:31623b58227b18dbb14514",
  measurementId: "G-W8WFJLP6GX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support persistence.');
  }
});

export default app;