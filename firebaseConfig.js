// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCafx-gyoveAQ9omzyS7WFMB-4Bfwku_D4",
  authDomain: "itservice-6d660.firebaseapp.com",
  projectId: "itservice-6d660",
  storageBucket: "itservice-6d660.firebasestorage.app",
  messagingSenderId: "52945860842",
  appId: "1:52945860842:web:9210335cae0b5ee5fa7f93",
  measurementId: "G-1LC242572V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const db = getFirestore(app);

export { db, collection, addDoc };
