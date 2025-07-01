// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDK7-rgrLlxEAFf4_vhhApJ71Hpm38bVI8",
    authDomain: "curso-romeno-novo.firebaseapp.com",
    projectId: "curso-romeno-novo",
    storageBucket: "curso-romeno-novo.firebasestorage.app",
    messagingSenderId: "590627028229",
    appId: "1:590627028229:web:e67aecd0e98c3020530b6c",
    measurementId: "G-M8PQR75GDM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
