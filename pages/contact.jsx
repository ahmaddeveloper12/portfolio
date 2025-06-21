'use client';

import { motion } from 'framer-motion';

export default function PaymentInfo() {
  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-500 mb-6 text-center"
      >
        💳 Payment Information
      </motion.h1>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-[#111111] p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          How to Pay for Your Course
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 text-lg">
          <li>
            Select the course you want to enroll in from our course list.
          </li>
          <li>
            Click on the “Proceed to Payment” button to go to the secure payment gateway.
          </li>
          <li>
            Choose your preferred payment method:
            <ul className="list-disc list-inside ml-6 mt-1 text-gray-400">
              <li>Credit/Debit Card</li>
              <li>Bank Transfer</li>
              <li>PayPal</li>
              <li>Mobile Wallets Phone=03079916068(JazzCash, EasyPaisa, etc.)</li>
            </ul>
          </li>
          <li>
            Complete the payment by following the on-screen instructions.
          </li>
          <li>
            After successful payment, you will receive a confirmation email with access details.
          </li>
          <li>
            If you face any issues, contact our support team at 
            <a href="mailto:support@novatech.com" className="text-blue-400 underline ml-1">support@novatech.com</a>.
          </li>
        </ol>
      </motion.section>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 text-center"
      >
        <a
          href="/courses"
          className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:brightness-110 transition"
        >
          Browse Courses
        </a>
      </motion.div> */}
    </main>
  );
}
