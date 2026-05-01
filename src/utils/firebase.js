// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCeMv2E5Q3pCZrCCYCnkv7WTXcUFFhcsVw",
  authDomain: "netflix-gpt-7a163.firebaseapp.com",
  projectId: "netflix-gpt-7a163",
  storageBucket: "netflix-gpt-7a163.firebasestorage.app",
  messagingSenderId: "233150865675",
  appId: "1:233150865675:web:22d43b537ddd549e82420e",
  measurementId: "G-YM21F9G3CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);