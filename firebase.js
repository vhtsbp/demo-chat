import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChflV7uLiIIgf0baiQbrzy1XLmsGoqAjg",
    authDomain: "fir-chat-1cfae.firebaseapp.com",
    projectId: "fir-chat-1cfae",
    storageBucket: "fir-chat-1cfae.appspot.com",
    messagingSenderId: "784916355512",
    appId: "1:784916355512:web:ed13a6e09400215ae0174d",
    measurementId: "G-H4GKYP811V"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };