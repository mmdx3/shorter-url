"use client";
// Import statements
import React, { useRef } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../context/Store";
import { AnimatePresence } from "framer-motion";
import { Hidden } from "@mui/material";

// Toast configuration
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const ShortedUrl = () => {
  // Refs for state management
  const shortedUrlRef = useRef<any>();
  const buttonRef = useRef<any>(null);

  const handleClick = (index: number) => {
    const btn = document.querySelector(`[aria-label="shorted-url-${index}"]`) as HTMLElement;

    // Update button text and style on copy
    btn.textContent = "Copied!";
    btn.style.backgroundColor = "hsl(257, 27%, 26%)";
    
    // Copy shorted URL to clipboard
    navigator.clipboard.writeText(shortedUrlRef.current?.innerText);

    // Show success toast
    Toast.fire({
      icon: "success",
      title: "URL Copied! :)",
    });

    // Reset button text and style after a delay
    setTimeout(() => {
      btn.style.backgroundColor = "hsl(180, 66%, 49%)";
      btn.textContent = "Copy";
    }, 2000);
  };

  // Get URLs from Redux store
  const urls = useSelector((state: RootState) => state.Urls);

  // Render component only if there are URLs
  if (urls.length <= 0) {
    return null;
  }

  return (
    <div className="xl:mt-2 mt-4 flex flex-col gap-2 container mx-auto px-6 -translate-y-24">
      {/* URLs */}
      <AnimatePresence mode="popLayout">
        {urls.map((url, index) => (
          <motion.div
            layout
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring" }}
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between xl:flex-row flex-col gap-2"
          >
            {/* Long URL */}
            <h4 className="text-black text-xl font-semibold to-long-url max-xl:text-left max-xl:w-full">
              {url.long_url}
            </h4>
            <Hidden mdUp>
              <div className="w-full h-[1px] bg-[var(--Gray)]"></div>
            </Hidden>

            {/* Copy section */}
            <div className="flex gap-6 xl:flex-row items-center flex-col max-xl:w-full">
              {/* Short URL */}
              <span
                ref={shortedUrlRef}
                className="text-[var(--Cyan)] text-xl font-semibold max-xl:w-full"
              >
                {url.short_url}
              </span>
              <button
                ref={buttonRef}
                onClick={() => handleClick(index)}
                aria-label={`shorted-url-${index}`}
                className="max-xl:w-full px-4 py-2 rounded-lg bg-[var(--Cyan)] text-white font-semibold hover:bg-[var(--Cyan-light)] transition-all duration-300 active:bg-[var(--Dark-Violet)]"
              >
                Copy
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ShortedUrl;
