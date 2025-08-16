import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { createUser, updateUser, setUser } = React.useContext(AuthContext);
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

    // ✅ Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire("Error", "Password must be ≥6 characters, 1 capital letter, 1 special char", "error");
      return;
    }

    try {
      // ✅ Upload photo to imgbb
      const formData = new FormData();
      formData.append('image', imageFile);

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`, {
        method: "POST",
        body: formData
      });

      const imgData = await res.json();
      const photoURL = imgData.data.url;

      // ✅ Create Firebase user
      const result = await createUser(email, password);
      await updateUser({ displayName: name, photoURL });

      const user = result.user;
      setUser({ ...user, displayName: name, photoURL });

      // ✅ Save to MongoDB (backend)
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
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto my-20">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center py-4">Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <label className="label">Name</label>
        <input type="text" required name="name" className="input input-bordered" />

        <label className="label">Photo</label>
        <input type="file" name="photo" accept="image/*" required className="file-input file-input-bordered" />

        <label className="label">Email</label>
        <input type="email" required name="email" className="input input-bordered" />

        <label className="label">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            className="input input-bordered w-full"
          />
          <FaEye className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
        </div>

        <label className="label">Select Role</label>
        <select name="role" required className="select select-bordered">
          <option value="">-- Select Role --</option>
          <option value="Employee">Employee</option>
          <option value="HR">HR</option>
        </select>

        <button type="submit" className="btn  bg-pink-700 text-white hover:bg-white hover:text-pink-700 mt-4">Register</button>
        <p className="text-sm pt-4">Already have an account? <Link to="/login" className="text-pink-700 underline">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
