"use client"
import Image from "next/image";
import localfont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";

const poppins = localfont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 min-h-screen flex items-center justify-center px-8">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full items-center">
      
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold text-emerald-400 leading-tight ${poppins.className}`}
          >
            The Best URL Shortener in the World
          </h1>
          <p className="text-zinc-400 text-lg max-w-md mx-auto lg:mx-0">
            We make long, messy links short, clean, and shareable. Simple,
            reliable, and built for speed.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="/shorten">
              <button className="bg-emerald-500 hover:bg-emerald-600 shadow-lg px-6 py-3 rounded-lg font-semibold text-white transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-slate-800 hover:bg-slate-700 border border-slate-600 shadow-md px-6 py-3 rounded-lg font-semibold text-zinc-200 transition">
                GitHub
              </button>
            </Link>
          </div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/vector.jpg"
            width={600}
            height={500}
            className="object-contain rounded-2xl shadow-xl"
            alt="Illustration of URL shortening"
          />
        </motion.div>
      </section>
    </main>
  );
}
