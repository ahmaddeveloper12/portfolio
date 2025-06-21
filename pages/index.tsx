'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // ✅ Import Next.js Link component

const courses = [
  { id: 1, title: "API management", price: 1500 },
  { id: 2, title: "Website development", price: 1000 },
  { id: 3, title: "Offpage SEO", price: 3000 },
  { id: 4, title: "How to earn money in easy way", price: 5000 },
  { id: 5, title: "Backend developer", price: 6000 },
  { id: 6, title: "TypeScript in Depth", price: 3000 },
];

export default function CourseGrid() {
  return (
    <div className="min-h-screen bg-black p-8 text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl text-electricBlue font-bold">📚 Nova Tech</h1>

        {/* Buttons */}
        <div className="flex gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-lg shadow-md font-semibold inline-block"
            >
              ➕ Payment Method
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="about"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md font-semibold inline-block"
            >
              📈 Company
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#5f0a0a] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-electricBlue mb-2">
              {course.title}
            </h2>
            <p className="text-lg font-medium">PKR = {course.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
