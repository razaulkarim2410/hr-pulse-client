import React from "react";
import { 
  CheckCircle, Users, FileText, Clock, HelpCircle, 
  BarChart2, ShieldCheck, Calendar, ClipboardCheck, Layers, MessageCircle, ArrowLeft 
} from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const EnterpriseDetails = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Animated Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-emerald-500 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold"
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
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Enterprise Plan</h1>
          <p className="text-lg mb-4">
            Best for large organizations with advanced needs, compliance, and premium support.
          </p>
          <div className="text-5xl font-extrabold">Custom Pricing</div>
          <p className="mt-1 text-white/80">Contact us for enterprise solutions</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            The Enterprise plan provides comprehensive tools, premium support, and enhanced security
            for large-scale organizations. Perfect for complex workflows and full team management.
          </p>

          {/* Features */}
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, text: "Approve final payroll and payouts" },
              { icon: Clock, text: "Manage roles and permissions" },
              { icon: ShieldCheck, text: "Ensure organization-wide compliance" },
              { icon: Users, text: "Unlimited employee management" },
              { icon: FileText, text: "Custom workflow templates" },
              { icon: BarChart2, text: "Advanced analytics & reporting" },
              { icon: Layers, text: "Custom integrations with third-party software" },
              { icon: Calendar, text: "Automated compliance alerts" },
              { icon: ClipboardCheck, text: "Role-based access control" },
              { icon: HelpCircle, text: "Dedicated onboarding specialist" },
              { icon: MessageCircle, text: "Priority SLA & 24/7 support" },
              { icon: FileText, text: "Quarterly strategy calls & unlimited training" },
            ].map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
              >
                <feature.icon className="text-emerald-500 w-6 h-6 mt-1" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="text-center pt-6">
            <button className="px-6 py-3 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 shadow-md transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDetails;
