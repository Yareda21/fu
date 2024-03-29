// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdM7eP-VQroO9wUZRYENasukvDJfr4N84",
  authDomain: "full-2c962.firebaseapp.com",
  projectId: "full-2c962",
  storageBucket: "full-2c962.appspot.com",
  messagingSenderId: "328024756429",
  appId: "1:328024756429:web:288908d9a23cbc56d85984",
  measurementId: "G-056NEQBBNB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app)



export { db, auth, storage}