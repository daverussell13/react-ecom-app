import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZxVmNSqNFeC0tLuxGturLEEDnM0AfLjY",
  authDomain: "crwn-db-1a11a.firebaseapp.com",
  projectId: "crwn-db-1a11a",
  storageBucket: "crwn-db-1a11a.appspot.com",
  messagingSenderId: "232698817515",
  appId: "1:232698817515:web:c4ad5c712f29221f5c47ae",
  measurementId: "G-L1K4GF32TT",
};

// init firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// nge write ke db firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, `users/${userAuth.uid}`);
  const userSnapShot = await getDoc(userRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating user : ", err.message);
    }
  }

  return userRef;
};

export const signInWithGoogle = () => {
  // set provider
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  // signInWithPopup
  signInWithPopup(auth, provider).catch((error) => {
    console.log(error);
  });
};
