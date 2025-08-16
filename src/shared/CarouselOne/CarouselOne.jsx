// src/Pages/Carousel/CarouselOne.jsx
import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Team Management", desc: "Assign roles, track progress, and ensure collaboration." },
  { title: "Performance Tracking", desc: "Real-time dashboards to measure productivity and goals." },
  { title: "Payroll Automation", desc: "Fast, secure, and accurate salary processing." },
];

const CarouselOne = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Manage Teams. Track Work. Pay with Ease.
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CarouselOne;
