import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  // … your config …
    apiKey: "AIzaSyCArA-M1kA28Zr-MfGA8AHrujVaJtBxkr0",
  authDomain: "tailsandtreats.firebaseapp.com",
  projectId: "tailsandtreats",
  storageBucket: "tailsandtreats.firebasestorage.app",
  messagingSenderId: "527033962954",
  appId: "1:527033962954:web:7e28cfc7505096487bff33"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export for reuse
export { auth, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
