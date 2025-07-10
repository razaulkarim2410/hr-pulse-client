import React from 'react';
import { FaUserTie, FaTasks, FaMoneyCheckAlt, FaFileContract, FaChartLine, FaClock, FaCommentDots, FaUsers } from 'react-icons/fa';

const HRFeaturesSection = () => {
  const features = [
    {
      title: "Employee Workflow",
      icon: <FaTasks className="text-4xl text-pink-600" />,
      description: "Track daily task updates from employees and monitor overall productivity."
    },
    {
      title: "Salary Management",
      icon: <FaMoneyCheckAlt className="text-4xl text-pink-600" />,
      description: "Easily manage salary payments, bonuses, and payment histories."
    },
    {
      title: "Contract Records",
      icon: <FaFileContract className="text-4xl text-pink-600" />,
      description: "Keep contracts and employment documents organized and secure."
    },
    {
      title: "Performance Analytics",
      icon: <FaChartLine className="text-4xl text-pink-600" />,
      description: "Analyze team performance with real-time metrics and progress reports."
    },
    {
      title: "Time Tracking",
      icon: <FaClock className="text-4xl text-pink-600" />,
      description: "Track working hours, overtime, and attendance with precision."
    },
    {
      title: "Team Collaboration",
      icon: <FaUsers className="text-4xl text-pink-600" />,
      description: "Enable smooth collaboration between HR and departments."
    },
    {
      title: "Employee Feedback",
      icon: <FaCommentDots className="text-4xl text-pink-600" />,
      description: "Collect employee feedback for improving workplace efficiency."
    },
    {
      title: "HR Dashboard",
      icon: <FaUserTie className="text-4xl text-pink-600" />,
      description: "Manage everything from one centralized HR dashboard."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-pink-700">Core Features of HRPulse</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 text-center">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRFeaturesSection;
