import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? 
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Dashboard code={code} /> 
    </>
      : <Login />;
}

export default App;
