// src/Pages/Home/HowItWorks/StepCard.jsx
import React from "react";
import { Link } from "react-router";

const StepCard = ({ icon: Icon, title, subtitle, bullets, link }) => {
  return (
    <Link
      to={link}
      className="flex-1 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-xl transition p-6 flex flex-col"
    >
      {/* Icon */}
      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-600 w-14 h-14 flex items-center justify-center rounded-xl mb-4">
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-neutral-300 mb-4">{subtitle}</p>

      {/* Bullet points */}
      <ul className="space-y-2 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-gray-600 dark:text-neutral-300 flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-4 text-right">
        <span className="text-cyan-500 dark:text-cyan-400 font-medium hover:underline">Learn More →</span>
      </div>
    </Link>
  );
};

export default StepCard;
