import { UserContext } from "./contexts/googleuser.context";
import { useContext } from "react";
import { db } from "./firebase/firebase";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

const TestComponent = () => {
  const { currentUser } = useContext(UserContext);
  const [returnedData, setReturnedData] = useState(null);

  // useEffect(() => {
  //   console.log("hi");
  // }, []);

  const testFunction = async () => {
    const q = query(
      collection(db, "tracks"),
      where("userID", "==", "eveZCZ3UbGQyNMExr35jQsbdwk22")
    );
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);
  };

  return (
    <div>
      <h1>test</h1>
      <button onClick={testFunction}>Test Firestore</button>
    </div>
  );
};

export default TestComponent;
// db.collection("tracks")
//       .get()
//       .then((ss) => {
//         console.log(ss);
//       });
