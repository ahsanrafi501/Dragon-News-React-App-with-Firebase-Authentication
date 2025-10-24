// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFd85pslIFHl8cuFZ-aVpOl50_LBHFtmk",
  authDomain: "dragon-news-auth-33526.firebaseapp.com",
  projectId: "dragon-news-auth-33526",
  storageBucket: "dragon-news-auth-33526.firebasestorage.app",
  messagingSenderId: "455152111439",
  appId: "1:455152111439:web:2c11706b33b18f77df7f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;