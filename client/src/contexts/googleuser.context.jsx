import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener, signUserOut
} from "../firebase/firebase";
//actual value you want to access


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//literal functional component
//children is what your wrap inside the context
//the 'value' is an object containing the current value of the current user, as well as the setter function
//lets any of its children access the values inside of its state variables
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// //literal functional component
// //children is what your wrap inside the context
// //the 'value' is an object containing the current value of the current user, as well as the setter function
// //lets any of its children access the values inside of its state variables
// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
