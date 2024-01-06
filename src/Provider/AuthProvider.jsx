import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

// import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // Register With Firebase
  const [user, setUser] = useState(null);

  //   Connect With Firebase
  const createRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   Sign In
const logIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
}

//   Sign Out 
const logOut =  () => {
    return signOut(auth);
}

  //   OnAuthStateChanged
  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changed', currentUser);
        setUser(currentUser)
    });
    return () => {
        unSubscribe();
    }
 },[])


  const authInfo = { user, createRegister, logIn , logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// AuthProvider.propTypes = {
//     children: PropTypes.node,
//   };
