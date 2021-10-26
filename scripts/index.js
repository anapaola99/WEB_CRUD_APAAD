// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgAoi11VhOcJsUwia-qLz24AuRBbo-vqo",
  authDomain: "apaad-crud.firebaseapp.com",
  projectId: "apaad-crud",
  storageBucket: "apaad-crud.appspot.com",
  messagingSenderId: "1090673811794",
  appId: "1:1090673811794:web:61d7e68c8dd433f66bda8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
