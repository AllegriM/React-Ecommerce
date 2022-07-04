// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMCWkjwWsgqy6_Vw7e9WIpQghh3bf2m7o",
    authDomain: "melicopy-d736f.firebaseapp.com",
    projectId: "melicopy-d736f",
    storageBucket: "melicopy-d736f.appspot.com",
    messagingSenderId: "1071009240526",
    appId: "1:1071009240526:web:3c11a0da1683778e47079f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const getFirestoreApp = () => {
    return app;
}