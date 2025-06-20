"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <motion.section
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Me</h1>
        <motion.p
          className="text-lg leading-relaxed text-gray-800 text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I'm Altaf Sandhu, a passionate Frontend Developer and SEO Specialist. I specialize in crafting responsive, user-friendly web interfaces using React, Next.js, and Tailwind CSS. With a strong background in off-page SEO and guest posting, I help websites rank better and reach a wider audience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow hover:shadow-md transition"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>HTML, CSS, JavaScript</li>
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
              <li>SEO & Guest Posting</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow hover:shadow-md transition"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Experience</h2>
            <p className="text-gray-700">
              With hands-on experience in both development and SEO, I bring a creative and strategic approach to every project. Whether it's designing a fast-loading UI or boosting organic traffic, I focus on results.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
