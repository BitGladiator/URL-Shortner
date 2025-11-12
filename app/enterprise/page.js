"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  Zap, 
  BarChart3, 
  Globe2,
  Lock,
  Server,
  Target,
  Award,
  CheckCircle2,
  Star,
  Building,
  ArrowRight,
  Calendar,
  MessageCircle
} from "lucide-react";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const Enterprise = () => {
  const [activePlan, setActivePlan] = useState("enterprise");

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with advanced threat protection"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Management",
      description: "Role-based access control and team collaboration"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "High Performance",
      description: "99.99% SLA with global CDN and edge computing"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Custom dashboards and API access for data integration"
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "Global Infrastructure",
      description: "Multi-region deployment with automatic failover"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Privacy",
      description: "GDPR, CCPA compliant with data residency options"
    }
  ];

  const plans = [
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "For growing teams needing advanced features",
      features: [
        "Up to 10 team members",
        "50,000 links per month",
        "Basic analytics",
        "Standard support",
        "Custom domains",
        "API access"
      ],
      cta: "Start Business Trial",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-featured solution for large organizations",
      features: [
        "Unlimited team members",
        "Unlimited links",
        "Advanced analytics",
        "Priority 24/7 support",
        "White-label solutions",
        "SLA guarantee",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: true
    }
  ];

  const testimonials = [
    {
      company: "TechCorp Inc.",
      logo: "TC",
      comment: "Reduced our link management overhead by 70% while improving security and analytics capabilities.",
      author: "Sarah Chen",
      position: "CTO"
    },
    {
      company: "GlobalBank",
      logo: "GB",
      comment: "The enterprise features and compliance certifications made onboarding seamless for our security team.",
      author: "Michael Rodriguez",
      position: "Head of Digital"
    },
    {
      company: "InnovateLabs",
      logo: "IL",
      comment: "Scaled to handle millions of clicks during our product launch without any performance issues.",
      author: "Jessica Kim",
      position: "Growth Marketing Director"
    }
  ];

  const compliance = [
    { name: "SOC 2 Type II", status: "Certified" },
    { name: "GDPR", status: "Compliant" },
    { name: "CCPA", status: "Compliant" },
    { name: "ISO 27001", status: "Certified" },
    { name: "HIPAA", status: "Available" },
    { name: "PCI DSS", status: "Level 1" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-950 pt-20">
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6"
          >
            <Building className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              Enterprise Grade Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-5xl md:text-6xl font-bold text-white mb-6 ${poppins.className}`}
          >
            <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Enterprise URL
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-slate-300 font-light">
              Management Platform
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Secure, scalable, and compliant URL management for the world's most demanding organizations. 
            Trusted by Fortune 500 companies to handle billions of clicks annually.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-2xl shadow-emerald-500/20">
              <span className="flex items-center gap-3">
                Schedule Demo
                <Calendar className="h-5 w-5" />
              </span>
            </button>
            <button className="border border-slate-600 hover:border-slate-500 bg-slate-800/30 hover:bg-slate-700/30 px-8 py-4 rounded-xl font-semibold text-slate-300 transition-all duration-300">
              <span className="flex items-center gap-3">
                Contact Sales
                <MessageCircle className="h-5 w-5" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>
      <section className="py-12 border-y border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-slate-400 text-sm font-medium mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
            {["Microsoft", "Google", "Amazon", "IBM", "Salesforce", "Spotify"].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-slate-300 font-semibold text-lg"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold text-white mb-4 ${poppins.className}`}>
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to manage URLs at scale with enterprise-level security and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold text-white mb-4 ${poppins.className}`}>
              Enterprise Plans
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Flexible pricing designed to scale with your organization's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/30 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/10 scale-105' 
                    : 'border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-linear-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg shadow-emerald-500/20'
                    : 'border border-slate-600 hover:border-slate-500 bg-slate-800/30 hover:bg-slate-700/30 text-slate-300'
                }`}>
                  <span className="flex items-center justify-center gap-3">
                    {plan.cta}
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold text-white mb-4 ${poppins.className}`}>
              Enterprise Compliance
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Built with security and compliance at the core, meeting the highest industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {compliance.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-slate-600/50 transition-all duration-300"
              >
                <Award className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-emerald-400">{item.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold text-white mb-4 ${poppins.className}`}>
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.company}</div>
                    <div className="text-slate-400 text-sm">{testimonial.author}, {testimonial.position}</div>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-linear-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>
            
            <h2 className={`text-4xl font-bold text-white mb-6 relative z-10 ${poppins.className}`}>
              Ready to Enterprise Your URL Strategy?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">
              Join the world's leading companies using our enterprise URL management platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-2xl shadow-emerald-500/20">
                <span className="flex items-center gap-3">
                  Schedule Enterprise Demo
                  <Calendar className="h-5 w-5" />
                </span>
              </button>
              <button className="border border-slate-600 hover:border-slate-500 bg-slate-800/30 hover:bg-slate-700/30 px-8 py-4 rounded-xl font-semibold text-slate-300 transition-all duration-300">
                <span className="flex items-center gap-3">
                  Contact Sales Team
                  <Users className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Enterprise;