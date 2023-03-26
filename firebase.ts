// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqH4Hr3A50DZ9-K3FnH2iTUhe_ycFPM6Q",
  authDomain: "chatgpt-messenger-strastan.firebaseapp.com",
  projectId: "chatgpt-messenger-strastan",
  storageBucket: "chatgpt-messenger-strastan.appspot.com",
  messagingSenderId: "386310783602",
  appId: "1:386310783602:web:547c39efdc119644b638eb",
  measurementId: "G-VQD3DHTTH5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };