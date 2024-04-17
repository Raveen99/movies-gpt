// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAUw2P2CQ2DBotHO60gcIVWFJtUBcKlwo",
  authDomain: "movies-gpt-a390e.firebaseapp.com",
  projectId: "movies-gpt-a390e",
  storageBucket: "movies-gpt-a390e.appspot.com",
  messagingSenderId: "236597258285",
  appId: "1:236597258285:web:e093926d257f4e427f70a4",
  measurementId: "G-YYC79XWV5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth();
