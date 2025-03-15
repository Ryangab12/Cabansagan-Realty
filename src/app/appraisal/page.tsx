"use client";
import React from "react";
import Header from "@/components/frontend/Header";
import InquireForms from "@/components/frontend/InquireForms";
const AppraisalPage = () => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('/appraise.jpg')" }}
    >
      <Header />

      <div className="flex flex-col justify-center items-center flex-1 px-4">
        <div className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-12 lg:p-16 text-center rounded-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Let&apos;s appraise you property!
          </h1>

          <InquireForms />
        </div>
      </div>
    </div>
  );
};

export default AppraisalPage;
