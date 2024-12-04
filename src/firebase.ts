// src/firebase.js or src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

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
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
