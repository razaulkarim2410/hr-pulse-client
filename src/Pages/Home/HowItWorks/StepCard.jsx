// StepCard.jsx (updated)
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const StepCard = ({ icon: Icon, title, subtitle, bullets, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.05 }}
      className="relative group overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(link)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-900/10 dark:to-indigo-900/10" />

      <div className="p-6 md:p-8 flex flex-col h-full">
        <motion.div
          whileHover={{ rotate: 10 }}
          className="flex items-center gap-3"
        >
          <div className="rounded-2xl p-3 bg-neutral-100 dark:bg-neutral-800 shadow-sm group-hover:shadow-md transition">
            <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            {subtitle && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {subtitle}
              </p>
            )}
          </div>
        </motion.div>

        <ul className="mt-4 space-y-2 text-sm md:text-base flex-1">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition"
          >
            View More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default StepCard;
