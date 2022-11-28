import { UserContext } from "./contexts/googleuser.context";
import { useContext } from "react";
import { db } from "./firebase/firebase";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

//gets user's spotify data out of Firestore, to be used on profile/dashboard
const GetProfileData = () => {
  //gets currently logged in Google user
  const { currentUser } = useContext(UserContext);

  console.log("getting profile data");

  //gets tracks that match currentUser from firestore
  const getTracks = async () => {
    //gets tracks
    const q1 = query(
      collection(db, "tracks"),
      where("userID", "==", "eveZCZ3UbGQyNMExr35jQsbdwk22")
    );
    const query1Snapshot = await getDocs(q1);

    //gets artists
    const q2 = query(
      collection(db, "artists"),
      where("userID", "==", "eveZCZ3UbGQyNMExr35jQsbdwk22")
    );
    const query2Snapshot = await getDocs(q2);

    const q3 = query(
      collection(db, "userinfo"),
      where("userID", "==", "eveZCZ3UbGQyNMExr35jQsbdwk22")
    );
    const query3Snapshot = await getDocs(q2);

    query1Snapshot.forEach((doc) => {
      console.log(doc.data());
    });

    console.log(query1Snapshot);
    console.log(query2Snapshot);
    console.log(query3Snapshot);
  };

  return (
    <div>
      <button onClick={getTracks}>Get Data From Firestore</button>
    </div>
  );
};

export default GetProfileData;
