import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, 
onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } 
from "firebase/auth";

import initializeFirebase from "../Components/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [logInError, setLogInError] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);

                setLogInError("");
                const destination = location?.state?.from || "/dashboard";
                history.replace(destination);
            })
            .catch((error) => {
                setLogInError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // user registration
    const handleUserRegister = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((results) => {
                setError("");
                const newUser = { email, displayName: name };
                setUser(newUser);

                // set name after register
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch((error) => {});
                history.replace("/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // user login
    const handleUserLogin = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((results) => {
                const redirect_uri = location?.state?.from || "/dashboard";
                history.push(redirect_uri);
                setLogInError("");
            })
            .catch((error) => {
                setLogInError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // user state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);


    // user logout
    const logOut = (history) => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                history.replace("/");
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setLoading(false));
    };

    return {
        user,
        setLoading,
        handleUserRegister,
        signInWithGoogle,
        logOut,
        handleUserLogin,
        loading,
        error,
        logInError,
    };
};


export default useFirebase;