// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBCmmef1Eq0QC8XiD-pAaecWwTaqS9ihBA",
    authDomain: "vue-firebase-7a8e0.firebaseapp.com",
    projectId: "vue-firebase-7a8e0",
    storageBucket: "vue-firebase-7a8e0.firebasestorage.app",
    messagingSenderId: "785879359719",
    appId: "1:785879359719:web:690515187a4fc5ca7d4242"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);
export { auth, googleProvider, db };



