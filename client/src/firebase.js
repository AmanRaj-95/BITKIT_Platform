// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3dTFfZdAB1vV3xjLLygKXkKkbD6L0uWs",
  authDomain: "discussion-forum-916e6.firebaseapp.com",
  projectId: "discussion-forum-916e6",
  storageBucket: "discussion-forum-916e6.firebasestorage.app",
  messagingSenderId: "994962333116",
  appId: "1:994962333116:web:32af8d5f15f2bcc582dfb9",
  measurementId: "G-JVMTQPCG3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// 🔥 Add analytics only if running in browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}


const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider, analytics };