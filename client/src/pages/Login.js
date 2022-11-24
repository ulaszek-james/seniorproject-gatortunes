import React from "react";
import { Container } from "react-bootstrap";
import SpotifyLogin from '../SpotifyLogin'

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8ab7f351ac43415586fa613bb9e7fe62&response_type=code&redirect_uri=http://localhost:3000/profile&scope=playlist-read-collaborative%20playlist-read-private%20user-follow-read%20user-library-read%20user-read-currently-playing%20user-read-email%20user-read-playback-position%20user-read-playback-state%20user-read-private%20user-read-recently-played%20user-top-read";

export default function Login() {
  return <SpotifyLogin />
}



  // return (
  //   <>
  //     <div>
  //       <div className="spacer layered-waves"></div>
  //       <Container className="home-page-container" style={{ minHeight: "10vh" }}>
  //         <div className="home-page-title">Gator Tunes</div>
  //         <a className="btn btn-success btn-lg" href={AUTH_URL}>
  //           Login With Spotify
  //         </a>
  //       </Container>
  //     </div>
  //   </>
  // );