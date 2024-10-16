import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN3DWCVIUc05MLqFeY_FI5Y2x8UpmxJUI",
  authDomain: "web-game-5b1b6.firebaseapp.com",
  projectId: "web-game-5b1b6",
  storageBucket: "web-game-5b1b6.appspot.com",
  messagingSenderId: "512220286729",
  appId: "1:512220286729:web:32be683c83ad211b0d8dd8",
  measurementId: "G-080QL0GFHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
