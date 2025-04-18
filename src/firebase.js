// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZgfL2eWo26wouHGCecGKgyZMURmm2_bY",
  authDomain: "expense-track-9cc69.firebaseapp.com",
  projectId: "expense-track-9cc69",
  storageBucket: "expense-track-9cc69.firebasestorage.app",
  messagingSenderId: "736652496734",
  appId: "1:736652496734:web:8e466b87f8731a798649cf",
  measurementId: "G-TT3B3ESMPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };