import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (LoggedInUser) => {
            console.log('LOgin user observer', LoggedInUser)
            setUser(LoggedInUser)

            if(LoggedInUser){
                axios.post('http://localhost:5000/jwt' , {email:LoggedInUser.email})
                .then(data => {
                    console.log(data.data.token)
                    localStorage.setItem('access-token' , data.data.token)
                })
            }else{
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleSignIn,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;