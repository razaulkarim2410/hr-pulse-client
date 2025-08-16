import React from "react";
import { motion } from "framer-motion";
import {
  FaTasks,
  FaCalendarCheck,
  FaFileAlt,
  FaComments,
  FaUserShield,
  FaLaptopCode,
} from "react-icons/fa";
import employeeImg from "../../../assets/pexels-timmossholder-1722196.jpg";

const employeeData = {
  name: "John Doe",
  designation: "Software Engineer",
  photo: employeeImg,
  responsibilities: [
    {
      icon: <FaTasks className="text-4xl text-yellow-500" />,
      title: "Daily Tasks",
      description:
        "Complete assigned development tasks and update the project progress regularly.",
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-green-500" />,
      title: "Attendance & Leaves",
      description:
        "Record attendance and submit leave requests through HRPulse platform.",
    },
    {
      icon: <FaFileAlt className="text-4xl text-blue-500" />,
      title: "Reporting",
      description:
        "Prepare and submit daily/weekly reports to HR and team leads.",
    },
    {
      icon: <FaComments className="text-4xl text-purple-500" />,
      title: "Team Collaboration",
      description:
        "Attend meetings, discuss project progress, and collaborate with colleagues.",
    },
    {
      icon: <FaUserShield className="text-4xl text-red-500" />,
      title: "Compliance",
      description:
        "Follow company policies, coding standards, and security guidelines.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
      title: "Skill Development",
      description:
        "Participate in learning sessions to enhance technical skills and productivity.",
    },
  ],
};

const EmployeesDetails = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Employee Card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg mb-12 flex flex-col items-center"
        >
          <img
            src={employeeData.photo}
            alt={employeeData.name}
            className="w-32 h-32 rounded-full border-4 border-cyan-500 mb-4 object-cover shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800">{employeeData.name}</h2>
          <p className="text-lg text-cyan-600 font-semibold">{employeeData.designation}</p>
        </motion.div>

        {/* Responsibilities Grid */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Key Responsibilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employeeData.responsibilities.map((item, index) => (
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

export default EmployeesDetails;
