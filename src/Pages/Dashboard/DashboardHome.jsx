
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { Helmet } from 'react-helmet-async';

const DashboardHome = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <div className="text-center mt-10">
      <Helmet>
        <title>Dashboard Home</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-gray-700">
        Welcome to the {userInfo?.role || "User"} Dashboard
      </h1>
    </div>
  );
};

export default DashboardHome;
