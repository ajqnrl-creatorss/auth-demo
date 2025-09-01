import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


//내꺼-본인껄로 반드시 반드시 꼭 꼭 바꾸세요
const firebaseConfig = {
  apiKey: "AIzaSyAOvLBSphxYeLcZ14kQsFNV4XaMyuFikf4",
  authDomain: "auth-demo-8ff69.firebaseapp.com",
  projectId: "auth-demo-8ff69",
  storageBucket: "auth-demo-8ff69.firebasestorage.app",
  messagingSenderId: "1310504032",
  appId: "1:1310504032:web:be001bebfbb40113d4ff05",
  measurementId: "G-6MVVQXZ42S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }