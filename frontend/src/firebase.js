import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN0DYUeIy8AOKrYZH6zjTSIJFAhmUb5gE",
  authDomain: "cp3407-project-pracc-group1.firebaseapp.com",
  projectId: "cp3407-project-pracc-group1",
  storageBucket: "cp3407-project-pracc-group1.firebasestorage.app",
  messagingSenderId: "653807348462",
  appId: "1:653807348462:web:1ac348c2c9dfecc033e1ff",
  measurementId: "G-QZVP4732DM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
