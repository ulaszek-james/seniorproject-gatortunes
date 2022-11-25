import React from "react";
import SpotifyLogin from './SpotifyLogin'
import { useContext } from 'react'
import { signInWithGooglePopup, createUserDocFromAuth } from './firebase/firebase'
//import { UserContext } from './contexts/googleuser.context'

const SignUpPage = () => {


  const logGoogleUser = async () => {
    //destructure user off of the result, so we can create a doc ref with just the user
    await signInWithGooglePopup();
    //console.log(user);
  }

    return (
        <div className='sign-in-page'>
        <div className='sign-in-title'>Sign In</div>
        <button className='sign-in-button' onClick={logGoogleUser}>Login With Google</button>
        </div>
    );
};

export default SignUpPage;
