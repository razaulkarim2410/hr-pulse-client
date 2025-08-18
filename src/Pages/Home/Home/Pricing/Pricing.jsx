// src/Pages/Home/PricingPlans.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const tiers = [
  {
    name: "Starter",
    price: "Free",
    users: "Up to 10 employees",
    features: [
      "Basic task management",
      "Profile updates & leave requests",
      "Community support",
    ],
    link: "/plans-starter",
  },
  {
    name: "Pro",
    price: "$49/mo",
    users: "Up to 100 employees",
    features: [
      "Advanced task & payroll management",
      "HR approval workflow",
      "Email support",
    ],
    link: "/plans-pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    users: "Unlimited employees",
    features: [
      "Dedicated account manager",
      "Priority support & SLA",
      "Custom integrations",
    ],
    link: "/plans-enterprise",
  },
];

const PricingPlans = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-neutral-900 w-11/12 mx-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
        >
          Pricing & Plans
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-neutral-600 dark:text-neutral-400 mb-12"
        >
          Choose a plan that fits your company size and workflow needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                  {tier.price}
                </p>
                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6">
                  {tier.users}
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-neutral-300 mb-6">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={tier.link}
                className="mt-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
