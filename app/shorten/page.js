"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Shorten = () => {
  const [URL, setURL] = useState("");
  const [shortURL, setshortURL] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = () => {
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
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortURL}`);
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-lg w-full bg-slate-800/90 border border-slate-700 p-8 rounded-2xl shadow-xl"
      >
        <h1 className="font-bold text-3xl text-emerald-400 text-center">
          Generate Your Short URL
        </h1>
        <p className="mt-2 text-zinc-400 text-center text-sm">
          Paste your long link below and create a shorter, shareable version.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-lg text-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={URL}
            placeholder="Enter your URL"
            onChange={(e) => setURL(e.target.value)}
          />
          <input
            type="text"
            value={shortURL}
            className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-lg text-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Preferred short text (optional)"
            onChange={(e) => setshortURL(e.target.value)}
          />
          <button
            onClick={generate}
            className="bg-emerald-500 hover:bg-emerald-600 shadow-lg py-3 rounded-lg font-semibold text-white transition"
          >
            Generate
          </button>
        </div>
        {generated && (
          <div className="mt-6 text-center">
            <span className="block text-lg font-semibold text-zinc-300">
              Generated URL:
            </span>
            <code className="text-emerald-400 text-lg font-bold break-words">
              <Link className="hover:underline" target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Shorten;
