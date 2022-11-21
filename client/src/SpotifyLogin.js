import Dashboard from './pages/Dashboard'

const code = new URLSearchParams(window.location.search).get("code");
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=8ab7f351ac43415586fa613bb9e7fe62&response_type=code&redirect_uri=http://localhost:3000&scope=playlist-read-collaborative%20playlist-read-private%20user-follow-read%20user-library-read%20user-read-currently-playing%20user-read-email%20user-read-playback-position%20user-read-playback-state%20user-read-private%20user-read-recently-played%20user-top-read";


const SpotifyLogin = () => {
  const spotifyLoginHandler = () => {
    window.location = AUTH_URL;
  };

  return code ? (
    <div>
      <Dashboard code={code}></Dashboard>
    </div>
    
  ) : (
    <div>
      <button onClick={spotifyLoginHandler}>Connect your Spotify!</button>
      <h2>{code}</h2>
    </div>
  );
};

export default SpotifyLogin;