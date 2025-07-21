import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../assets/hrpulse-high-resolution-logo-transparent.png';
import img from '../../assets/icons8-user-100 (2).png';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Navbar = () => {
  const { user, logoutUser, userInfo } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser().then(() => {
      Swal.fire('Logged Out!', 'See you again.', 'success');
      navigate('/');
    });
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const role = userInfo?.role;

  // Wait until userInfo is loaded
  if (user && !userInfo) {
    return (
      <div className="w-full py-4 text-center bg-white text-gray-500">
        Loading user info...
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-pink-700">HR<span>Pulse</span></h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className="text-sm font-semibold hover:text-pink-600">Home</NavLink>
          <NavLink to="/contact-us" className="text-sm font-semibold hover:text-pink-600">Contact Us</NavLink>

          {user && (
            <NavLink to="/dashboard" className="text-sm font-semibold hover:text-pink-600">Dashboard</NavLink>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-pink-700 text-2xl">☰</button>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user?.photoURL || img}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-pink-700"
                />
                <div className="absolute top-12 left-0 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs p-2 rounded shadow">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-pink-700 text-white hover:bg-white hover:text-pink-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm bg-pink-700 text-white hover:bg-white hover:text-pink-700">Login</Link>
              <Link to="/register" className="btn btn-sm bg-pink-700 text-white hover:bg-white hover:text-pink-700">Register</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-100 shadow-md py-3 px-4 space-y-2">
          <NavLink to="/" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Home</NavLink>
          <NavLink to="/contact-us" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Contact Us</NavLink>

          {user && (
            <NavLink to="/dashboard" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Dashboard</NavLink>
          )}

          {/* Role-based Links */}
          {user && role === 'Employee' && (
            <>
              <NavLink to="/dashboard/work-sheet" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Work Sheet</NavLink>
              <NavLink to="/dashboard/payment-history" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Payment History</NavLink>
            </>
          )}

          {user && role === 'HR' && (
            <>
              <NavLink to="/dashboard/employee-list" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Employee List</NavLink>
              <NavLink to={`/dashboard/employee-salary-history/${userInfo?.email}`} onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Employee Details</NavLink>
              <NavLink to="/dashboard/progress" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Progress</NavLink>
            </>
          )}

          {user && role === 'Admin' && (
            <>
              <NavLink to="/dashboard/all-employee-list" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">All Employees</NavLink>
              <NavLink to="/dashboard/payroll" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Payroll</NavLink>
              <NavLink to="/admin/messages" onClick={toggleMenu} className="block text-sm font-medium hover:text-pink-600">Admin Messages</NavLink>
            </>
          )}

          {/* Auth Buttons - Mobile */}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-pink-700 text-white hover:bg-white hover:text-pink-700 mt-2"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu} className="btn btn-sm bg-pink-700 text-white hover:bg-white hover:text-pink-700 mt-2">Login</Link>
              <Link to="/register" onClick={toggleMenu} className="btn btn-sm bg-pink-700 text-white hover:bg-white hover:text-pink-700">Register</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
