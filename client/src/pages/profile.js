import React from "react";
import Dashboard from './Dashboard'
import SpotifyLogin from '../SpotifyLogin';
const Profile = (code) => {
    return (code ? 
    (<div>
        <Dashboard code={code}/>
        </div>) 
        : (<SpotifyLogin />)
        
    );
};

export default Profile;
