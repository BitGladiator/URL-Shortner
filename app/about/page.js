"use client";

import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Merriweather = localFont({
  src: "../fonts/Merriweather-VariableFont.ttf",
  variable: "--font-Merriweather",
  weight: "100 900",
});

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-slate-800/90 backdrop-blur-md border border-slate-700 shadow-2xl rounded-3xl p-10 max-w-3xl w-full"
      >
        {/* Heading */}
        <h1
          className={`text-4xl font-bold text-yellow-400 ${Merriweather.className}`}
        >
          About This Project
        </h1>
        <p className="mt-4 text-slate-300 text-lg leading-relaxed">
          This project is a simple and efficient{" "}
          <span className="font-semibold text-yellow-300">URL Shortener</span>{" "}
          that takes long, unwieldy links and converts them into short,
          shareable URLs. It’s designed to make sharing links easier, improve
          readability, and provide a smooth user experience.
        </p>

        {/* Features */}
        <h2
          className={`text-2xl font-semibold text-yellow-400 mt-8 ${Merriweather.className}`}
        >
          Key Features
        </h2>
        <ul className="mt-5 space-y-4 text-slate-200">
          {[
            "Shorten Long URLs – Instantly generate compact links.",
            "Redirects – Short URLs automatically redirect to the original link.",
            "User-Friendly – Minimal, clean interface for quick use.",
            "Scalable – Built to handle multiple URL mappings efficiently.",
          ].map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <p className="mt-8 text-slate-400 leading-relaxed">
          This project demonstrates the core concepts of{" "}
          <span className="text-slate-200 font-medium">
            backend development
          </span>
          ,{" "}
          <span className="text-slate-200 font-medium">
            database management
          </span>
          , and{" "}
          <span className="text-slate-200 font-medium">clean API design</span>,
          while providing a practical tool that mirrors the functionality of
          popular services like{" "}
          <span className="text-yellow-300 font-semibold">Bitly</span> or{" "}
          <span className="text-yellow-300 font-semibold">TinyURL</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
