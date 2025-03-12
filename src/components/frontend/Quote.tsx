"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedQuote() {
  const words = ["Buy", "Sell", "Appraise"];
  const [index, setIndex] = useState(0);
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    if (showFinalText) return;

    const interval = setInterval(() => {
      if (index < words.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => setShowFinalText(true), 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [index, showFinalText]);

  return (
    <div className="text-center mt-12 text-white text-xl font-bold">
      <div className="w-40 h-10 flex items-center justify-center mx-auto">
        {!showFinalText ? (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="absolute"
          >
            {words[index]}
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <p className="italic text-lg mt-2 max-w-full whitespace-nowrap">
              Your Trusted Partner in Every Step of Real Estate!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
