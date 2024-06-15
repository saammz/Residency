// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlFN8Fc9sfC-usx8-Kz6KfVmuzXPuzN5c",
  authDomain: "residency-cfbee.firebaseapp.com",
  projectId: "residency-cfbee",
  storageBucket: "residency-cfbee.appspot.com",
  messagingSenderId: "826175581035",
  appId: "1:826175581035:web:44900ec83f75b9ee84fa2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;