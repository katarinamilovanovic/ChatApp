import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArrXiBZpdivwyqUGdLvIeweI0N75PeiEU",
  authDomain: "chatapp-124b9.firebaseapp.com",
  projectId: "chatapp-124b9",
  storageBucket: "chatapp-124b9.appspot.com",
  messagingSenderId: "554593682750",
  appId: "1:554593682750:web:fa215c8b73465c290b586f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

