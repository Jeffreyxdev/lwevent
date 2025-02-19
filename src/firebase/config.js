// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_fvdwozPPgIej6Vj2LQ95ccTcQLBW3v8",
  authDomain: "a-night-to-remeber.firebaseapp.com",
  projectId: "a-night-to-remeber",
  storageBucket: "a-night-to-remeber.firebasestorage.app",
  messagingSenderId: "660808696785",
  appId: "1:660808696785:web:6f2a2a1ada1c1d1bf696f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export default app;