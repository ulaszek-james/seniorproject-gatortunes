import React from "react";
import GetProfileData from "../GetProfileData";
import TestComponent from "../TestComponent";
import james from '../images/james.png'
import dave from '../images/dave.png'
import daniel from '../images/daniel.jpg'

const About = () => {
  return (
    <>
    <div className="about-page-container">
      <div className="about-page-title">
        <div>Our Mission</div>
      </div>
      <p className="mission-statement">People love tracking and sharing their music listening habits. Many applications allow users to share their taste with others but are lacking in features, are gimmicky, and fail to retain users. We intend to create a one-stop-shop web application that allows users to both track and share the music they listen to, as well as easily convey to others their taste through comprehensive, custom profiles and other compelling features.</p>
      <h2> Let's meet the team...</h2>
      <div class="team-pics">
        <div class="james">
          <div class="name">James Ulaszek</div>
          <img src={james}/>
          <div class="text">James worked on the frontend and the UI.</div>
        </div>
        <div class="dave">
          <div class="name">David Cooney</div>
          <img src={dave}/>
          <div class="text">David worked on the Firestore Database and it's Implementaion, as well as the UI.</div>
        </div>
        <div class="daniel">
          <div class="name">Daniel Rocco</div>
          <img src={daniel}/>
          <div class="text">Daniel worked on Spotify authentication and the UI.</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
//<TestComponent />
