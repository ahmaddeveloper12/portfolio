"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      <motion.section
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>

        <motion.p
          className="text-center text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Have a project in mind or want to work together? Fill out the form
          below or reach out directly via email.
        </motion.p>

        <motion.form
          className="bg-white p-6 rounded-xl shadow-md grid gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault(); // prevent default form submission
            // Add handling logic here (optional)
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.section>
    </main>
  );
}
