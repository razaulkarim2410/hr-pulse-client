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

          <a className='flex gap-2 text-l font-bold items-center' href="https://www.facebook.com/razaul.karim.9809/"><SiFacebook /> Facebook</a>
          <a className='flex gap-2 text-l font-bold items-center' href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"><FaLinkedin />Linkedin</a>
          <a className='flex gap-2 text-l font-bold items-center' href="https://x.com/RazaulKarim2410"><FaXTwitter />
            Twitter</a>
          <a className='flex gap-2 text-l font-bold items-center' href="https://www.youtube.com/@Farzankarim-sd7lu"><IoLogoYoutube /> YouTube</a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;