// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz0YErBBRuXvLWkL-PFttwaHENNxB0up0",
  authDomain: "fabled-badge-363614.firebaseapp.com",
  projectId: "fabled-badge-363614",
  storageBucket: "fabled-badge-363614.appspot.com",
  messagingSenderId: "550282813283",
  appId: "1:550282813283:web:b1f18e41e30e45d68dfd56",
  measurementId: "G-4SJJG80MS5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth();
