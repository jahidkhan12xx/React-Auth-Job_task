// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvsRwYuJHrPCsuFX2ICA9j1ATkmQRvsfQ",
  authDomain: "react-auth-66899.firebaseapp.com",
  projectId: "react-auth-66899",
  storageBucket: "react-auth-66899.appspot.com",
  messagingSenderId: "209354771113",
  appId: "1:209354771113:web:99dfc62b683acf1f8777b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
