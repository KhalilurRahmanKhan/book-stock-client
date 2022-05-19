import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAltii6Qc2R7OKRr2nsYqBX1jVhilT6btk",
  authDomain: "book-stock-edae9.firebaseapp.com",
  projectId: "book-stock-edae9",
  storageBucket: "book-stock-edae9.appspot.com",
  messagingSenderId: "354335832671",
  appId: "1:354335832671:web:b5575205ec53bebb03f9ea"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;