export default function TopTracks({ track }) {

    return (
        <div>
            <img src={ track.albumUrl } height={64} width={64}></img>
            <h2>{ track.title }</h2>
            <h3>{ track.artist }</h3>
        </div>
    )
}