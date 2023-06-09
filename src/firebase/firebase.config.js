// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnq0hYDBDhHP9TsttgxtMdnydpBHkUTnI",
  authDomain: "assignment-12-fas-sports.firebaseapp.com",
  projectId: "assignment-12-fas-sports",
  storageBucket: "assignment-12-fas-sports.appspot.com",
  messagingSenderId: "1013110237353",
  appId: "1:1013110237353:web:178df0fe1deeb301b1a1b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app