"use client";
// Import statements
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Import SVG images (assuming they are in the public/images folder)
import Brand_Img from "@/public/images/icon-brand-recognition.svg";
import Detailed from "@/public/images/icon-detailed-records.svg";
import customizable from "@/public/images/icon-fully-customizable.svg";

const AdvancedStatistic = () => {
  return (
    <div className="container mx-auto px-6 mt-2 flex flex-col items-center justify-center gap-12 ">
      {/* Title and Description */}
      <div className="flex flex-col gap-1 items-center justify-center xl:w-[450px] w-full">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="xl:text-3xl text-2xl font-bold mb-4 text-black "
        >
          Advanced Statistics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="xl:text-md text-sm font-400 text-gray-500 capitalize text-center"
        >
          track how your links are performing across the web with our advaced
          statistics dashboard.
        </motion.p>
      </div>
      {/* Statistic Items */}
      <div className="flex justify-center items-center w-full mt-8 xl:flex-row flex-col ">
        {/* Item 1: Brand Recognition */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="xl:w-[429px] w-full h-[250px] rounded-lg bg-white flex items-start justify-start  flex-col px-7 max-xl:items-center max-xl:text-center"
        >
          <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[var(--Dark-Violet)]  -translate-y-9">
            <Image src={Brand_Img} alt="Brand Image" width={32} height={32} />
          </div>
          <span className="text-black text-xl font-semibold">
            Brand Recognition
          </span>
          <p className="text-gray-500 text-md font-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ipsam excepturi sequi, minus assumenda harum.
          </p>
        </motion.div>
        {/* Separator line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="xl:w-6 w-[2.5rem] h-[5px] bg-[var(--Cyan)] translate-y-5 max-xl:rotate-90"
        />
        {/* Item 2: Detailed Records */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="xl:w-[429px] w-full h-[250px] rounded-lg bg-white flex items-start justify-start  flex-col px-7 max-xl:items-center max-xl:text-center max-xl:mt-5"
        >
          <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[var(--Dark-Violet)]  -translate-y-9">
            <Image src={Detailed} alt="Brand Image" width={32} height={32} />
          </div>

          <span className="text-black text-xl font-semibold">
            Detailed Records
          </span>
          <p className="text-gray-500 text-md font-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ipsam excepturi sequi, minus assumenda harum.
          </p>
        </motion.div>
        {/* Separator line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="xl:w-6 w-[2.5rem] h-[5px] bg-[var(--Cyan)] xl:translate-y-5 translate-y-[3.75rem] max-xl:rotate-90"
        />
        {/* Item 2: Fully Customizable */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="xl:w-[429px] w-full h-[250px] rounded-lg bg-white flex items-start justify-start  flex-col px-7 max-xl:items-center max-xl:text-center max-xl:mt-5"
        >
          <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[var(--Dark-Violet)]  -translate-y-9">
            <Image
              src={customizable}
              alt="Brand Image"
              width={32}
              height={32}
            />
          </div>
          <span className="text-black text-xl font-semibold">
            Fully Customizable
          </span>
          <p className="text-gray-500 text-md font-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ipsam excepturi sequi, minus assumenda harum.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedStatistic;
