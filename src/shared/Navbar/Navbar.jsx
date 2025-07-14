import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../assets/hrpulse-high-resolution-logo-transparent.png';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import img from '../../assets/icons8-user-100 (2).png';

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser().then(() => {
      Swal.fire('Logged Out!', 'See you again.', 'success');
      navigate('/');
    });
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/dashboard/work-sheet">Work Sheet</NavLink></li>
      <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
        <div className="navbar-start">
          <img className="w-8 h-8 rounded-full" src={logo} alt="logo" />
          <h2 className="text-2xl font-bold text-pink-700 ml-2">HR<span>Pulse</span></h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user?.photoURL || img}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  alt="User Avatar"
                />
                <div className="absolute left-0 mt-2 text-xs bg-gray-800 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                  {user.displayName}
                </div>
              </div>
              <button onClick={handleLogout} className="btn bg-pink-700 text-white">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn bg-pink-700 text-white">Login</Link>
              <Link to="/register" className="btn bg-pink-700 text-white">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
