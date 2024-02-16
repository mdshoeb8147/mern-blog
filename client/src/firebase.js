// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2f0f1.firebaseapp.com",
  projectId: "mern-blog-2f0f1",
  storageBucket: "mern-blog-2f0f1.appspot.com",
  messagingSenderId: "730638756600",
  appId: "1:730638756600:web:23d55595516b342ecf290d",
  measurementId: "G-WQFPKZMMX8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
