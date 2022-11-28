// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbLz3aX21v5cOUwVGUMzxUaPjQ5stVedQ",
  authDomain: "gator-tunes-d9dce.firebaseapp.com",
  databaseURL: "https://gator-tunes-d9dce-default-rtdb.firebaseio.com",
  projectId: "gator-tunes-d9dce",
  storageBucket: "gator-tunes-d9dce.appspot.com",
  messagingSenderId: "103851147427",
  appId: "1:103851147427:web:133552abc90341532bff16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Create Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//auth singleton
export const auth = getAuth();

//database singleton
export const db = getFirestore(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocFromAuth = async (userAuthenticationObject) => {
  //check if there is an existing firesotre reference
  //we use this userDocRef to set data in a unique place in the db
  //give me the document reference inside this db in the users collection with this uid
  const userDocRef = doc(db, "users", userAuthenticationObject.uid);
  console.log(userDocRef);

  //the snapshot is kinda like the data
  //check if data exists here, and get/set the data at this unique place in the database
  //the snapshot is a special object that has different ways attached to get and set data
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  //if the user snapshot doesnt exist already
  if (!userSnapshot.exists()) {
    console.log(userAuthenticationObject);
    const { displayName, email } = userAuthenticationObject;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error.message);
    }
  }
  //if it already exists, just return the doc reference
  return userDocRef;
};

//auth is keeping track of what users are currently signed in
export const signUserOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
