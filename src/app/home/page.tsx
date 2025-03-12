"use client";

import React from "react";
import Header from "@/components/frontend/Header";
import AnimatedQuote from "@/components/frontend/Quote";
const HomePage = () => {
  // const handleGetStartedButton = () => {
  //     //
  // }

  return (
    // <div className="w-full h-screen bg-cover bg-center bg-repeat" style={{ backgroundImage: "url('/Iloilo.png')" }}>
    <div className="flex flex-col w-full h-screen bg-black">
      <div>
        <Header />
      </div>

      <div className="flex flex-col justify-center items-center flex-1 px-4">
        <div className="border border-white bg-white/10 backdrop-blur-lg p-8 md:p-16 text-center rounded-lg w-1/2">
          <h1 className="text-white text-2xl md:text-3xl font-bold mt-4">
            Find Your Place in the Heart of Visayas
          </h1>

          <h2 className="text-white mt-4 md:mt-6 text-lg md:text-xl">
            Experience serenity, affordability, and security in a vibrant
            community where warmth and hospitality truly feel like home.
          </h2>

          <div className="mt-24">
            <button className="text-white border border-white px-4 py-2 rounded-md transition duration-300 hover:bg-white hover:text-black cursor-pointer">
              Get Started ➩
            </button>
          </div>

          <div className="text-center mt-12">
            <AnimatedQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
