// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsWRkZplV4O3d0elFjwSKkqvGFoaHk6Jc",
  authDomain: "card-lys.firebaseapp.com",
  databaseURL: "https://card-lys-default-rtdb.firebaseio.com",
  projectId: "card-lys",
  storageBucket: "card-lys.firebasestorage.app",
  messagingSenderId: "1016438040035",
  appId: "1:1016438040035:web:3e98befa19225c81feecd6",
  measurementId: "G-R22JD7GRED"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);