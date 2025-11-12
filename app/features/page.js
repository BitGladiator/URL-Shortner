"use client";

import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Zap, 
  BarChart3, 
  Shield, 
  Globe, 
  Lock, 
  TrendingUp,
  Cpu,
  Infinity,
  Rocket
} from "lucide-react";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const Features = () => {
  const mainFeatures = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Sub-100ms shortening with global CDN acceleration",
      stats: "98% faster than competitors",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Real-time insights into clicks, geography, and user behavior",
      stats: "50+ metrics tracked",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Military-grade encryption with SOC 2 compliance",
      stats: "99.99% uptime SLA",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Scale",
      description: "Handle millions of requests with auto-scaling infrastructure",
      stats: "10M+ requests/day",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Password Protection",
      description: "Secure sensitive links with password authentication"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Custom Domains",
      description: "Brand your links with custom domain names"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "API Access",
      description: "RESTful API for seamless integration"
    },
    {
      icon: <Infinity className="h-6 w-6" />,
      title: "Unlimited Links",
      description: "Create as many short URLs as you need"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Bulk Shortening",
      description: "Shorten multiple URLs simultaneously"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "QR Code Generation",
      description: "Generate QR codes for every shortened link"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 pt-20">
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-emerald-400 font-medium">
              Enterprise-Grade Features
            </span>
          </motion.div>

          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 ${poppins.className}`}>
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-slate-300 font-light">
              Built for scale, security, and performance
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools that make our URL shortener 
            the most reliable and feature-rich solution for businesses and individuals alike.
          </p>
        </motion.div>
      </section>
      <section className="py-16 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 text-lg mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="text-sm text-emerald-400 font-semibold">
                  {feature.stats}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="py-16 px-6 bg-slate-800/20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-white mb-4 ${poppins.className}`}>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Everything You Need
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive features designed to meet all your URL management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-emerald-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>
            
            <h2 className={`text-4xl font-bold text-white mb-6 relative z-10 ${poppins.className}`}>
              Ready to Transform Your Links?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">
              Join thousands of businesses already using our premium URL shortener
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-2xl shadow-emerald-500/20"
            >
              <span className="flex items-center gap-3">
                Start Free Trial
                <Rocket className="w-5 h-5" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Features;