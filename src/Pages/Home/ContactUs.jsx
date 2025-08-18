// src/Pages/ContactUs.jsx
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      return Swal.fire("Error", "Both fields are required", "error");
    }

    try {
      await axios.post(`${API}/messages`, formData);
      Swal.fire("Sent!", "Your message has been received.", "success");
      setFormData({ email: "", message: "" });
    } catch (err) {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 bg-pink-50 dark:bg-neutral-900 rounded-xl shadow-md transition-colors duration-300">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400">
        ✉ Contact Us
      </h2>

      {/* Contact Info */}
      <div className="text-gray-700 dark:text-gray-300 space-y-1">
        <p>
          <strong className="text-pink-600 dark:text-pink-400">Address:</strong>{" "}
          HRPulse HQ, Dhaka, Bangladesh
        </p>
        <p>
          <strong className="text-pink-600 dark:text-pink-400">Email:</strong>{" "}
          support@hrpulse.com
        </p>
        <p>
          <strong className="text-pink-600 dark:text-pink-400">Phone:</strong>{" "}
          +880 123 456 7890
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-neutral-700"
      >
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-neutral-700 
                     bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-gray-200 
                     placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
                     focus:ring-2 focus:ring-pink-400 dark:focus:ring-pink-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Your message"
          className="w-full h-32 p-3 rounded-lg border border-gray-300 dark:border-neutral-700 
                     bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-gray-200 
                     placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
                     focus:ring-2 focus:ring-pink-400 dark:focus:ring-pink-500"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        <button
          className="w-full py-3 rounded-lg font-semibold 
                     bg-pink-600 hover:bg-pink-700 text-white 
                     dark:bg-pink-500 dark:hover:bg-pink-600 
                     transition-colors duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
