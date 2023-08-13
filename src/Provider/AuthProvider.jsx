import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState('')
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            /*    if (currentUser) {
                   fetch('http://localhost:5000/ganarate_jwt', {
                       method: 'POST',
                       headers: {
                           'content-type': 'application/json'
                       },
                       body: JSON.stringify({ email: currentUser.email })
                   })
                       .then(res => res.json())
                       .then(data => {
                           localStorage.setItem('jwt_token', data?.token)
                           setUser(currentUser)
                           setLoding(false)
                       })
               }
               else {
                   localStorage.removeItem('jwt_token')
                   setLoding(false)
               } */
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const value = {
        user,
        loading,
        setLoading,
        resetPassword,
        updateUserProfile,
        logOut,
        googleLogin,
        signInUser,
        createUser
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;