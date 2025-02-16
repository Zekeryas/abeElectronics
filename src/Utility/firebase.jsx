// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// // For authentication
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuUSZb1L8mSdBe9ZwCHmTHZd4SHptYkew",
  authDomain: "abe-electronics.firebaseapp.com",
  projectId: "abe-electronics",
  storageBucket: "abe-electronics.firebasestorage.app",
  messagingSenderId: "802559917843",
  appId: "1:802559917843:web:53fd58e4a970bae36e24e6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= app.firestore()








// import firebase from "firebase/compat/app";
// // For authentication
// import { getAuth } from "firebase/auth"
// import "firebase/compat/firestore"
// import "firebase/compat/auth"

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHbh5vwLD3FbfrhU64ydYDp4UiH6S3F9o",
//   authDomain: "clone-ed596.firebaseapp.com",
//   projectId: "clone-ed596",
//   storageBucket: "clone-ed596.firebasestorage.app",
//   messagingSenderId: "424467370323",
//   appId: "1:424467370323:web:ab21d43ec1848833e451a6",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const db= app.firestore()
