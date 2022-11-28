export default function TopTracks({ track }) {
  return (
    <div className="top-track-combo">
      <img src={track.albumCoverUrl} height={150} width={150}></img>
      <div className="track-name">{track.name}</div>
      <div>{track.artist}</div>
    </div>
  );
}
