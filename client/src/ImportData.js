import { UserContext } from "./contexts/googleuser.context";
import { useContext } from "react";
import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import { db } from "./firebase/firebase";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const spotifyApi = new SpotifyWebApi({
  clientId: "8ab7f351ac43415586fa613bb9e7fe62",
});

const ImportData = ({ code }) => {
  const { currentUser } = useContext(UserContext);

  const accessToken = useAuth(code);
  const [username, setUsername] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userTopTracks, setUserTopTracks] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
  const [userSpotifyURL, setUserSpotifyURL] = useState("");
  const [userArtistData, setUserArtistData] = useState([]);
  const [importDisplayMessage, setImportDisplayMessage] = useState(
    "Click here to import your Spotify Data"
  );

  const importSpotifyDataToFirestore = async () => {
    //add all of the data to firestore
    await setDoc(doc(db, "userinfo", `${currentUser.uid}`), {
      name: username,
      profilePicture: userImage,
      profileUrl: userSpotifyURL,
      userID: currentUser.uid,
    });

    userTopTracks.map(
      async (track) =>
        await setDoc(doc(db, "tracks", `${track.trackID}_${currentUser.uid}`), {
          artist: track.artist,
          title: track.title,
          uri: track.uri,
          albumCoverUrl: track.albumCoverUrl,
          userID: currentUser.uid,
        })
    );

    userTopArtists.map(
      async (artist) =>
        await setDoc(
          doc(db, "artists", `${artist.artistID}_${currentUser.uid}`),
          {
            name: artist.name,
            pictureUrl: artist.pictureUrl,
            uri: artist.uri,
            artistID: artist.artistID,
            userID: currentUser.uid,
            genre: artist.genre,
          }
        )
    );
    setImportDisplayMessage(
      "Data imported! Please navigate to the profile page"
    );
  };

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
        setUserSpotifyURL(res.body.external_urls.spotify);
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
            //console.log(track);
            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumCoverUrl: track.album.images[0].url,
              trackID: track.id,
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
        setUserArtistData(res.body.items);
        setUserTopArtists(
          res.body.items.map((artist) => {
            return {
              name: artist.name,
              pictureUrl: artist.images[0].url,
              uri: artist.uri,
              artistID: artist.id,
              genre: artist.genres[0],
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
    <div className="import-data-page">
      <h1>{importDisplayMessage}</h1>
      <button className="sign-in-button" onClick={importSpotifyDataToFirestore}>
        Import
      </button>
    </div>
  );
};

export default ImportData;
