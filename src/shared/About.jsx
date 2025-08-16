import React from 'react';
import { motion } from 'framer-motion';
import { FaUsersCog, FaChartLine, FaLock, FaCloudUploadAlt } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaUsersCog className="text-4xl text-blue-600" />,
      title: 'Role-Based Access',
      description: 'Custom dashboards for Admins, HR, and Employees to ensure focused access and responsibilities.'
    },
    {
      icon: <FaChartLine className="text-4xl text-green-600" />,
      title: 'Real-Time Work Tracking',
      description: 'Track employee progress, daily logs, and overall productivity — all in one dashboard.'
    },
    {
      icon: <FaLock className="text-4xl text-red-500" />,
      title: 'Secure & Scalable',
      description: 'Built with React, Firebase, and MongoDB to ensure speed, flexibility, and top-tier security.'
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-purple-600" />,
      title: 'Cloud-Powered Payroll',
      description: 'Automate salary records, payment history, and approval workflows without manual intervention.'
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-gray-800"
        >
          About HRPulse
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          HRPulse is a modern Human Resource Management solution that simplifies your entire workflow — from employee onboarding and work tracking to payroll and analytics. Designed for dynamic teams, HRPulse ensures transparency, productivity, and better collaboration through real-time data and smart automation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
