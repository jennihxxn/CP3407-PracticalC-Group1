// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AlzaSyAN0DYUely8AOKrYZH6zjTSIJFAhmUb5gE",
  authDomain: "cp3407-project-pracc-group1.firebaseapp.com",
  projectId: "cp3407-project-pracc-group1",
  storageBucket: "cp3407-project-pracc-group1.appspot.com",
  messagingSenderId: "653807348462",
  appId: "1:653807348462:web:1ac348c2c9dfecc033e1ff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
