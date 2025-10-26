import React, { createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';




export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }
  
  const logInWithEmail = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  const signOutUser = () => {
    signOut(auth);
  }
  // console.log(user);

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    })
    return () =>{
      unSubscribe();
    }
  },[])

  const authData = {
    user,
    setUser,
    createUserWithEmail,
    logInWithEmail,
    signOutUser,
    loading,
    setLoading,
    updateUser,
  };

  return (
    <AuthContext value={authData}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
