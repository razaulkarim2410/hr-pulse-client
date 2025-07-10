import React from 'react';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password })
  }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-30 flex items-center justify-center mx-auto">
      <h2 className='text-4xl font-bold text-center py-4'>Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        
        <fieldset className="fieldset">

          <label className="label">Name</label>
          <input type="text" required name='name' className="input" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input type="text" required name='photo' className="input" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input type="email" required name='email' className="input" placeholder="Email" />

          <label className="label text-xs font-bold">Password</label>
          <div className='relative'>
            <input
              name='password'

              type={showPassword ? 'text' : 'password'}
              className="input"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute  top-2 right-6'
            >
              <FaEye size={20} />
            </button>
          </div>

          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='text-l font-bold pt-5'>Already Have an Account ?{" "} <Link className='underline font-bold text-pink-700 ' to={'/login'}>Login</Link></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;