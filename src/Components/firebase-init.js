// src/Components/firebase-init.js

import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp as firebaseServerTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBgz_Z1RedwIdK91u_dQ38Pj61lKhx56B8",
  authDomain: "unified-7ca1e.firebaseapp.com",
  projectId: "unified-7ca1e",
  storageBucket: "unified-7ca1e.appspot.com",
  messagingSenderId: "621399628030",
  appId: "1:621399628030:web:f0e753432f2876d5aeedaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Google Sign-In Provider
const provider = new GoogleAuthProvider();

// Export for use in your components
export { db, auth, provider, firebaseServerTimestamp as serverTimestamp };