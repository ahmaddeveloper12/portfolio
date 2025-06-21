'use client';

import { motion } from 'framer-motion';

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-500 mb-6"
      >
        🚀 Welcome to Nova Tech
      </motion.h1>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-[#1a1a1a] p-6 rounded-xl mb-6 shadow-md"
      >
        <h2 className="text-2xl font-semibold text-red-500 mb-2">About Us</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Nova Tech is a cutting-edge digital solutions company, delivering modern web development, app engineering, SEO, and API integrations. 
          We focus on building scalable, high-performance platforms for businesses that want to lead in the digital age.
        </p>
      </motion.section>

      {/* Reputation Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-[#2c0a0a] p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-2">Why Choose Nova Tech?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>⭐ Trusted by over 500+ clients worldwide</li>
          <li>💼 Delivered 300+ successful projects</li>
          <li>🚀 5+ years of industry experience</li>
          <li>🛡️ 24/7 support and maintenance</li>
          <li>🔧 Expert team of developers & designers</li>
        </ul>
      </motion.section>
    </main>
  );
}
