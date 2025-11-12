"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Link2, 
  Copy, 
  CheckCircle2, 
  Zap, 
  BarChart3,
  Shield,
  Globe,
  Sparkles
} from "lucide-react";

const Shorten = () => {
  const [URL, setURL] = useState("");
  const [shortURL, setshortURL] = useState("");
  const [generated, setgenerated] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!URL) {
      alert("Please enter a URL to shorten");
      return;
    }

    setIsLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      URL: URL,
      shortURL: shortURL,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setURL("");
        setshortURL("");
        const generatedURL = `${process.env.NEXT_PUBLIC_HOST || window.location.origin}/${shortURL || result.shortCode}`;
        setgenerated(generatedURL);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
        alert("Error generating short URL. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning Fast",
      description: "Sub-100ms redirection"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Track Clicks",
      description: "Real-time analytics"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure",
      description: "HTTPS encryption"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global CDN",
      description: "Worldwide performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 pt-20">
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              Enterprise URL Shortener
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Shorten Your Links in
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
              Seconds
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Transform long URLs into clean, memorable links with our premium shortening platform.
          </motion.p>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Link2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Create Short Link</h2>
                    <p className="text-slate-400">Enter your URL below to get started</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* URL Input */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-3">
                      Destination URL *
                    </label>
                    <input
                      type="url"
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-4 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors placeholder-slate-500 text-lg"
                      value={URL}
                      placeholder="https://example.com/very-long-url-path..."
                      onChange={(e) => setURL(e.target.value)}
                    />
                  </div>

                  {/* Custom Short Code */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-3">
                      Custom Short Code (Optional)
                    </label>
                    <div className="flex items-center bg-slate-900/50 border border-slate-600 rounded-xl px-4 focus-within:border-emerald-500 transition-colors">
                      <span className="text-slate-400 text-lg">
                        {process.env.NEXT_PUBLIC_HOST || "short.li"}/
                      </span>
                      <input
                        type="text"
                        value={shortURL}
                        className="flex-1 bg-transparent border-none px-4 py-4 text-slate-200 focus:outline-none text-lg placeholder-slate-500"
                        placeholder="your-custom-code"
                        onChange={(e) => setshortURL(e.target.value)}
                      />
                    </div>
                    <p className="text-slate-500 text-sm mt-2">
                      Use letters, numbers, and hyphens only
                    </p>
                  </div>

                  {/* Generate Button */}
                  <motion.button
                    onClick={generate}
                    disabled={isLoading || !URL}
                    whileHover={{ scale: isLoading || !URL ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading || !URL ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isLoading || !URL
                        ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg shadow-emerald-500/20"
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Generating Short URL...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Sparkles className="h-5 w-5" />
                        Generate Short URL
                      </div>
                    )}
                  </motion.button>
                </div>

                {/* Generated URL */}
                {generated && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-slate-900/50 border border-emerald-500/20 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <span className="text-lg font-semibold text-white">Your Short URL is Ready!</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-600">
                      <code className="flex-1 text-emerald-400 font-mono text-lg break-all">
                        <Link 
                          className="hover:underline hover:text-emerald-300 transition-colors" 
                          target="_blank" 
                          href={generated}
                        >
                          {generated}
                        </Link>
                      </code>
                      <motion.button
                        onClick={copyToClipboard}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-3 rounded-lg text-slate-200 transition-colors min-w-[100px] justify-center"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                            <span className="text-sm">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span className="text-sm">Copy</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                    
                    <p className="text-slate-400 text-sm mt-3 text-center">
                      Click to test or copy to share with your audience
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Our Platform?</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/30 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-emerald-400">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-base">{feature.title}</div>
                        <div className="text-slate-400 text-sm">{feature.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shorten;