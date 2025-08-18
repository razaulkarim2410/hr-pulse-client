import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import {
  FaClipboardList,
  FaDollarSign,
  FaUsers,
  FaUserCheck,
  FaComments,
  FaCalendarCheck,
} from "react-icons/fa";
import hrImg from "../../../assets/pexels-apasaric-3342739.jpg";

const hrData = {
  name: "Jane Smith",
  role: "HR Manager",
  photo: hrImg,
  responsibilities: [
    {
      icon: <FaClipboardList className="text-4xl text-blue-600" />,
      title: "Verify Work Logs",
      description: "Check daily employee work logs and attendance for accuracy.",
    },
    {
      icon: <FaDollarSign className="text-4xl text-green-600" />,
      title: "Process Payroll Requests",
      description: "Handle payroll requests and ensure timely processing of salaries.",
    },
    {
      icon: <FaUsers className="text-4xl text-purple-600" />,
      title: "Employee Support",
      description: "Assist employees with policies, onboarding, and HR-related queries.",
    },
    {
      icon: <FaUserCheck className="text-4xl text-teal-600" />,
      title: "Employee Verification",
      description: "Verify employee documents, credentials, and compliance.",
    },
    {
      icon: <FaComments className="text-4xl text-yellow-600" />,
      title: "Team Communication",
      description: "Facilitate communication between management and employees.",
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-pink-600" />,
      title: "Leave Management",
      description: "Approve or reject leave requests and maintain records efficiently.",
    },
  ],
};

const HRDetails = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Animated Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 font-semibold"
          >
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
            </motion.div>
            Back to Home
          </Link>
        </div>

        {/* HR Card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-2xl shadow-lg mb-12 flex flex-col items-center"
        >
          <img
            src={hrData.photo}
            alt={hrData.name}
            className="w-32 h-32 rounded-full border-4 border-green-600 mb-4 object-cover shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{hrData.name}</h2>
          <p className="text-lg text-green-600 dark:text-green-400 font-semibold">{hrData.role}</p>
        </motion.div>

        {/* Responsibilities Grid */}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Key Responsibilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hrData.responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-neutral-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRDetails;
