// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-92546.firebaseapp.com",
  projectId: "mern-blog-92546",
  storageBucket: "mern-blog-92546.appspot.com",
  messagingSenderId: "783610547039",
  appId: "1:783610547039:web:64452144d5d9b30a0f84ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);