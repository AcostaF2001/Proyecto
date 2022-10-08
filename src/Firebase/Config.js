// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu0SOvA49ykiJOIrhgHFnTrot6yuXaJBA",
  authDomain: "vorafood-fd57d.firebaseapp.com",
  projectId: "vorafood-fd57d",
  storageBucket: "vorafood-fd57d.appspot.com",
  messagingSenderId: "701344250021",
  appId: "1:701344250021:web:64ba0e81e4a2742c42354c",
  measurementId: "G-X6DYW2740M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'it';
const analytics = getAnalytics(app);

export{auth}