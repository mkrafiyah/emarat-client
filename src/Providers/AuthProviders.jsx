import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const googleProvider = new GoogleAuthProvider(); 

   //create user
   const createUser = (email, password)=>{
    setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   }

   //SignIn
   const logIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

    //google
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
   //update Profile
   const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
   }

   //logOut
   const logOut = () =>{
    setLoading(true);
    return signOut(auth)
   }
   
   //state changed
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser);
       setLoading(false);
    });
    return ()=>{
        unsubscribe();
    }
   },[])

   const authInfo ={
    user,
    loading,
    createUser,
    logIn,
    logOut,
    auth,
    updateUserProfile,
    googleSignIn

   }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;