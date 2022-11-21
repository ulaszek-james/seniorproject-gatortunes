import React from "react";
import { Container } from "react-bootstrap";


const Home = () => {
      return (
    <>
      <div>
        <div className="spacer layered-waves"></div>
        <Container className="home-page-container" style={{ minHeight: "10vh" }}>
          <div className="home-page-title">Gator Tunes</div>
        </Container>
      </div>
    </>
  );
};

export default Home;
