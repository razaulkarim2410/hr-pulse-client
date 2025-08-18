import React from "react";
import { CheckCircle, Users, FileText, Clock, HelpCircle, BarChart2, ShieldCheck, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const StarterDetails = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Animated Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-cyan-500 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold"
        >
          <motion.div
            animate={{ x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
          </motion.div>
          Back to Home
        </Link>
      </div>

      {/* Card Wrapper */}
      <div className="bg-white dark:bg-neutral-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 dark:border-neutral-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Starter Plan</h1>
          <p className="text-lg mb-4">Perfect for small teams or startups</p>
          <div className="text-5xl font-extrabold">
            $19<span className="text-xl font-medium">/month</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Get your team up and running with the essential tools to manage work, 
            track time, and stay organized. Simple, affordable, and effective.
          </p>

          {/* Features */}
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, text: "Log daily tasks and work hours" },
              { icon: Clock, text: "Submit leave and reimbursement requests" },
              { icon: FileText, text: "Update profile & documents" },
              { icon: HelpCircle, text: "Community support included" },
              { icon: Users, text: "Manage up to 10 employees" },
              { icon: BarChart2, text: "Basic analytics & reporting" },
              { icon: ShieldCheck, text: "Data security & privacy compliance" },
              { icon: Calendar, text: "Track leaves & attendance" },
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                <feature.icon className="text-cyan-500 w-6 h-6 mt-1" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="text-center pt-6">
            <button className="px-6 py-3 rounded-xl bg-cyan-500 dark:bg-cyan-600 text-white font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-500 shadow-md transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterDetails;
