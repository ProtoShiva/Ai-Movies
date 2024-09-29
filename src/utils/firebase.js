// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUEyZaXTbYZyCuhwD5rp1DpEiEIAXQzk0",
  authDomain: "movies-gpt-708a9.firebaseapp.com",
  projectId: "movies-gpt-708a9",
  storageBucket: "movies-gpt-708a9.appspot.com",
  messagingSenderId: "1002362749974",
  appId: "1:1002362749974:web:f843992cf9f71ecf4d6137",
  measurementId: "G-XT3KTTH6N6",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
