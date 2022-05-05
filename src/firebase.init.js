// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOKkYBxqYODEkw2e7ZAh39Eqej6P4Cvfk",
  authDomain: "vehico-mart-services.firebaseapp.com",
  projectId: "vehico-mart-services",
  storageBucket: "vehico-mart-services.appspot.com",
  messagingSenderId: "875841972553",
  appId: "1:875841972553:web:4973aac4e926cc15cb9298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;