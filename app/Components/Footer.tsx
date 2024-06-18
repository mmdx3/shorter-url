import Image from "next/image";
import React from "react";
// Import SVG images (assuming they are in the public/images folder)
import bg_Boost from "@/public/images/bg-boost-desktop.svg";
import FaceBook from "@/public/images/icon-facebook.svg";
import Tweeter from "@/public/images/icon-twitter.svg";
import Pintrest from "@/public/images/icon-pinterest.svg";
import instagram from "@/public/images/icon-instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col  justify-center items-center select-none">
      {/* Boosted Links */}
      <div className="w-full h-40 flex flex-col gap-5 justify-center items-center relative bg-[var(--Dark-Violet)]">
        <Image
          src={bg_Boost}
          alt="img"
          className="absolute top-0 w-full h-full z-[0] select-none"
        />
        <h2 className="text-xl text-white z-[3]">Boost your links today</h2>
        <button className="bg-[var(--Cyan)] text-white px-4 py-2 rounded-md z-[4] hover:bg-[var(--Cyan-light)] transition-all duration-300 ease-linear">
          <span className="text-xs text-white rounded-lg">Get Started</span>
        </button>
      </div>
      <footer className="w-full min-h-24 bg-[var(--Very-Dark-Violet)] py-6  ">
        <div className="container mx-auto flex justify-between items-start px-6 py-6  max-xl:flex-col max-xl:text-center max-xl:gap-7 max-xl:items-center">
          {/* Logo */}
          <span className="text-3xl font-bold text-white ">Shortly</span>
          {/* Links */}
          <div className="flex justify-start items-start xl:gap-24 max-xl:flex-col gap-8 max-xl:items-center">
            {/* Features */}
            <div className="flex flex-col gap-2 max-xl:justify-center max-xl:items-center">
              <h4 className="text-white text-xs font-bold pb-4">Features</h4>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                Link Shortening
              </a>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                Brand Link
              </a>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                Analytics
              </a>
            </div>
            {/* resources */}
            <div className="flex flex-col gap-2 max-xl:justify-center max-xl:items-center">
              <h4 className="text-white text-xs font-bold pb-4">Resources</h4>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                Support
              </a>
            </div>
            {/* Company */}
            <div className="flex flex-col gap-2 max-xl:justify-center max-xl:items-center">
              <h4 className="text-white text-xs font-bold pb-4">Company</h4>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                About
              </a>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                our Team
              </a>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                Carreers
              </a>
              <a
                href="#"
                className="text-[var(--Grayish-Violet)] text-xs hover:text-[var(--Cyan)] transition-all duration-300 ease-linear"
              >
                Contact
              </a>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4  justify-start items-start ">
            <Link href={"https://www.instagram.com/react_dev_front/"}>
              <Image
                src={FaceBook}
                alt="FaceBook"
                className="size-6 cursor-pointer hover:fill-red-500"
              />
            </Link>
            <Link href={"https://x.com/mamad_x3"} target="_blank">
              <Image
                src={Tweeter}
                alt="Tweeter"
                className="size-6 cursor-pointer hover:fill-red-500"
              />
            </Link>
            <Image
              src={Pintrest}
              alt="Pintrest"
              className="size-6 cursor-pointer hover:fill-red-500"
            />
            <Link href={"https://www.instagram.com/react_dev_front/"} target="_blank">
              <Image
                src={instagram}
                alt="instagram"
                className="size-6 cursor-pointer hover:fill-red-500"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
