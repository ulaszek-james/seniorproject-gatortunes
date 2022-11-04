import "./styles.css";

export default function UserInfo({ username, userImage }) {
  return (
    <div className="user-info-card">
      <img className="profile-picture" src={userImage}></img>

      <div>
        <div className="user-name">{username}</div>
        <div className="user-bio">Welcome to my profile!</div>
        <div className="spotify-link">Spotify Link</div>
      </div>
    </div>
  );
}
