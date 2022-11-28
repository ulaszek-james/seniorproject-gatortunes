import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import SpotifyLogin from "../SpotifyLogin";
import { UserContext } from ".././contexts/googleuser.context";
import { useContext } from "react";
import TestComponent from "../TestComponent";
import ImportData from "../ImportData";
import { db } from "../firebase/firebase";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";

const Profile = (code) => {
  const { currentUser } = useContext(UserContext);
  const doesExist = false;
  useEffect(() => {
    const spotifyAuthCheck = async () => {
      const docRef = doc(db, "userinfo", currentUser.uid);
      const docSnapshot = await getDoc(docRef);
      doesExist = docSnapshot.exists();
      console.log(docSnapshot.exists());
    };

    spotifyAuthCheck();
  }, []);

  return doesExist ? (
    <div>
      <Dashboard code={code} />
    </div>
  ) : (
    <SpotifyLogin />
  );
};

export default Profile;
