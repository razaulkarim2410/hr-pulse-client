// src/Pages/Carousel/CarouselTwo.jsx
import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/pexels-divinetechygirl-1181408.jpg";

const CarouselTwo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto px-6 py-16">
      <motion.img
        src={image}
        alt="HR"
        className="rounded-2xl shadow-xl w-full md:w-1/2"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2"
      >
        <h1 className="text-4xl font-bold mb-6">Smart HR Management for a Smarter Workplace</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Stay ahead with real-time employee updates, contract records, and seamless payroll.
        </p>
        <ul className="space-y-2">
          <li>✅ Real-time employee insights</li>
          <li>✅ Secure contract & policy storage</li>
          <li>✅ Automated payroll workflows</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default CarouselTwo;
