// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth ,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
 } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXNyHKV92eM5OIyQV_sgViMvLGcZsxHkQ",
  authDomain: "crown-clothing-db-fd20e.firebaseapp.com",
  projectId: "crown-clothing-db-fd20e",
  storageBucket: "crown-clothing-db-fd20e.appspot.com",
  messagingSenderId: "782066600757",
  appId: "1:782066600757:web:48c6c89eb20eaa05e5da7c"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);



