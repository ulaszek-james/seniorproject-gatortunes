import React from "react";
import { Container } from "react-bootstrap";
import GetProfileData from "../GetProfileData";
import '../styles.css';

function login() {
  window.location = '../login';
}
const Home = () => {
  return (
    <>
      <div className="spacer layered-waves"></div>
      <div className="home-page-container">
        <div className="home-page-title">Gator Tunes</div>
        <button className="home-page-btn" onClick={login}> Login </button>
      </div>
    </>
  );
};

export default Home;
