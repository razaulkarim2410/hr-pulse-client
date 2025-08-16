import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };


  const logoutUser = () => {
  setLoading(true);
  localStorage.removeItem("access-token"); // ✅ Clear JWT
  return signOut(auth);
};

 useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (currentUser?.email) {
      try {
        // ✅ Get JWT Token and store it
        const tokenRes = await axios.post("https://hr-pulse-server.vercel.app/jwt", {
          email: currentUser.email,
        });

        localStorage.setItem("access-token", tokenRes.data.token); // Store JWT in localStorage

        // ✅ Get user info from DB
        const userInfoRes = await axios.get(
          `https://hr-pulse-server.vercel.app/users/${currentUser.email}`
        );

        setUserInfo(userInfoRes.data);
      } catch (err) {
        console.error("Error fetching userInfo or JWT:", err);
        setUserInfo(null);
      }
    } else {
      // 🧹 User logged out
      localStorage.removeItem("token"); // Clear token
      setUserInfo(null);
    }

    setLoading(false);
  });

  return () => unSubscribe();
}, []);


  const authInfo = {
    loading,
    user,
    userInfo,
    setUser,
    setUserInfo,
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    setLoading
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
