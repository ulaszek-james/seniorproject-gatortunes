export default function TopTracks({ artist }) {
  return (
    <div className="top-artist-combo">
      <img src={artist.pictureUrl} height={150} width={150}></img>
      <div className="artist-name">{artist.name}</div>
    </div>
  );
}
