import React, { use, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { db } from '../../firebase/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
  const { loginUser, setUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(result => {
        setUser(result.user);
        navigate(location.state || "/");
        Swal.fire("Welcome!", "Login successful", "success");
      })
      .catch(error => {
        Swal.fire("Error", "Invalid email or password", "error");
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);

        // Save to Firestore if new
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "Employee",
          designation: "Digital Marketer",
          salary: 25000,
          bank_account_no: "000000001"
        });

        navigate(location.state || "/");
        Swal.fire("Success!", "Google Login successful", "success");
      })
      .catch(err => Swal.fire("Error", err.message, "error"));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto mt-28">
      <h1 className="text-4xl font-bold text-center mt-6">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <label className="label">Email</label>
        <input type="email" name="email" required className="input input-bordered" />

        <label className="label">Password</label>
        <div className="relative">
          <input type={showPassword ? "text" : "password"} name="password" required className="input input-bordered" />
          <FaEye className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
        </div>

        <button type="submit" className="btn btn-neutral mt-4">Login</button>
        <button type="button" onClick={handleGoogleSignIn} className="btn mt-4 text-lg font-bold flex items-center gap-2">
          <FcGoogle /> Sign in with Google
        </button>

        <p className="text-sm pt-5">Don't have an account? <Link to="/register" className="text-pink-700 underline">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
