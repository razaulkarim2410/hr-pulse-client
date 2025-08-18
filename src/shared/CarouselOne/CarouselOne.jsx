// src/Pages/Carousel/CarouselOne.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const features = [
  { title: "Team Management", desc: "Assign roles, track progress, and ensure collaboration." },
  { title: "Performance Tracking", desc: "Real-time dashboards to measure productivity and goals." },
  { title: "Payroll Automation", desc: "Fast, secure, and accurate salary processing." },
];

const CarouselOne = () => {
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

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-pink-500"
        >
          Manage Teams. Track Work. Pay with Ease.
        </motion.h1>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselOne;
