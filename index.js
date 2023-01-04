// Firebase stuff
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFUd-YKk8iEovNxj22kv5I_O8IDkK1DQg",
  authDomain: "sara-olssons-hemsida.firebaseapp.com",
  databaseURL: "https://sara-olssons-hemsida-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sara-olssons-hemsida",
  storageBucket: "sara-olssons-hemsida.appspot.com",
  messagingSenderId: "281863570036",
  appId: "1:281863570036:web:329a02a1dbc99801618721",
  measurementId: "G-KJV7YJ7PYE"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

import { getDatabase, onValue, ref } from "firebase/database";

const db = getDatabase();
const dataRef = ref(db, 'data/');

let dbData = null



// Get database data
onValue(dataRef, (snapshot) => {
  dbData = snapshot.val()
})

console.log(dbData)

// Import packages
import express from "express";

// Middlewares
const app = express();
app.use(express.json());

// Security
app.disable('x-powered-by')

// Routes
app.use("/", (req, res) => {
    return res.send(dbData)
});

// connection
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening to port ${port}`));