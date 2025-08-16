import React from 'react';
import FindUs from './FindUs';
import { Link } from 'react-router';
import logo from '../../assets/hrpulse-high-resolution-logo-transparent.png'


const Footer = () => {
  return (
    <div className='w-full '>
      <footer className="footer justify-around sm:footer-horizontal bg-pink-700  text-neutral-content mt-5 p-10 ">

        <nav className=''>
          <div className='flex gap-3 items-center justify-evenly sm:text-center'>
            <img className='w-10 h-10 rounded-full' src={logo} alt="" />
          <h2 style={{ color: 'white' }} className='text-2xl font-bold'>HR<span style={{ color: 'white' }}>Pulse</span></h2>
          </div>
          

          <p>Email: privacy@hrpulse.com</p>
          <p>Address: HRPulse Inc., 123 Tech Lane, <br /> City Center, CA 90001, USA</p>
        </nav>
        <nav>
          <h6 className=" font-bold text-xl">Company & Legal</h6>
          <Link to={'/about'} className="link link-hover">About us</Link>
          <Link to={'/contact'} className="link link-hover">Contact</Link>
          <Link to={'/terms'} className="link link-hover">Terms of use</Link>
          <Link to={'/privacy'} className="link link-hover">Privacy policy</Link>
          <Link to={'/cookie'} className="link link-hover">Cookie policy</Link>
        </nav>
        <nav>
          <FindUs></FindUs>
        </nav>
        

      </footer>
        <div className='bg-pink-700 text-center text-white pb-1'>
        © 2025 HRPulse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;