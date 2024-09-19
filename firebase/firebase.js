import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
    // ... your config here
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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
