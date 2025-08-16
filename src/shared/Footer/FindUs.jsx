import React from 'react';
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";


const FindUs = () => {
  return (
    <div>
      <h2 className='font-bold text-xl mb-5'>Find Us On</h2>
      <div className=''>
        <div className="join join-vertical  gap-4">

          <a className='flex gap-2 text-l font-bold items-center' href="https://www.facebook.com/share/179nE1FpYY/" target="_blank"
            rel="noopener noreferrer"><SiFacebook /> Facebook</a>
          <a className='flex gap-2 text-l font-bold items-center' href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank"
            rel="noopener noreferrer"><FaLinkedin />Linkedin</a>
          <a className='flex gap-2 text-l font-bold items-center' href="https://x.com/RazaulKarim2410" target="_blank"
            rel="noopener noreferrer"><FaXTwitter />
            Twitter</a>
          <a className='flex gap-2 text-l font-bold items-center' href="https://www.youtube.com/@Farzankarim-sd7lu" target="_blank"
            rel="noopener noreferrer"><IoLogoYoutube /> YouTube</a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;