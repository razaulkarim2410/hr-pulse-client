import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Users, BarChart3, Wallet } from "lucide-react"; // icons

const features = [
  {
    title: "Secure Authentication",
    description:
      "Role-based login system with Firebase authentication ensures your data is safe and private.",
    icon: ShieldCheck,
  },
  {
    title: "Employee Management",
    description:
      "Easily manage employees, HRs, and admins with role-specific dashboards and permissions.",
    icon: Users,
  },
  {
    title: "Analytics & Tracking",
    description:
      "Track work progress, salary history, and payroll approvals with modern charts and insights.",
    icon: BarChart3,
  },
  {
    title: "Payroll & Payments",
    description:
      "Integrated payroll management with secure transactions and salary history for employees.",
    icon: Wallet,
  },
];

const DashboardHome = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Dashboard Home</title>
      </Helmet>

      {/* Welcome Section */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to the {userInfo?.role || "User"} Dashboard
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your work, track payments, and access insights in one place.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              <div className="flex justify-center">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                  <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-300" />
                </div>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardHome;
