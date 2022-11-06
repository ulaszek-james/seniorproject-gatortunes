import "./styles.css";
import spotifyLogo from "./images/file-spotify-logo-png-4.png";

export default function UserInfo({ userURL, username, userImage }) {
  return (
    <div className="user-info-card">
      <img className="profile-picture" src={userImage}></img>

      <div>
        <div className="user-name">{username}</div>
        <div className="user-bio">Welcome to my profile!</div>
        <a href={userURL}>
          <img src={spotifyLogo} className="spotify-logo"></img>
        </a>{" "}
      </div>
    </div>
  );
}
