import React from "react";
import GetProfileData from "../GetProfileData";
import TestComponent from "../TestComponent";

const About = () => {
  return (
    <>
    <section className="stars-out">
      <div className="home-page-container">
        <h1>This is the about page</h1>
        <h2>Our mission statement</h2>
        <h2>Meet the team</h2>
      </div>
    </section>
    </>
  );
};
// Sofie here I want the svg file serving as the background img for entire page (look at .stars-out class)
// It's only spanning the height of the container rn

export default About;
//<TestComponent />
