// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH6owpL0MafVm9ZmfdGvZXviet3k2SQc8",
  authDomain: "next-netflix-581a8.firebaseapp.com",
  projectId: "next-netflix-581a8",
  storageBucket: "next-netflix-581a8.appspot.com",
  messagingSenderId: "91358090399",
  appId: "1:91358090399:web:ead474b4cbe0aef1607eaa",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
