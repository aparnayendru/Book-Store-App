// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKJdHSQdUxGDAoiK4K5YDHEZN-_MzZjHU",
  authDomain: "mern-book-store-e739d.firebaseapp.com",
  projectId: "mern-book-store-e739d",
  storageBucket: "mern-book-store-e739d.appspot.com",
  messagingSenderId: "646907295361",
  appId: "1:646907295361:web:4f9d8631d93ff5b3a67f80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;