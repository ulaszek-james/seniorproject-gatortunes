import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Profile from "./pages/profile";
import Home from "./pages/home";
import SpotifyLogin from "./SpotifyLogin";
import SignUpPage from "./SignUpPage";
import { UserContext } from "./contexts/googleuser.context";
import { useContext, useEffect } from "react";
import TestComponent from "./TestComponent";
import { db } from "./firebase/firebase";
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
import ImportData from "./ImportData";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const { currentUser } = useContext(UserContext);
  //console.log(currentUser.uid);

  return currentUser ? (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Home />}></Route>

        <Route path="/importdata" element={<ImportData code={code} />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/profile" element={<Dashboard />}></Route>
        {currentUser ? (
          <Route path="/login" element={<SignUpPage />}></Route>
        ) : (
          <Route path="/login" element={<SpotifyLogin />}></Route>
        )}
      </Route>
    </Routes>
  ) : (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Home />}></Route>
        <Route path="/login" element={<SignUpPage />}></Route>
    </Routes>
    </>
  );
}

export default App;

// return (currentUser ? ( <Routes>
//   <Route path='/' element={<NavBar code={code} />}>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/about" element={<About />}></Route>
//     <Route path="/profile" element={<Profile code={code} />}></Route>
//     <Route path="/login" element={<SignUpPage />}></Route>
//   </Route>
// </Routes>) : (<SignUpPage />)
// )

/*
function App() {
  return code ? 
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Dashboard code={code} /> 
    </>
      : <Login />;
}
*/
