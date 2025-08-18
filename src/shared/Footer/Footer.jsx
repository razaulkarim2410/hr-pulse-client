import React from 'react';
import FindUs from './FindUs';
import { Link } from 'react-router';
import logo from '../../assets/hrpulse-high-resolution-logo-transparent.png';

const Footer = () => {
  return (
    <div className='w-full'>
      <footer className="footer justify-around sm:footer-horizontal bg-pink-700 dark:bg-pink-800 text-neutral-content mt-5 p-10">
        
        {/* Logo & Contact */}
        <nav className=''>
          <div className='flex gap-3 items-center justify-evenly sm:text-center'>
            <img className='w-10 h-10 rounded-full' src={logo} alt="HRPulse Logo" />
            <h2 className='text-2xl font-bold text-white dark:text-gray-100'>
              HR<span className='text-white dark:text-gray-100'>Pulse</span>
            </h2>
          </div>
          <p className="text-white dark:text-gray-300">Email: privacy@hrpulse.com</p>
          <p className="text-white dark:text-gray-300">
            Address: HRPulse Inc., 123 Tech Lane, <br /> City Center, CA 90001, USA
          </p>
        </nav>

        {/* Company & Legal Links */}
        <nav>
          <h6 className="font-bold text-xl text-white dark:text-gray-100">Company & Legal</h6>
          <Link to={'/about'} className="link link-hover text-white dark:text-gray-300">About us</Link>
          <Link to={'/contact'} className="link link-hover text-white dark:text-gray-300">Contact</Link>
          <Link to={'/terms'} className="link link-hover text-white dark:text-gray-300">Terms of use</Link>
          <Link to={'/privacy'} className="link link-hover text-white dark:text-gray-300">Privacy policy</Link>
          <Link to={'/cookie'} className="link link-hover text-white dark:text-gray-300">Cookie policy</Link>
        </nav>

        {/* Social/FindUs Component */}
        <nav>
          <FindUs />
        </nav>

      </footer>

      {/* Copyright */}
      <div className='bg-pink-700 dark:bg-pink-800 text-center text-white dark:text-gray-100 pb-1'>
        © 2025 HRPulse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
