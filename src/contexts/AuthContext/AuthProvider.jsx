import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth  ,email , password)
  }

   const loginUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password )
  }
  const logoutUser = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect (() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
      console.log('user innnnn', currentUser)
    });
    return () =>{
      unSubscribe();
    }
  }, [])

  const authInfo = {
    
    loading,
    user,
    setUser,
    createUser,
    loginUser,
    logoutUser

  }
  return (

    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;