import React, { useState, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire("Welcome!", "Login successful", "success");
        navigate(location.state || "/");
      })
      .catch((error) => {
        Swal.fire("Error", "Invalid email or password", "error");
      });
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);

      await fetch("https://hr-pulse-server.vercel.app/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "Employee",
          bank_account_no: "000000001",
          salary: 25000,
          designation: "Digital Marketer",
        }),
      });

      Swal.fire("Success!", "Google login successful", "success");
      navigate(location.state || "/");
    } catch (err) {
      console.error("Google Sign-In error:", err.message);
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="card bg-white dark:bg-neutral-800 w-full max-w-sm shadow-2xl mx-auto my-20 border border-gray-200 dark:border-neutral-700">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-center mt-6 text-gray-800 dark:text-gray-100">Login</h1>

      <form onSubmit={handleLogin} className="card-body">
        <label className="label text-gray-700 dark:text-gray-200">Email</label>
        <input
          type="email"
          name="email"
          required
          className="input input-bordered bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600"
        />

        <label className="label text-gray-700 dark:text-gray-200">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            className="input input-bordered bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600"
          />
          <FaEye
            className="absolute top-3 right-3 cursor-pointer text-gray-600 dark:text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button
          type="submit"
          className="btn bg-pink-700 text-white hover:bg-white hover:text-pink-700 mt-4"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn mt-4 text-lg font-bold flex items-center gap-2 bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-neutral-600"
        >
          <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" /> Sign in with Google
        </button>

        <p className="text-sm pt-5 text-gray-700 dark:text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" className="text-pink-700 dark:text-pink-400 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
