import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./../firebase/firebase.config";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });
    console.log("Current User : ", user);
    return () => unSubscribe();
  });

  //  create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  log in
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  google login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  log out
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //  update user
  const updateUserProfile = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
  };

  const authInfo = {
    user,
    createUser,
    loginUser,
    googleLogin,
    updateUserProfile,
    logOut,
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.object,
};
