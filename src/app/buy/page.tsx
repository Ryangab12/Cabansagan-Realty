"use client";
import React from "react";
import Header from "@/components/frontend/Header";

const BuyPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen w-full bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('/buy.jpg')" }}
    >
      <Header />
    </div>
  );
};

export default BuyPage;
