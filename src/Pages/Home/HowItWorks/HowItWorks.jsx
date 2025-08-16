// src/Pages/Home/HowItWorks/HowItWorks.jsx
import React from "react";
import { motion } from "framer-motion";
import StepCard from "./StepCard";
import { UserRound, ClipboardCheck, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react";

export default function HowItWorks() {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="how-it-works" className="relative py-16 md:py-20 bg-gray-50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <p className="inline-block rounded-full border px-3 py-1 text-xs md:text-sm tracking-wide uppercase border-neutral-200 dark:border-neutral-700 mb-3">
            How It Works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            From <span className="text-cyan-600">Onboarding</span> to <span className="text-indigo-600">Payroll</span> — in Three Steps
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Role-based workflows keep everyone focused. Employees submit work, HR validates, and Admin finalizes payroll.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex flex-col lg:flex-row items-stretch lg:items-center gap-6 md:gap-8"
        >
          {/* Employee Card */}
          <StepCard
            icon={UserRound}
            title="Employee"
            subtitle="Create & submit"
            bullets={[
              "Log daily tasks and work hours",
              "Submit leave and reimbursement requests",
              "Update profile & documents",
            ]}
            link="/employees"
          />

          {/* Arrow between Employee → HR */}
          <div className="flex justify-center lg:hidden">
            <ArrowDown className="h-7 w-7 text-neutral-400" />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="h-7 w-7 text-neutral-400" />
          </div>

          {/* HR Card */}
          <StepCard
            icon={ClipboardCheck}
            title="HR"
            subtitle="Review & process"
            bullets={[
              "Verify work logs and attendance",
              "Process payroll requests",
              "Support teams with policy & onboarding",
            ]}
            link="/hr"
          />

          {/* Arrow between HR → Admin */}
          <div className="flex justify-center lg:hidden">
            <ArrowDown className="h-7 w-7 text-neutral-400" />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="h-7 w-7 text-neutral-400" />
          </div>

          {/* Admin Card */}
          <StepCard
            icon={ShieldCheck}
            title="Admin"
            subtitle="Approve & oversee"
            bullets={[
              "Approve final payroll and payouts",
              "Manage roles and permissions",
              "Ensure organization-wide compliance",
            ]}
            link="/admin"
          />
        </motion.div>
      </div>
    </section>
  );
}
