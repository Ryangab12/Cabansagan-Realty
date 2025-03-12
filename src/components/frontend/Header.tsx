"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const navigate = useRouter();

  const handleBuyPage = () => {
    navigate.push("/buy");
  };

  const handleSellPage = () => {
    navigate.push("/sell");
  };

  const handleAppraisalPage = () => {
    navigate.push("/appraisal");
  };

  const handleHomeButton = () => {
    navigate.push("/home");
  };

  const handleAboutUsButton = () => {
    navigate.push("/about");
  };

  const handleLogInButton = () => {
    navigate.push("/auth/login");
  };
  return (
    <div className="flex bg-white w-full h-24 top-0 left-0 shadow-md">
      <div className="flex flex-row justify-between items-center w-full px-10 text-xl">
        <h1>
          <img
            onClick={handleHomeButton}
            className="h-28 w-40 cursor-pointer"
            src="/samplelogo.png"
            alt=""
          />
        </h1>

        <h1>
          <button
            onClick={handleBuyPage}
            className="cursor-pointer underline hover:no-underline"
          >
            Buy
          </button>
        </h1>

        <h1>
          <button
            onClick={handleSellPage}
            className="cursor-pointer underline hover:no-underline"
          >
            Sell
          </button>
        </h1>

        <h1>
          <button
            onClick={handleAppraisalPage}
            className="cursor-pointer underline hover:no-underline"
          >
            Appraisal
          </button>
        </h1>

        <h1>
          <button
            onClick={handleAboutUsButton}
            className="cursor-pointer underline hover:no-underline"
          >
            About Us!
          </button>
        </h1>

        <h1>
          <button
            onClick={handleLogInButton}
            className="text-white bg-black py-2 px-4 rounded-md cursor-pointer"
          >
            Log In
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Header;
