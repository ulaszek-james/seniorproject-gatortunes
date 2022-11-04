import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import { Container } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import UserInfo from "./UserInfo";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import "./styles.css";

const spotifyApi = new SpotifyWebApi({
  clientId: "8ab7f351ac43415586fa613bb9e7fe62",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [username, setUsername] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userTopTracks, setUserTopTracks] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);

  // for whenever access token changes
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // get username and user image from API
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMe().then(
      (res) => {
        setUsername(res.body.display_name);
        setUserImage(res.body.images[0].url);
      },
      (err) => {
        return null;
      }
    );
  }, [accessToken]);

  // get user's top tracks of all time
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyTopTracks({ limit: 5, time_range: "long_term" }).then(
      (res) => {
        setUserTopTracks(
          res.body.items.map((track) => {
            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: track.album.images[0].url,
            };
          })
        );
      },
      (err) => {
        return null;
      }
    );
  }, [accessToken]);

  // get user's top artists of all time
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyTopArtists({ limit: 5, time_range: "long_term" }).then(
      (res) => {
        console.log(res.body.items);
        setUserTopArtists(
          res.body.items.map((artist) => {
            return {
              name: artist.name,
              url: artist.images[0].url,
              uri: artist.uri,
            };
          })
        );
      },
      (err) => {
        return null;
      }
    );
  }, [accessToken]);

  return (
    <Container className="profile-container">
      <div className="user-info-container">
        <UserInfo username={username} userImage={userImage} />
      </div>

      <div className="favorites-container">
        <div className="my-top-text">My top tracks:</div>
        <div className="top-tracks-container">
          {userTopTracks.map((track) => (
            <TopTracks track={track} key={track.uri} />
          ))}
        </div>

        <div className="my-top-text">My top artists:</div>
        <div className="top-artists-container">
          {userTopArtists.map((artist) => (
            <TopArtists artist={artist} key={artist.uri} />
          ))}
        </div>
      </div>
    </Container>
  );
}
