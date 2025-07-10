import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      label: "Registered Employees",
      value: 1200,
      suffix: "+",
    },
    {
      id: 2,
      label: "Tasks Completed",
      value: 1500,
      suffix: "+",
    },
    {
      id: 3,
      label: "Positive Feedbacks",
      value: 900,
      suffix: "+",
    },
  ];

  return (
    <section className="py-14 bg-white w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="p-6 rounded-xl shadow-md bg-pink-50 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-4xl font-extrabold text-pink-600 mb-2">
              <CountUp
                end={stat.value}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              {stat.suffix}
            </h3>
            <p className="text-lg text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
