"use client"
import React, { useState } from "react";
import { Hidden } from "@mui/material";
import { motion } from "framer-motion";
import { Menu } from "@mui/icons-material";

interface Iprops {
  children: React.ReactNode;
  href: string;
  className: string;
}

// Separate component for navigation links
const NavLink = ({ children, href, className }: Iprops) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto xl:p-12 p-6 flex justify-between items-center">
      <div className="flex justify-center items-center gap-6">
        <h1 className="text-2xl font-bold mr-2">Shortly</h1>
        <Hidden mdDown>
          <div className="flex gap-6">
            {/* Navigation links */}
            <NavLink
              href="#"
              className="text-base font-semibold cursor-pointer text-[var(--Gray)] hover:text-black transition-all duration-300"
            >
              Features
            </NavLink>
            <NavLink
              href="#"
              className="text-base font-semibold cursor-pointer text-[var(--Gray)] hover:text-black transition-all duration-300"
            >
              Pricing
            </NavLink>
            <NavLink
              href="#"
              className="text-base font-semibold cursor-pointer text-[var(--Gray)] hover:text-black transition-all duration-300"
            >
              Resources
            </NavLink>
          </div>
        </Hidden>
      </div>

      {/* Login/Sign Up buttons */}
      <Hidden mdDown>
        <div className="flex justify-center items-center gap-6">
          <h3 className="w-16 h-8 text-[var(--Gray)] cursor-pointer hover:text-black transition-all duration-300 flex items-center ">
            Login
          </h3>
          <h3 className="w-[88px] h-10 text-white rounded-lg bg-[var(--Cyan)] cursor-pointer text-center flex items-center justify-center active:scale-[0.8] transition-all duration-300 hover:bg-[var(--Cyan-light)] hover:rounded-xl">
            <span>Sign Up</span>
          </h3>
        </div>
      </Hidden>

      {/* Menu button for smaller screens */}
      <Hidden mdUp>
        <Menu className="cursor-pointer" onClick={handleToggle} />
      </Hidden>

      {/* Mobile navigation menu  */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -80, x: "-50%" }}
          animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.8 }}
          className="w-[87%] bg-[var(--Dark-Violet)] left-[50%] -translate-x-[50%] rounded-xl fixed top-[66px] z-40 h-[350px] flex flex-col px-6 py-10 gap-3"
        >
          {/* Mobile navigation links */}
          <div className="flex flex-col justify-center items-center gap-6">
            <NavLink
              href="#"
              className="text-xl text-white text-center cursor-pointer hover:scale-[0.8] active:scale-[0.9] transition-all duration-300 ease-linear"
            >
              Features
            </NavLink>
            <NavLink
              href="#"
              className="text-xl text-white text-center cursor-pointer hover:scale-[0.8] active:scale-[0.9] transition-all duration-300 ease-linear"
            >
              Pricing
            </NavLink>
            <NavLink
              href="#"
              className="text-xl text-white text-center cursor-pointer hover:scale-[0.8] active:scale-[0.9] transition-all duration-300 ease-linear"
            >
              Resources
            </NavLink>
            {/* Divider line */}
            <div className="w-full h-[1px] bg-[var(--Grayish-Violet)] mt-2"></div>
            <NavLink
              href="#"
              className="text-xl text-white text-center cursor-pointer hover:scale-[0.8] active:scale-[0.9] transition-all duration-300 ease-linear"
            >
              Login
            </NavLink>
            <NavLink
              href="#"
              className="text-xl text-white text-center cursor-pointer hover:scale-[0.9] active:scale-[0.9] transition-all duration-300 ease-linear bg-[var(--Cyan)] rounded-lg p-3"
            >
              Sign Up
            </NavLink>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;


