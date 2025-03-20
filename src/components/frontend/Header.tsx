"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useRouter();

  const handleNavigation = (path: string) => {
    navigate.push(path);
    setMenuOpen(false);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-200 w-full shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 h-20">
        <Image
          onClick={() => handleNavigation("/home")}
          className="h-14 md:h-20 lg:h-24 cursor-pointer"
          width={200}
          height={100}
          src="/title.png"
          alt="Logo"
        />

        <div className="hidden md:flex items-center space-x-6 text-lg md:text-xl">
          <button
            onClick={() => handleNavigation("/home")}
            className="font-bold hover:underline cursor-pointer"
          >
            Home
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-bold px-4 py-2 flex items-center hover:underline cursor-pointer"
            >
              Inquire <ChevronDown className="ml-1 w-5 h-5" />
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-gray-200 border border-gray-300 shadow-lg rounded-md z-50">
                {["buy", "sell", "appraisal", "rent"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigation(`/${item}`)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavigation("/contact")}
            className="font-bold hover:underline cursor-pointer"
          >
            Contact Us
          </button>

          <button
            onClick={() => handleNavigation("/about")}
            className="font-bold hover:underline cursor-pointer"
          >
            About Us
          </button>
        </div>

        <button
          onClick={() => handleNavigation("/auth/login")}
          className="hidden md:flex cursor-pointer"
        >
          <Image src="/admin.png" alt="Admin" width={50} height={50} />
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none cursor-pointer"
        >
          {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      <div
        className={`${menuOpen ? "flex" : "hidden"} md:hidden flex-col items-center space-y-4 py-4 bg-gray-200 w-full z-50`}
      >
        <button
          onClick={() => handleNavigation("/home")}
          className="font-bold hover:underline cursor-pointer"
        >
          Home
        </button>

        <div className="relative w-full flex flex-col items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-bold px-4 py-2 flex items-center hover:underline cursor-pointer"
          >
            Inquire <ChevronDown className="ml-1 w-5 h-5" />
          </button>

          {isOpen && (
            <div className="flex flex-col w-full items-center bg-gray-200 border border-gray-300 shadow-lg rounded-md">
              {["buy", "sell", "appraisal", "rent"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(`/${item}`)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => handleNavigation("/contact")}
          className="font-bold hover:underline cursor-pointer"
        >
          Contact Us
        </button>
        <button
          onClick={() => handleNavigation("/about")}
          className="font-bold hover:underline cursor-pointer"
        >
          About Us
        </button>

        <button
          onClick={() => handleNavigation("/auth/login")}
          className="cursor-pointer"
        >
          <Image src="/admin.png" alt="Admin" width={50} height={50} />
        </button>
      </div>
    </div>
  );
};

export default Header;
