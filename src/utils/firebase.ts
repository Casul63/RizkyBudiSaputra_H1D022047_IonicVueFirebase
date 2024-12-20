// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCJ16XY6VRwk__paMzwNZPBYh1ADa2kdkI",
    authDomain: "vue-firebase-5d5c4.firebaseapp.com",
    // databaseURL: "https://vue-firebase-5d5c4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vue-firebase-5d5c4",
    storageBucket: "vue-firebase-5d5c4.firebasestorage.app",
    messagingSenderId: "784946743380",
    appId: "1:784946743380:web:35b2ba13d05b49d73f45c1"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);
export { auth, googleProvider, db };



