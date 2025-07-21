import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../assets/pexels-cottonbro-5990034.jpg'
import image2 from '../../../assets/pexels-divinetechygirl-1181408.jpg'
import image3 from '../../../assets/pexels-vlada-karpovich-7433852.jpg'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className=' w-11/12 mx-auto '>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14  bg-cover bg-center"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md text-start">
              <h1 className="mb-5 text-4xl font-bold">Manage Teams. Track Work. Pay with Ease.</h1>
              <p className="mb-5 font-bold">
               HRPulse lets you streamline employee workflows, monitor performance, and handle payroll—all from one powerful dashboard.
              </p>
              <button className="btn   bg-pink-700 text-white hover:bg-white hover:text-pink-700">Get Started</button>
            </div>
          </div>
        </div>
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">Smart HR Management for a Smarter Workplace</h1>
              <p className="mb-5 font-bold">
                Stay ahead with real-time employee updates, contract records, and seamless payroll. HRPulse puts control in your hands.
              </p>
              <button className="btn  bg-pink-700 text-white hover:bg-white hover:text-pink-700">Get Started</button>
            </div>
          </div>
        </div>
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image3})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md text-end">
              <h1 className="mb-5 text-4xl font-bold">From Onboarding to Payroll — All in One Place</h1>
              <p className="mb-5 font-bold">
               HRPulse helps HR executives and teams manage tasks, track progress, and automate admin work—effortlessly and efficiently.
              </p>
              <button className="btn  bg-pink-700 text-white hover:bg-white hover:text-pink-700">Get Started</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;