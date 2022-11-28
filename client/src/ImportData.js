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

const ImportData = () => {
  // const { currentUser } = useContext(UserContext);

  // //const accessToken = useAuth(code);
  // const [username, setUsername] = useState("");
  // const [userImage, setUserImage] = useState("");
  // const [userTopTracks, setUserTopTracks] = useState([]);
  // const [userTopArtists, setUserTopArtists] = useState([]);
  // const [userSpotifyURL, setUserSpotifyURL] = useState("");
  // const [userArtistData, setUserArtistData] = useState([]);

  // const importSpotifyData = async () => {
  //   // await setDoc(doc(db, "tracks", "asdfa34sdf"), {
  //   //   artist: userTopTracks[0].artist,
  //   //   name: userTopTracks[0].title,
  //   // });

  //   //set access token and refresh token

  //   userTopTracks.map(
  //     async (track) =>
  //       await addDoc(collection(db, "tracks"), {
  //         artist: track.artist,
  //         name: track.title,
  //         uri: track.uri,
  //         albumCoverUrl: track.albumUrl,
  //         userID: currentUser.uid,
  //       })
  //   );

  //   userArtistData.map(
  //     async (artist) =>
  //       await addDoc(collection(db, "artists"), {
  //         name: artist.name,
  //         url: artist.images[0].url,
  //         uri: artist.uri,
  //       })
  //   );
  // };

  // // for whenever access token changes
  // useEffect(() => {
  //   if (!accessToken) return;
  //   spotifyApi.setAccessToken(accessToken);
  // }, [accessToken]);

  // // get username and user image from API
  // useEffect(() => {
  //   if (!accessToken) return;

  //   spotifyApi.getMe().then(
  //     (res) => {
  //       setUserSpotifyURL(res.body.external_urls.spotify);
  //       setUsername(res.body.display_name);
  //       setUserImage(res.body.images[0].url);
  //     },
  //     (err) => {
  //       return null;
  //     }
  //   );
  // }, [accessToken]);

  // // get user's top tracks of all time
  // useEffect(() => {
  //   if (!accessToken) return;

  //   spotifyApi.getMyTopTracks({ limit: 5, time_range: "long_term" }).then(
  //     (res) => {
  //       setUserTopTracks(
  //         res.body.items.map((track) => {
  //           return {
  //             artist: track.artists[0].name,
  //             title: track.name,
  //             uri: track.uri,
  //             albumUrl: track.album.images[0].url,
  //           };
  //         })
  //       );
  //     },
  //     (err) => {
  //       return null;
  //     }
  //   );
  // }, [accessToken]);

  // // get user's top artists of all time
  // useEffect(() => {
  //   if (!accessToken) return;

  //   spotifyApi.getMyTopArtists({ limit: 5, time_range: "long_term" }).then(
  //     (res) => {
  //       setUserArtistData(res.body.items);
  //       setUserTopArtists(
  //         res.body.items.map((artist) => {
  //           return {
  //             name: artist.name,
  //             url: artist.images[0].url,
  //             uri: artist.uri,
  //           };
  //         })
  //       );
  //     },
  //     (err) => {
  //       return null;
  //     }
  //   );
  // }, [accessToken]);

  return (
    <div>
      <h1>Click here to import your Spotify Data</h1>
      <button>Import</button>
    </div>
  );
};

export default ImportData;
