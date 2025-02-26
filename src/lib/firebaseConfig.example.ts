import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import type { FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: " ",
  authDomain: " ",
  databaseURL: " ",
  projectId: "card-lys",
  storageBucket: " ",
  messagingSenderId: " ",
  appId: " ",
  measurementId: " "
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app); 
