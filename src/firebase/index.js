import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmolVdQpKK5g-cf2z3Nvm9k9WwAnisyFU",
  authDomain: "fir-auth-3ab20.firebaseapp.com",
  projectId: "fir-auth-3ab20",
  storageBucket: "fir-auth-3ab20.appspot.com",
  messagingSenderId: "438270887934",
  appId: "1:438270887934:web:064a20a839bc7ad81be2af"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);