import React from 'react';
import error from '../../assets/warning-8908707_1280 (1).png'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';


const ErrorPage = () => {
  return (
    <div className='gap-5 pt-5 items-center flex flex-col w-11/12 mx-auto'>
       <Helmet>
        <title>Error Page</title>
      </Helmet>
      <h2 className='font-bold text-4xl  text-pink-500'>Page Not Found</h2>
      <h2 className='font-bold text-3xl'>Error Page 404</h2>
      <img className='h-[300px]  rounded-xl mb-5' src={error} alt="" />
      <Link className='btn btn-outline btn-secondary px-26' to={'/'}>Back To Home</Link>
    </div>
  );
};

export default ErrorPage;