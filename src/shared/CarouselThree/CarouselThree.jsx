// src/Pages/Carousel/CarouselThree.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const steps = [
  { step: "1", title: "Onboarding", desc: "Seamless setup for new employees with document upload." },
  { step: "2", title: "Tracking", desc: "Monitor daily work logs, leaves, and performance in one place." },
  { step: "3", title: "Payroll", desc: "Finalize payroll with approvals from HR and Admin." },
];

const CarouselThree = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto relative">
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

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-pink-500"
        >
          From Onboarding to Payroll — All in One Place
        </motion.h1>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-start gap-6 bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-neutral-700"
            >
              <div className="text-3xl font-bold text-pink-600">{s.step}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselThree;
