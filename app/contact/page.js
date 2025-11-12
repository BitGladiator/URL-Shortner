"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Building,
  User,
  Globe
} from "lucide-react";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "general"
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      contact: "contact@shortlink.com",
      action: "mailto:contact@shortlink.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Instant support during business hours",
      contact: "Start Chat",
      action: "#chat"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Come say hello at our headquarters",
      contact: "San Francisco, CA",
      action: "#location"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "enterprise", label: "Enterprise Sales" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership" },
    { value: "custom", label: "Custom Solution" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-950 pt-20">
      <section className="relative overflow-hidden py-16 px-6">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-cyan-500/5"></div>
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
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              Get in Touch
            </span>
          </motion.div>

          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 ${poppins.className}`}>
            <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your URL management strategy? Our team is here to help 
            you get the most out of our enterprise-grade shortening platform.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl font-bold text-white mb-6 ${poppins.className}`}>
                  Let's Talk
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Whether you're looking for enterprise solutions, technical support, 
                  or just have questions about our platform, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-300 group"
                  >
                    <div className="shrink-0 w-12 h-12 bg-linear-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-emerald-400">
                        {method.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="text-emerald-400 font-medium">
                        {method.contact}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-semibold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM PST</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className={`text-3xl font-bold text-white mb-2 ${poppins.className}`}>
                    Send us a Message
                  </h2>
                  <p className="text-slate-400 mb-8">
                    Fill out the form below and we'll respond as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">
                          <User className="h-4 w-4 inline mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">
                          <Building className="h-4 w-4 inline mr-2" />
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">
                          <Globe className="h-4 w-4 inline mr-2" />
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                        >
                          {inquiryTypes.map(type => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Send Message
                        <Send className="h-5 w-5" />
                      </span>
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <section className="py-16 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold text-white mb-4 ${poppins.className}`}>
              Visit Our Office
            </h2>
            <p className="text-xl text-slate-400">
              Come meet us in person at our San Francisco headquarters
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
          >
            <div className="aspect-video bg-linear-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <p className="text-slate-400">Interactive Map</p>
                <p className="text-slate-300 font-semibold mt-2">
                  123 Tech Street, San Francisco, CA 94107
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;