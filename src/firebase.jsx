import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIIB0XkYLsX1m5LImG358zY8ARE5CEMYQ",
  authDomain: "r-class-44d41.firebaseapp.com",
  projectId: "r-class-44d41",
  storageBucket: "r-class-44d41.appspot.com",
  messagingSenderId: "971895950428",
  appId: "1:971895950428:web:05fb35f644148d65dc6a99"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);