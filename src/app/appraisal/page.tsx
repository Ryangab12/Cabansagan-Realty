"use client";
import React from "react";
import Header from "@/components/frontend/Header";

const AppraisalPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen w-full bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('/appraise.jpg')" }}
    >
      <Header />
    </div>
  );
};

export default AppraisalPage;
