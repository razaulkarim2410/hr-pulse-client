import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-neutral-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-blue-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">support@hrpulse.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-green-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Phone</h4>
                <p className="text-gray-600 dark:text-gray-300">+880 1234-567890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-red-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Address</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  HRPulse HQ, Level 4, Road 12, Banani, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-md space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message submitted! 🚀');
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="input input-bordered w-full bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="input input-bordered w-full bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="input input-bordered w-full bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="textarea textarea-bordered w-full bg-white dark:bg-neutral-700 text-gray-800 dark:text-gray-100"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
