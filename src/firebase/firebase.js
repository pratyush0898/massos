// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-qfs3YcMdVji58u4YfFP5_G6tcErYi1s",
  authDomain: "messos.firebaseapp.com",
  projectId: "messos",
  storageBucket: "messos.appspot.com",
  messagingSenderId: "1096653203349",
  appId: "1:1096653203349:web:ef35e7db014b5d0e9ef89c",
  measurementId: "G-8RNZ0VSF3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);