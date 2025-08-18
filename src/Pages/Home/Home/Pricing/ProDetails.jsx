import React from "react";
import { 
  CheckCircle, Users, FileText, Clock, HelpCircle, 
  BarChart2, ShieldCheck, Calendar, ClipboardCheck, Layers, MessageCircle, ArrowLeft 
} from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ProDetails = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Animated Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold"
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
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Pro Plan</h1>
          <p className="text-lg mb-4">
            Ideal for growing companies who need advanced features & team collaboration tools.
          </p>
          <div className="text-5xl font-extrabold">
            $49<span className="text-xl font-medium">/month</span>
          </div>
          <p className="mt-1 text-white/80">Billed monthly per user</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Boost your team's productivity with advanced tools, analytics, and streamlined workflows.
            Perfect for scaling companies that need more control and insights.
          </p>

          {/* Features */}
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, text: "Verify work logs and attendance" },
              { icon: Clock, text: "Process payroll requests" },
              { icon: FileText, text: "Support teams with policy & onboarding" },
              { icon: HelpCircle, text: "Priority email & chat support" },
              { icon: Users, text: "Manage up to 100 employees" },
              { icon: BarChart2, text: "Advanced analytics & reporting" },
              { icon: ShieldCheck, text: "Role-based access controls" },
              { icon: Calendar, text: "Automated payroll approvals" },
              { icon: ClipboardCheck, text: "Custom workflow templates" },
              { icon: Layers, text: "Team collaboration tools" },
              { icon: MessageCircle, text: "Internal messaging & notifications" },
              { icon: FileText, text: "Profile & document updates" },
            ].map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
              >
                <feature.icon className="text-indigo-500 w-6 h-6 mt-1" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="text-center pt-6">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 shadow-md transition">
              Get Pro Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDetails;
