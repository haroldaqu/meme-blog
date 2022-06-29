// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzUeav9TO6b7ppH2EaJoYtD2pOLEvHkcw",
  authDomain: "meme-blog-8ca22.firebaseapp.com",
  projectId: "meme-blog-8ca22",
  storageBucket: "meme-blog-8ca22.appspot.com",
  messagingSenderId: "291728661056",
  appId: "1:291728661056:web:177d3f09209850881bdda5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();