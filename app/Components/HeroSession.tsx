import Image from "next/image";
import React from "react";

// Import SVG image (assuming it's in the public/images folder)
import Hero_img from "@/public/images/illustration-working.svg";

const HeroSession = () => {
  return (
    <div className="container mx-auto xl:p-12 px-6 flex xl:flex-row flex-col-reverse justify-between items-center md:gap-8">
      {/* Text and Button Section */}
      <div className="flex flex-col gap-3 xl:w-1/3 max-md:mt-12 max-md:justify-center max-md:items-center">
        <h1 className="xl:text-5xl text-3xl font-bold text-black max-md:text-center">
          More than just shorter links
        </h1>
        <p className="text-gray-500 text-md text-sm max-md:text-center">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="mt-5 w-[125px] h-[43px] rounded-lg text-white bg-[var(--Cyan)] hover:bg-[var(--Cyan-light)] transition-all duration-300 ease-in-out active:scale-[0.8]">
          <span>Get Started</span>
        </button>
      </div>

      {/* Image Section */}
      <div className="">
        <Image src={Hero_img} alt="Hero Img" className="xl:Hero-Img" />
      </div>
    </div>
  );
};

export default HeroSession;
