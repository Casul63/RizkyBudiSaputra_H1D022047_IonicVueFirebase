import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJ16XY6VRwk__paMzwNZPBYh1ADa2kdkI",
    authDomain: "vue-firebase-5d5c4.firebaseapp.com",
    projectId: "vue-firebase-5d5c4",
    storageBucket: "vue-firebase-5d5c4.firebasestorage.app",
    messagingSenderId: "784946743380",
    appId: "1:784946743380:web:35b2ba13d05b49d73f45c1"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
