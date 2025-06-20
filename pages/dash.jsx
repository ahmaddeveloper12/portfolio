import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="projects" className="hover:underline">Projects</a>
            <a href="contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Altaf sandhu</h2>
          <p className="text-lg md:text-xl mb-6">Frontend Developer | SEO Specialist | Guest Poster</p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100">
            View My Work
          </button>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg leading-relaxed">
            I'm a skilled frontend developer with experience in building responsive web apps using React and Next.js. I also specialize in SEO and off-page backlink strategies to improve site rankings and traffic.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
              <p>A fully responsive portfolio site built with Next.js and Tailwind CSS.</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-2">SEO Dashboard</h4>
              <p>Dashboard for tracking backlinks, keyword rankings, and traffic data.</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-2">Guest Posting Site</h4>
              <p>Platform for submitting and reviewing guest posts with admin panel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
          <form className="grid gap-4 max-w-xl">
            <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300" />
            <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300" />
            <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300" rows="4"></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section> */}

      <footer className="bg-gray-200 text-center py-6 mt-10">
        <p>&copy; 2025 Ahmad Khan. All rights reserved.</p>
      </footer>
    </main>
  );
}
