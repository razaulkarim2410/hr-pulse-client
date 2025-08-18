// src/Pages/Carousel/CarouselTwo.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import image from "../../assets/pexels-divinetechygirl-1181408.jpg";

const CarouselTwo = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto relative">
        {/* Animated Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 font-semibold"
          >
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="mr-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <motion.img
            src={image}
            alt="HR Management"
            className="rounded-2xl shadow-xl w-full md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-pink-500">
              Smart HR Management for a Smarter Workplace
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay ahead with real-time employee updates, contract records, and seamless payroll.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-inside">
              <li>✅ Real-time employee insights</li>
              <li>✅ Secure contract & policy storage</li>
              <li>✅ Automated payroll workflows</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarouselTwo;
