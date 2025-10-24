import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const createUserWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

const logInWithEmail = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password);
}

const signOutUser = () => {
  signOut(auth);
}



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
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
  };

  return (
    <AuthContext value={authData}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
