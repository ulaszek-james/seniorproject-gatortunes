export default function UserInfo({ username, userImage }) {

    return (
        <div>
            <h2>{ username }</h2>
            <img src={ userImage } height={100} width={100}></img>
        </div>
    )
}