import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration (if you want to add your config you can do it directly here or with an .env file.)
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
