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
const LinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const AnimatedDashboard = () => (
  <div className="relative w-full h-[500px] bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-16 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-lg"></div>
        <span className="text-white font-semibold">URL Manager</span>
      </div>
      <div className="flex gap-2">
        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
      </div>
    </div>
    <div className="absolute top-16 left-0 right-0 bottom-0 p-6">
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 bg-slate-700/30 rounded-xl p-4 border border-slate-600/50">
            <div className="text-slate-400 text-sm mb-2">Enter URL</div>
            <div className="h-2 bg-slate-600 rounded w-3/4"></div>
          </div>
          <div className="w-24 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-semibold text-sm">Shorten</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { color: 'from-blue-500 to-cyan-500', value: '1.2M' },
          { color: 'from-purple-500 to-pink-500', value: '45.8K' },
          { color: 'from-amber-500 to-orange-500', value: '98.7%' }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className={`bg-linear-to-r ${card.color} rounded-2xl p-4 text-white`}
          >
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="text-sm opacity-80">Clicks Today</div>
          </motion.div>
        ))}
      </div>
      <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
        <div className="text-white font-semibold mb-4">Recent Links</div>
        <div className="space-y-3">
          {[
            { short: 'shrt.li/abc123', clicks: '1,234' },
            { short: 'shrt.li/def456', clicks: '987' },
            { short: 'shrt.li/ghi789', clicks: '654' }
          ].map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex justify-between items-center p-3 bg-slate-700/20 rounded-xl border border-slate-600/30"
            >
              <div className="text-cyan-400 font-mono text-sm">{link.short}</div>
              <div className="text-emerald-400 font-semibold">{link.clicks} clicks</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
    />
    <motion.div
      animate={{ 
        scale: [1.1, 1, 1.1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"
    />
  </div>
);

export default function Home() {
  const stats = [
    { number: "50M+", label: "Links Shortened" },
    { number: "99.9%", label: "Uptime" },
    { number: "100K+", label: "Active Users" }
  ];

  const features = [
    {
      icon: <LinkIcon />,
      title: "Instant Shortening",
      description: "Transform long URLs into clean, shareable links instantly"
    },
    {
      icon: <AnalyticsIcon />,
      title: "Advanced Analytics",
      description: "Comprehensive insights into click patterns and user behavior"
    },
    {
      icon: <ShieldIcon />,
      title: "Enterprise Security",
      description: "Military-grade encryption and privacy protection"
    },
    {
      icon: <RocketIcon />,
      title: "Lightning Fast",
      description: "Global CDN ensuring sub-100ms response times"
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-600 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-slate-800/30 border border-slate-700 rounded-full px-4 py-2 w-fit backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300">
                Enterprise-Grade URL Management
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className={`text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${poppins.className}`}>
                <span className="bg-linear-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Shorten
                </span>
                <br />
                <span className="bg-linear-to-br from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Analyze
                </span>
                <br />
                <span className="bg-linear-to-br from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Optimize
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                The world's most sophisticated URL shortening platform. 
                Built for enterprises that demand reliability, security, and unparalleled performance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8 pt-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Link href="/shorten">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-2xl shadow-emerald-500/20"
                >
                  <span className="flex items-center gap-3">
                    Start For Free
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
              
              <Link href="/enterprise">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group border border-slate-600 hover:border-slate-500 bg-slate-800/30 hover:bg-slate-700/30 px-8 py-4 rounded-xl font-semibold text-slate-300 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3">
                    Enterprise Demo
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/20 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 bg-linear-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-emerald-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <AnimatedDashboard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 bg-linear-to-br from-emerald-500 to-cyan-500 p-4 rounded-2xl shadow-2xl shadow-emerald-500/25"
            >
              <div className="text-white text-center">
                <div className="text-2xl font-bold">⚡</div>
                <div className="text-xs font-semibold">98% Faster</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-2xl p-4 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-green-400 text-sm font-bold">✓ Secure</div>
                <div className="text-xs text-slate-400">SSL Encrypted</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}