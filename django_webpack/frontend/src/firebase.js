// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "bug-project-e5a9e.firebaseapp.com",
  projectId: "bug-project-e5a9e",
  storageBucket: "bug-project-e5a9e.appspot.com",
  messagingSenderId: "15464347274",
  appId: "1:15464347274:web:92e4824ec2d742c27a1f73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
