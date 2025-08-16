import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUserShield,
  FaBuilding,
  FaTasks,
  FaGavel,
  FaUserTimes,
  FaUserPlus,
  FaIdBadge,
  FaServer, // new icon
} from "react-icons/fa";
import adminImg from "../../../assets/pexels-timmossholder-1722196.jpg";

const adminData = {
  name: "Alice Johnson",
  role: "Administrator",
  photo: adminImg,
  responsibilities: [
    {
      icon: <FaCheckCircle className="text-4xl text-green-600" />,
      title: "Payroll Approval",
      description:
        "Review and approve final payroll to ensure accurate and timely salary distribution.",
    },
    {
      icon: <FaUserShield className="text-4xl text-blue-600" />,
      title: "Access Control",
      description:
        "Manage user roles and permissions across HRs and Employees for secure operations.",
    },
    {
      icon: <FaBuilding className="text-4xl text-purple-600" />,
      title: "Company Oversight",
      description:
        "Oversee HR processes and employee activities to maintain organizational standards.",
    },
    {
      icon: <FaTasks className="text-4xl text-yellow-600" />,
      title: "Workflow Supervision",
      description:
        "Ensure HRs handle work logs, requests, and compliance efficiently.",
    },
    {
      icon: <FaGavel className="text-4xl text-red-600" />,
      title: "Compliance Enforcement",
      description:
        "Maintain company-wide compliance with labor laws, policies, and regulations.",
    },
    {
      icon: <FaUserTimes className="text-4xl text-red-500" />,
      title: "Employee Termination",
      description:
        "Has the authority to terminate employees based on performance or compliance issues.",
    },
    {
      icon: <FaUserPlus className="text-4xl text-indigo-600" />,
      title: "Promote to HR",
      description:
        "Can elevate an employee’s role to HR to manage workforce responsibilities.",
    },
    {
      icon: <FaIdBadge className="text-4xl text-teal-600" />,
      title: "Employee Verification",
      description:
        "Verify employee details, documents, and credentials to ensure authenticity.",
    },
    {
      icon: <FaServer className="text-4xl text-gray-700" />, // new card
      title: "System Monitoring",
      description:
        "Monitor overall system health, performance, and ensure uptime for all HR operations.",
    },
  ],
};

const AdminDetails = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Admin Card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg mb-12 flex flex-col items-center"
        >
          <img
            src={adminData.photo}
            alt={adminData.name}
            className="w-32 h-32 rounded-full border-4 border-indigo-600 mb-4 object-cover shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800">{adminData.name}</h2>
          <p className="text-lg text-indigo-600 font-semibold">{adminData.role}</p>
        </motion.div>

        {/* Responsibilities Grid */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Key Responsibilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminData.responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminDetails;
