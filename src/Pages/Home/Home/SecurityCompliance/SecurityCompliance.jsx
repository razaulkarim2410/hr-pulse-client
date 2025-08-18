// src/Pages/Home/ExtraSections.jsx
import React from "react";
import { motion } from "framer-motion";
import { SiStripe, SiFirebase } from "react-icons/si";
import { FaGoogle, FaSlack, FaMicrosoft } from "react-icons/fa";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Integrations = () => {
  const partners = [
    {
      name: "Stripe",
      icon: <SiStripe className="text-4xl text-purple-600" />,
      desc: "Secure payroll & salary payments",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-4xl text-orange-500" />,
      desc: "Authentication, data sync, real-time updates",
    },
    {
      name: "Google Workspace",
      icon: <FaGoogle className="text-4xl text-blue-600" />,
      desc: "Easy employee collaboration & document sharing",
    },
    {
      name: "Slack",
      icon: <FaSlack className="text-4xl text-indigo-600" />,
      desc: "Future team communication integration",
    },
    {
      name: "Teams",
      icon: <FaMicrosoft className="text-4xl text-blue-700" />,
      desc: "Optional team communication integration",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-neutral-900 ">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center ">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
        >
          Integrations & Partners
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-neutral-600 dark:text-neutral-400 mb-12"
        >
          Built for enterprise-level productivity. Connect with the tools you already use.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4 hover:shadow-2xl transition-all cursor-pointer"
            >
              {p.icon}
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{p.name}</h3>
              <p className="text-sm text-gray-600 dark:text-neutral-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SecurityCompliance = () => {
  const items = [
    { title: "JWT Authentication", desc: "Secure user sessions", icon: "🔐" },
    { title: "Role-Based Access Control", desc: "Employee, HR, Admin", icon: "🛡️" },
    { title: "Data Protection", desc: "Encrypted employee & payroll data", icon: "📊" },
    { title: "Compliance Ready", desc: "GDPR-friendly structure & audit logging", icon: "✅" },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-neutral-900 w-11/12 mx-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
        >
          Security & Compliance
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-neutral-600 dark:text-neutral-400 mb-12"
        >
          Enterprise-ready HR software with secure access, data protection, and full compliance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg flex flex-col items-center gap-3 hover:shadow-2xl cursor-pointer transition-all"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-neutral-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
