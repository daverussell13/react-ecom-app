import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZxVmNSqNFeC0tLuxGturLEEDnM0AfLjY",
  authDomain: "crwn-db-1a11a.firebaseapp.com",
  projectId: "crwn-db-1a11a",
  storageBucket: "crwn-db-1a11a.appspot.com",
  messagingSenderId: "232698817515",
  appId: "1:232698817515:web:c4ad5c712f29221f5c47ae",
  measurementId: "G-L1K4GF32TT"
};

// init firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// set provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' })
export const signInWithGoogle = () => signInWithPopup(auth,provider);