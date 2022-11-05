import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Profile from "./pages/profile";
import Home from "./pages/home";

const code = new URLSearchParams(window.location.search).get("code");

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

export default App;
