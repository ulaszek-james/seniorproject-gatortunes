import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { UserContext } from "../contexts/googleuser.context";
import { useContext } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import "../styles.css";
import GetProfileData from "../GetProfileData";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);

  const [userinfoExists, setUserInfoExists] = useState(false);

  const checkIfExists = async () => {
    const docRef = doc(db, "userinfo", currentUser.uid);
    const docSnapshot = await getDoc(docRef);
    const booleanVal = docSnapshot.exists();
    console.log(booleanVal);
    setUserInfoExists(booleanVal);
    console.log(userinfoExists);
  };

  useEffect(() => {
    checkIfExists();
  }, []);

  //check if a document in userinfo with the currentuser.uid exists. if it
  //does, show profile. else show import data to firestore button
  console.log(userinfoExists);
  return userinfoExists ? (
    <div>
      <GetProfileData></GetProfileData>
    </div>
  ) : (
    <div>
      <h1>No data</h1>
    </div>
  );
};

export default Dashboard;
