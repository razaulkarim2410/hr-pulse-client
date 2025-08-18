import React, { useState, useContext } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const imageFile = form.photo.files[0];

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire("Error", "Password must be ≥6 characters, 1 capital letter, 1 special char", "error");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`, {
        method: "POST",
        body: formData
      });

      const imgData = await res.json();
      const photoURL = imgData.data.url;

      const result = await createUser(email, password);
      await updateUser({ displayName: name, photoURL });

      const user = result.user;
      setUser({ ...user, displayName: name, photoURL });

      await fetch('https://hr-pulse-server.vercel.app/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: user.uid,
          name,
          email,
          photoURL,
          role,
          bank_account_no: "1234567890",
          salary: 25000,
          designation: "Sales Assistant"
        })
      });

      Swal.fire("Success!", "Account Created", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="card bg-white dark:bg-neutral-800 w-full max-w-sm shadow-2xl mx-auto my-20 border border-gray-200 dark:border-neutral-700">
      <Helmet>
        <title>Register</title>
      </Helmet>

      <h2 className="text-4xl font-bold text-center py-4 text-gray-800 dark:text-gray-100">Register Your Account</h2>

      <form onSubmit={handleRegister} className="card-body">
        <label className="label text-gray-700 dark:text-gray-200">Name</label>
        <input
          type="text"
          required
          name="name"
          className="input input-bordered bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600"
        />

        <label className="label text-gray-700 dark:text-gray-200">Photo</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          required
          className="file-input file-input-bordered bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600"
        />

        <label className="label text-gray-700 dark:text-gray-200">Email</label>
        <input
          type="email"
          required
          name="email"
          className="input input-bordered bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600"
        />

        <label className="label text-gray-700 dark:text-gray-200">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            className="input input-bordered w-full bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600"
          />
          <FaEye
            className="absolute top-3 right-3 cursor-pointer text-gray-600 dark:text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <label className="label text-gray-700 dark:text-gray-200">Select Role</label>
        <select
          name="role"
          required
          className="select select-bordered bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600"
        >
          <option value="">-- Select Role --</option>
          <option value="Employee">Employee</option>
          <option value="HR">HR</option>
        </select>

        <button
          type="submit"
          className="btn bg-pink-700 text-white hover:bg-white hover:text-pink-700 mt-4"
        >
          Register
        </button>

        <p className="text-sm pt-4 text-gray-700 dark:text-gray-300">
          Already have an account? <Link to="/login" className="text-pink-700 dark:text-pink-400 underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
