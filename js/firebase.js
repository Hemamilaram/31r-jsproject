// Import Firebase core and auth modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { 
  getAuth, 
  signInAnonymously, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCArA-M1kA28Zr-MfGA8AHrujVaJtBxkr0",
  authDomain: "tailsandtreats.firebaseapp.com",
  projectId: "tailsandtreats",
  storageBucket: "tailsandtreats.appspot.com", 
  messagingSenderId: "527033962954",
  appId: "1:527033962954:web:7e28cfc7505096487bff33"
};

//  Initialize Firebase app
const app = initializeApp(firebaseConfig);

//  Initialize authentication
const auth = getAuth(app);

export {
  app, 
  auth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
};
