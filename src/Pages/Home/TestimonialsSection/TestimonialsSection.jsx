// src/Pages/TestimonialsSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Testimonials Data
const reviews = [
  {
    id: 1,
    name: "Shirin Akhter",
    title: "HR Manager",
    avatar: "https://i.ibb.co/ksLDRkxp/pexels-heitorverdifotos-2169427.jpg",
    message:
      "HRPulse has streamlined our entire employee management system. Performance tracking is now effortless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafiul Islam",
    title: "Frontend Developer",
    avatar: "https://i.ibb.co/s9HwqdJX/pexels-tima-miroshnichenko-7206418.jpg",
    message:
      "Posting workflow updates is simple and keeps my manager always in the loop. Very intuitive UI!",
    rating: 5,
  },
  {
    id: 3,
    name: "Farzana Alam",
    title: "Finance Officer",
    avatar: "https://i.ibb.co/bMnttbsp/pexels-shkrabaanthony-7342620.jpg",
    message:
      "Managing payroll and salary disbursements has become faster and more accurate with HRPulse.",
    rating: 5,
  },
  {
    id: 4,
    name: "Nayeem Hasan",
    title: "Content Executive",
    avatar: "https://i.ibb.co/v6QZDwyk/pexels-nayletcg-999248.jpg",
    message:
      "The dashboard helps me track my weekly output clearly. I love the transparency it brings.",
    rating: 4,
  },
  {
    id: 5,
    name: "Rumana Hossain",
    title: "Team Lead, Sales",
    avatar: "https://i.ibb.co/nMZpBQX5/pexels-olly-3777948.jpg",
    message:
      "Team performance monitoring and contract renewals are easier than ever. Highly recommended!",
    rating: 5,
  },
  {
    id: 6,
    name: "Khalid Mahmud",
    title: "HR Executive",
    avatar: "https://i.ibb.co/s9HwqdJX/pexels-tima-miroshnichenko-7206418.jpg",
    message:
      "Before HRPulse, we had issues managing employee documents. Now everything is organized and accessible.",
    rating: 5,
  },
  {
    id: 7,
    name: "Tasnim Jahan",
    title: "Intern, Marketing",
    avatar: "https://i.ibb.co/bMnttbsp/pexels-shkrabaanthony-7342620.jpg",
    message:
      "As a new intern, HRPulse made my onboarding super smooth. Loved the welcome checklist feature!",
    rating: 4,
  },
  {
    id: 8,
    name: "Maruf Rahman",
    title: "Backend Developer",
    avatar: "https://i.ibb.co/nMZpBQX5/pexels-olly-3777948.jpg",
    message:
      "The leave application process is now digital and fast. I can track approvals right from my dashboard.",
    rating: 5,
  },
  {
    id: 9,
    name: "Sabina Yasmin",
    title: "Recruitment Officer",
    avatar: "https://i.ibb.co/ksLDRkxp/pexels-heitorverdifotos-2169427.jpg",
    message:
      "Managing candidate records, interviews, and hiring flows has become seamless with HRPulse.",
    rating: 5,
  },
  {
    id: 10,
    name: "Imran Kabir",
    title: "Operations Manager",
    avatar: "https://i.ibb.co/v6QZDwyk/pexels-nayletcg-999248.jpg",
    message:
      "We’ve reduced paperwork by 80%. HRPulse helped us digitize everything from contracts to evaluations.",
    rating: 5,
  },
];

// ✅ Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex mt-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 mr-1 ${
          i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.943c.3.921-.755 1.688-1.54 1.118l-3.356-2.44a1 1 0 00-1.176 0l-3.356 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.943a1 1 0 00-.364-1.118L2.08 9.37c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.943z" />
      </svg>
    ))}
  </div>
);

// ✅ Testimonials Section Component
const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const getVisibleIndexes = () => {
    const center = current;
    const left = (current - 1 + reviews.length) % reviews.length;
    const right = (current + 1) % reviews.length;
    return [left, center, right];
  };

  return (
    <div className="relative overflow-hidden py-12 w-11/12 mx-auto rounded-xl bg-pink-50 dark:bg-neutral-900 transition-colors duration-300">
      <h2 className="text-center text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8 px-4">
        Hear how HR professionals and employees use{" "}
        <strong className="text-pink-600 dark:text-pink-400">HRPulse</strong> to
        streamline HR operations and boost productivity.
      </p>

      <div className="flex items-center justify-center gap-4 px-2 sm:px-10">
        {getVisibleIndexes().map((i, index) => {
          const isCenter = i === current;

          return (
            <motion.div
              key={reviews[i].id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: isCenter ? 1 : 0.85 }}
              transition={{ duration: 0.5 }}
              className={`relative p-5 rounded-xl shadow-lg w-[280px] sm:w-[300px] transition-all duration-300 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 ${
                isCenter ? "z-10" : "opacity-60"
              }`}
              style={{
                transform: isCenter
                  ? "translateX(0)"
                  : index === 0
                  ? "translateX(-40%)"
                  : "translateX(40%)",
                zIndex: isCenter ? 10 : 5,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={reviews[i].avatar}
                  alt={reviews[i].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-pink-700 dark:text-pink-400 text-sm">
                    {reviews[i].name}
                  </h4>
                  <p className="text-xs text-pink-400">{reviews[i].title}</p>
                </div>
              </div>

              <p className="italic text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span className="text-xl text-pink-400 leading-none">“</span>
                {reviews[i].message}
                <span className="text-xl text-pink-400 leading-none">”</span>
              </p>

              <StarRating rating={reviews[i].rating} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsSection;
