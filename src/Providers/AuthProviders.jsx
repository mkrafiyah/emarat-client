import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

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
    updateUserProfile

   }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;