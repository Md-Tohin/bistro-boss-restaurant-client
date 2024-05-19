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
import useAxiosPublic from './../hooks/useAxiosPublic';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {      
      setUser(currentUser);
      if (currentUser) {
        const userInfo = {email: currentUser.email};
        axiosPublic.post("/api/jwt", userInfo)
        .then(res => {
          // console.log(res.data);
          if(res.data?.token){
            localStorage.setItem('access-token', res.data?.token);
            setLoader(false);
          }          
        })
        .catch(error => {
          console.log(error);
          setLoader(false);
        });
      } else {
        //
        localStorage.removeItem('access-token');
        setLoader(false);
      }
    });
    console.log("Current User : ", user);
    return () => unSubscribe();
  }, [auth, user, axiosPublic]);

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
