"use client";
import Link from "next/link";
import React, { useState } from "react";

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
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URL's</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="bg-white px-4 py-2 focus:outline-purple-600 rounded-md "
          value={URL}
          placeholder="Enter your URL"
          onChange={(e) => {
            setURL(e.target.value);
          }}
        />
        <input
          type="text"
          value={shortURL}
          className="px-4 py-2 bg-white focus:outline-purple-600 rounded-md "
          placeholder="Enter preferred short URL text"
          onChange={(e) => {
            setshortURL(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 my-3 font-bold text-white"
        >
          Generate
        </button>
      </div>
      {generated && (<>
        <span className="font-bold text-lg">Generated URL:</span><code className="text-lg font-bold"><Link className="text-blue-500" target="_blank" href={generated}>{generated}</Link></code>
        </>
      )}
    </div>
  ); 
};

export default Shorten;
