"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-slate-800/90 backdrop-blur-md border border-slate-700 shadow-xl rounded-2xl p-10 max-w-2xl w-full"
      >
        <h1 className="text-4xl font-bold text-emerald-400 text-center">
          Contact Us
        </h1>
        <p className="mt-3 text-zinc-400 text-center">
          Have questions or feedback? Reach out and we’ll get back to you.
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-zinc-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 text-zinc-200 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="block text-zinc-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 text-zinc-200 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="block text-zinc-300 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-lg bg-slate-900 border border-slate-700 text-zinc-200 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
