import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDxaQf-MCUpxqVxYsNHSLhGLFD3xEiNFI4",
  authDomain: "reactchatt-50c77.firebaseapp.com",
  projectId: "reactchatt-50c77",
  storageBucket: "reactchatt-50c77.appspot.com",
  messagingSenderId: "967145892177",
  appId: "1:967145892177:web:bc43539deb45255f288b70"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
export {firebaseConfig};
//ovaj deo cemu sluzi?
export default app;
