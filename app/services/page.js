"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link, BarChart3, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "URL Shortening",
    description:
      "Convert long, complex URLs into short, shareable links instantly with our fast and reliable shortener.",
    icon: <Link className="h-8 w-8 text-emerald-400" />,
  },
  {
    title: "Analytics",
    description:
      "Track clicks, referrers, and geographic data to understand how your links are performing in real-time.",
    icon: <BarChart3 className="h-8 w-8 text-emerald-400" />,
  },
  {
    title: "Security",
    description:
      "Protect your links with built-in spam filters, and ensure safe redirection with secure HTTPS support.",
    icon: <ShieldCheck className="h-8 w-8 text-emerald-400" />,
  },
  {
    title: "Lightning Fast",
    description:
      "Experience ultra-fast redirects and performance optimized for modern web applications at scale.",
    icon: <Zap className="h-8 w-8 text-emerald-400" />,
  },
];

const Services = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl w-full"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold text-emerald-400 text-center">
          Our Services
        </h1>
        <p className="mt-3 text-zinc-400 text-center max-w-2xl mx-auto">
          We provide a range of services to make your links smarter, faster, and
          more secure. Explore what our platform has to offer.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-emerald-500/20 transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-zinc-100">
                {service.title}
              </h2>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
