import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, 
createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } 
from "firebase/auth";

import initializeFirebase from "../Components/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvider)
            .then((result) => {

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsloading(false))
    }


    // registration
    const createNewUserUsingEmailPassword = (auth, email, password) => {
        setIsloading(true)
        return createUserWithEmailAndPassword(auth, email, password)

            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsloading(false))
    }


    const updateProfiles = (auth, displayName) => {
        setIsloading(true)
        return updateProfile(auth.currentUser, {
            displayName: displayName
        })
            .catch((error) => {
                // An error occurred
                // ...
            }).finally(() => setIsloading(false))
    }



    const signInWithEmailPassword = (auth, email, password) => {
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsloading(false))
    }


    const verifyEmail = () => {
        setIsloading(true)
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            }).finally(() => setIsloading(false))
    }


    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError('')
            } else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unSubscribed
    }, [auth]);


    const logOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        }).finally(() => setIsloading(false))
    }
   

    return {
        auth, 
        user, 
        error, 
        signInUsingGoogle, 
        createNewUserUsingEmailPassword, 
        signInWithEmailPassword, 
        verifyEmail,
        logOut,
        isLoading, 
        updateProfiles
    }
};

export default useFirebase;