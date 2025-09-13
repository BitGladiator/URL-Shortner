"use client";
import React, { useState } from "react";

const Shorten = () => {
  const [URL, setURL] = useState("");
  const [shortURL, setshortURL] = useState("");
  const [generated, setgenerated] = useState(false);
  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URL's</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="bg-white px-4 py-2 focus:outline-purple-600 rounded-md "
          value={URL}
          placeholder="Enter your URL"
          onChange={(e)=>{setURL(e.target.value)}}
        />
        <input
          type="text"
          value={shortURL}
          className="px-4 py-2 bg-white focus:outline-purple-600 rounded-md "
          placeholder="Enter preferred short URL text"
          onChange={(e)=>{setshortURL(e.target.value)}}
        />
        <button className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 my-3 font-bold text-white">Generate</button>
      </div>
    </div>
  );
};

export default Shorten;
