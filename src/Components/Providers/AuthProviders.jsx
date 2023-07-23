import React, { createContext, useEffect, useState } from 'react';
import app from '../../../Firebase';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   logOut
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   GoogleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentuser=>{
      setUser(currentuser)
        setLoading(false)
    })
    return()=>{
        unsubscribe();
    }
},[])

  //   updateUser
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo, 
    });
  };

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    googleLogin,
    updateUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;