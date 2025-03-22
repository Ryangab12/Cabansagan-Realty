"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedQuote() {
  const words = ["Buy", "Sell", "Appraise", "Rent"];
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
    <div className="text-center mt-6 text-white font-bold flex flex-col items-center justify-center w-full">
      <div className="w-40 h-10 flex items-center justify-center">
        {!showFinalText ? (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="absolute text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl"
          >
            {words[index]}
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center"
          >
            <p className="italic text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-2 text-center mx-auto max-w-screen-lg lg:max-w-none px-4 break-words lg:whitespace-nowrap">
              Your Trusted Partner in Every Step of Real Estate!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
