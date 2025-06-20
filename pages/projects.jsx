// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description: "A fully responsive portfolio site built with Next.js and Tailwind CSS."
//     },
//     {
//       title: "SEO Dashboard",
//       description: "Dashboard for tracking backlinks, keyword rankings, and traffic data."
//     },
//     {
//       title: "Guest Posting Site",
//       description: "Platform for submitting and reviewing guest posts with admin panel."
//     }
    
//   ];

//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
//       <motion.section
//         className="max-w-6xl mx-auto"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//             >
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600">{project.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//     </main>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A fully responsive portfolio site built with Next.js and Tailwind CSS.",
    },
    {
      title: "SEO Dashboard",
      description: "Dashboard for tracking backlinks, keyword rankings, and traffic data.",
    },
    {
      title: "Guest Posting Site",
      description: "Platform for submitting and reviewing guest posts with admin panel.",
    },
     {
      title: "Digital marketing",
      description: "A fully responsive portfolio site built with Next.js and Tailwind CSS.",
    },
    {
      title: "off-page seo",
      description: "Dashboard for tracking backlinks, keyword rankings, and traffic data.",
    },
    {
      title: "Youtube monitization",
      description: "Platform for submitting and reviewing guest posts with admin panel.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <motion.section
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-2xl transition duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
              <p className="text-gray-800">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
