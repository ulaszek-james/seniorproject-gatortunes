import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../contexts/googleuser.context";
import GetProfileData from "../GetProfileData";
import '../styles.css';

function login() {
  window.location = '../login';
}
const Home = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <div className="spacer layered-waves"></div>
      <div className="home-page-container">
        <div className="home-page-title">Gator Tunes</div>
        {!currentUser ? (
          <div>
            <button className="home-page-btn" onClick={login}> Login </button>
          </div>
        ) : (
          <div>
            <p>Already logged in :D</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
