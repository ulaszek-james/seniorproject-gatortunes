import React from "react";
import Dashboard from './Dashboard'
import SpotifyLogin from '../SpotifyLogin';
import { UserContext } from '.././contexts/googleuser.context'
import { useContext } from 'react';

const Profile = (code) => {

    const { currentUser } = useContext(UserContext);

    return (code && currentUser ? 
    (<div>
        <Dashboard code={code}/>
        </div>) 
        : (<SpotifyLogin />)
        
    );
};

export default Profile;
