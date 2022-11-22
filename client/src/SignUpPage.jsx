import React from "react";
import SpotifyLogin from './SpotifyLogin'
import { signInWithGooglePopup, createUserDocFromAuth } from './firebase/firebase'

const SignUpPage = () => {

  const logGoogleUser = async () => {
    //destructure user off of the result, so we can create a doc ref with just the user
    const { user } = await signInWithGooglePopup();
    //console.log(user);
    const userDocRef = await createUserDocFromAuth(user);
  }

    return (
        <div>
        <h1>This is the signup page</h1>
        <button onClick={logGoogleUser}>Login With Google</button>
        <SpotifyLogin />
        </div>
    );
};

export default SignUpPage;
