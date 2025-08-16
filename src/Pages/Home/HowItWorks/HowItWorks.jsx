// src/Pages/Home/HowItWorks/HowItWorks.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { UserRound, ClipboardCheck, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const StepCard = ({ icon: Icon, title, subtitle, bullets, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      className="relative group overflow-hidden rounded-2xl bg-white/90 dark:bg-neutral-900/80 shadow-sm ring-1 ring-neutral-200/70 dark:ring-neutral-800"
    >
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-900/10 dark:to-indigo-900/10" />

      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl p-3 bg-neutral-100 dark:bg-neutral-800">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            {subtitle && <p className="text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>}
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm md:text-base flex-1">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={() => navigate(link)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition"
          >
            View More <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="inline-block rounded-full border px-3 py-1 text-xs md:text-sm tracking-wide uppercase border-neutral-200 dark:border-neutral-800 mb-3">
            How It Works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            From <span className="text-cyan-600">Onboarding</span> to <span className="text-indigo-600">Payroll</span> — in Three Steps
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Role-based workflows keep everyone focused. Employees submit work, HR validates, and Admin finalizes payroll.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 md:mt-12 flex flex-col lg:flex-row items-stretch lg:items-center gap-6 md:gap-8"
        >
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

          <div className="flex justify-center lg:hidden">
            <ArrowDown className="h-7 w-7" />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="h-7 w-7" />
          </div>

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

          <div className="flex justify-center lg:hidden">
            <ArrowDown className="h-7 w-7" />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="h-7 w-7" />
          </div>

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
