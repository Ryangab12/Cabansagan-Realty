"use client";

import React from "react";
import Header from "@/components/frontend/Header";
import AnimatedQuote from "@/components/frontend/Quote";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const navigate = useRouter();

  const handleGetStartedButton = () => {
    navigate.push("/buy");
  };
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      <Header />

      <div className="flex flex-col justify-center items-center flex-1 px-4">
        <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-12 lg:p-16 text-center rounded-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-4">
            Find Your Place in the Heart of Visayas
          </h1>

          <h2 className="text-white mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Experience tranquility, affordability, and a sense of security in a
            thriving community where warmth and hospitality make every moment
            feel like home. Embrace a lifestyle that blends comfort with
            convenience, creating the perfect environment for you and your loved
            ones.
          </h2>

          <div className="mt-8 sm:mt-12 md:mt-16">
            <button
              className="text-white border border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md transition duration-300 hover:bg-white hover:text-black cursor-pointer"
              onClick={handleGetStartedButton}
            >
              Get Started ➩
            </button>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <AnimatedQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
