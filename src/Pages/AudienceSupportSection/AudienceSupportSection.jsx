import React, { useEffect, useState } from "react";

const cards = [
  {
    title: "HR Leaders",
    description: "Unify HR processes and empower teams to thrive.",
    icon: "📋",
    image: "/src/assets/pexels-pavel-danilyuk-7654629.jpg",
  },
  {
    title: "Team Leads",
    description: "Track and support your team’s performance with ease.",
    icon: "👥",
    image: "/src/assets/pexels-fauxels-3183153.jpg",
  },
  {
    title: "Finance",
    description: "Gain clarity on costs and automate compensation.",
    icon: "💰",
    image: "/src/assets/pexels-artempodrez-5716001.jpg",
  },
  {
    title: "Employees",
    description: "Access payslips, manage leave, and track progress.",
    icon: "🧑‍💻",
    image: "/src/assets/pexels-yankrukov-7691722.jpg",
  },
];

const AudienceSupportSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative z-10 w-11/12 mx-auto py-10 bg-gray-50">
        <div className="text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Whoever You Are, HRPulse Supports You
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            From decision-makers to everyday heroes, we simplify HR for everyone.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative pl-6 py-10 pr-4 bg-white rounded-xl text-left shadow-md transition-all duration-500 ${
                  index === activeIndex ? "shadow-2xl bg-indigo-50" : "opacity-60"
                }`}
              >
                {/* Dashed line */}
                <div className="absolute left-2 top-6 bottom-6 w-[2px] bg-[linear-gradient(to_bottom,transparent_2px,rgba(75,0,130,0.5)_2px,rgba(75,0,130,0.5)_4px,transparent_4px)] bg-repeat-y bg-[length:2px_8px]" />

                {/* Animated solid line */}
                <div
                  className={`absolute left-2 top-6 w-[2px] bg-indigo-600 origin-top transition-all duration-[4000ms] ${
                    index === activeIndex ? "h-[calc(100%-3rem)]" : "h-0"
                  }`}
                ></div>

                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image below (250px height) */}
      <section className="w-11/12 h-[300px] items-center justify-center rounded-xl mx-auto  overflow-hidden transition-all duration-1000">
        <img
          src={cards[activeIndex].image}
          alt="HR Visual"
          className="w-full h-full object-cover"
        />
      </section>
    </>
  );
};

export default AudienceSupportSection;
