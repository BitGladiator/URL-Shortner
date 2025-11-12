"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  MousePointer, 
  Globe2, 
  Calendar,
  Filter,
  Download,
  Share2,
  Clock,
  TrendingUp,
  Smartphone,
  Laptop,
  MapPin
} from "lucide-react";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [activeLink, setActiveLink] = useState("shrt.li/abc123");

  const stats = [
    {
      icon: <MousePointer className="h-5 w-5" />,
      label: "Total Clicks",
      value: "12,847",
      change: "+12.4%",
      trend: "up"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Unique Visitors",
      value: "8,234",
      change: "+8.2%",
      trend: "up"
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      label: "Countries",
      value: "64",
      change: "+3",
      trend: "up"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Avg. Click Time",
      value: "2.3s",
      change: "-0.4s",
      trend: "down"
    }
  ];

  const topLinks = [
    {
      shortUrl: "shrt.li/abc123",
      longUrl: "https://example.com/very-long-url-path-that-needs-shortening",
      clicks: 2847,
      createdAt: "2024-01-15"
    },
    {
      shortUrl: "shrt.li/def456",
      longUrl: "https://example.com/another-very-long-url-path",
      clicks: 1923,
      createdAt: "2024-01-10"
    },
    {
      shortUrl: "shrt.li/ghi789",
      longUrl: "https://example.com/marketing-campaign-landing-page",
      clicks: 1567,
      createdAt: "2024-01-08"
    },
    {
      shortUrl: "shrt.li/jkl012",
      longUrl: "https://example.com/product-launch-announcement",
      clicks: 1234,
      createdAt: "2024-01-05"
    }
  ];

  const geographicData = [
    { country: "United States", clicks: 3245, percentage: 25.2 },
    { country: "United Kingdom", clicks: 1876, percentage: 14.6 },
    { country: "Germany", clicks: 1567, percentage: 12.2 },
    { country: "Canada", clicks: 1234, percentage: 9.6 },
    { country: "Australia", clicks: 987, percentage: 7.7 }
  ];

  const deviceData = [
    { device: "Mobile", clicks: 6845, percentage: 53.2 },
    { device: "Desktop", clicks: 4523, percentage: 35.2 },
    { device: "Tablet", clicks: 1479, percentage: 11.6 }
  ];

  const timeSeriesData = [
    { date: "Jan 1", clicks: 234 },
    { date: "Jan 2", clicks: 345 },
    { date: "Jan 3", clicks: 287 },
    { date: "Jan 4", clicks: 456 },
    { date: "Jan 5", clicks: 389 },
    { date: "Jan 6", clicks: 512 },
    { date: "Jan 7", clicks: 478 }
  ];

  const referrers = [
    { source: "Direct", clicks: 3245 },
    { source: "Social Media", clicks: 2876 },
    { source: "Email", clicks: 1987 },
    { source: "Search", clicks: 1567 },
    { source: "Other", clicks: 1234 }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-950 pt-20">
      {/* Header */}
      <div className="border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={`text-4xl font-bold text-white ${poppins.className}`}>
                Analytics Dashboard
              </h1>
              <p className="text-slate-400 mt-2">
                Comprehensive insights for your shortened URLs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mt-4 lg:mt-0"
            >
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-2 text-slate-300 focus:outline-none focus:border-slate-500"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>

              <button className="flex items-center gap-2 bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-2 text-slate-300 hover:bg-slate-700/50 transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>

              <button className="flex items-center gap-2 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-xl px-4 py-2 text-white hover:from-emerald-600 hover:to-cyan-600 transition-all">
                <Download className="h-4 w-4" />
                Export
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-slate-700/50 rounded-lg">
                  <div className="text-emerald-400">
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-sm font-semibold ${
                  stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Click Activity</h3>
                <div className="flex items-center gap-2 text-slate-400">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+12.4% from last period</span>
                </div>
              </div>

              <div className="h-64 flex items-end gap-2">
                {timeSeriesData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-linear-to-t from-emerald-500 to-cyan-500 rounded-t-lg transition-all duration-300 hover:opacity-80"
                      style={{ height: `${(data.clicks / 600) * 100}%` }}
                    />
                    <div className="text-xs text-slate-400 mt-2">{data.date}</div>
                    <div className="text-sm text-white font-semibold mt-1">{data.clicks}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Top Performing Links</h3>
                <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Share Report</span>
                </button>
              </div>

              <div className="space-y-4">
                {topLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      activeLink === link.shortUrl 
                        ? 'bg-slate-700/50 border-emerald-500/50' 
                        : 'bg-slate-800/30 border-slate-600/30 hover:border-slate-500/50'
                    }`}
                    onClick={() => setActiveLink(link.shortUrl)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-emerald-400 font-mono text-sm">
                          {link.shortUrl}
                        </div>
                        <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded text-xs text-slate-300">
                          <MousePointer className="h-3 w-3" />
                          {link.clicks.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-slate-400 text-sm truncate">
                        {link.longUrl}
                      </div>
                    </div>
                    <div className="text-slate-400 text-sm">
                      {new Date(link.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white">Geographic Distribution</h3>
              </div>

              <div className="space-y-4">
                {geographicData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{data.country}</span>
                      <span className="text-slate-400">{data.clicks.toLocaleString()} ({data.percentage}%)</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-linear-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${data.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Smartphone className="h-5 w-5 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Device Distribution</h3>
              </div>

              <div className="space-y-4">
                {deviceData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        data.device === 'Mobile' ? 'bg-blue-500/20 text-blue-400' :
                        data.device === 'Desktop' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-amber-500/20 text-amber-400'
                      }`}>
                        {data.device === 'Mobile' ? <Smartphone className="h-4 w-4" /> :
                         data.device === 'Desktop' ? <Laptop className="h-4 w-4" /> :
                         <Smartphone className="h-4 w-4" />}
                      </div>
                      <span className="text-slate-300">{data.device}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{data.clicks.toLocaleString()}</div>
                      <div className="text-slate-400 text-sm">{data.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Globe2 className="h-5 w-5 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Traffic Sources</h3>
              </div>

              <div className="space-y-3">
                {referrers.map((source, index) => (
                  <div key={index} className="flex justify-between items-center p-2 hover:bg-slate-700/30 rounded-lg transition-colors">
                    <span className="text-slate-300">{source.source}</span>
                    <span className="text-emerald-400 font-semibold">
                      {source.clicks.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;