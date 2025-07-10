import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log({ email, password })
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-30 flex items-center justify-center mx-auto">
      <h1 className="text-4xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        
        <fieldset className="fieldset">

          <label className="label">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" />

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
              className='absolute top-3 right-4'
            >
              <FaEye size={20} />
            </button>
          </div>

          <button type='submit' className="btn btn-neutral mt-4">LogIn</button>
          <p className='text-l font-bold pt-5'>Don't Have an Account ? {" "} <Link className='underline  text-pink-700' to={'/register'}>Register</Link></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;