// src/Pages/Carousel/CarouselThree.jsx
import React from "react";
import { motion } from "framer-motion";

const steps = [
  { step: "1", title: "Onboarding", desc: "Seamless setup for new employees with document upload." },
  { step: "2", title: "Tracking", desc: "Monitor daily work logs, leaves, and performance in one place." },
  { step: "3", title: "Payroll", desc: "Finalize payroll with approvals from HR and Admin." },
];

const CarouselThree = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        From Onboarding to Payroll — All in One Place
      </motion.h1>

      <div className="space-y-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-start gap-6 bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-md"
          >
            <div className="text-3xl font-bold text-pink-600">{s.step}</div>
            <div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CarouselThree;
