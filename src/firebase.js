// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuVkZ5XyDZkq0KT-Mp0je98b6kfy6IB_o",
  authDomain: "enhell-39be6.firebaseapp.com",
  projectId: "enhell-39be6",
  storageBucket: "enhell-39be6.appspot.com",
  messagingSenderId: "714601537813",
  appId: "1:714601537813:web:fff1dd31a42452cead891c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);