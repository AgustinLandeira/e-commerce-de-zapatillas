// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS2mjzQ6MuQMBtala1oFAmPMOigSzAq1k",
    authDomain: "ecommerce-zapatillas-a367a.firebaseapp.com",
    projectId: "ecommerce-zapatillas-a367a",
    storageBucket: "ecommerce-zapatillas-a367a.firebasestorage.app",
    messagingSenderId: "583593614144",
    appId: "1:583593614144:web:97fdd55b83a389c73238a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//conseguimos la bd no sql
const db = getFirestore(app)

//para el login
const auth = getAuth(app)

export {db,auth}