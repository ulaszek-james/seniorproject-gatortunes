export default function TopTracks({ artist }) {

    return (
        <div>
            <img src={ artist.url } height={64} width={64}></img>
            <h2>{ artist.name }</h2>
        </div>
    )
}