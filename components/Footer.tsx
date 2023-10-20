"use client";
import React, { useState, useEffect } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      const year = new Date().getFullYear();

      if (year !== currentYear) {
        setCurrentYear(year);
      }
    }, 1000); // Verifica cada segundo

    return () => clearInterval(interval);
  }, [currentYear]);

  return (
    <footer className="bg-slate-800 py-6 max-w-4xl mx-auto mt-auto rounded-xl">
      <div className="flex flex-row justify-between items-center">
        <h2 className="ml-16">Copyright © {currentYear}</h2>
        <p className="text-electric-violet-200 ">
          Scripting dreams 💜 by
          <a
            href="https://github.com/Mrheaven778"
            className="text-electric-violet-600 font-extrabold mr-16 ml-2"
          >
          Mr heaven
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
