"use client"
// Import statements
import Image from "next/image";
import React from "react";
import bg_boost from "@/public/images/bg-shorten-desktop.svg";
import { Button } from "@mui/material";
import Shortedurl from "./Shortedurl";
import { useForm } from "react-hook-form";
import shortenUrl from "../services/shortener";
import { useDispatch, useSelector } from "react-redux";
import { addUrls } from "../context/Slice/urlsSlice";
import { RootState } from "../context/Store";
import Swal from "sweetalert2";

// Error Alert Configuration
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

const UrlShorter = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const urls = useSelector((state: RootState) => state.Urls);

  const onSubmit = async (data: any) => {
    if (data.link) {
      try {
        const response = await shortenUrl(data.link);
        dispatch(
          addUrls({
            long_url: response.long_url,
            short_url: response.short_url,
          }),
        );
        Toast.fire({
          icon: "success",
          title: "Successfully Shortened the URL",
        });
      } catch (err: any) {
        Toast.fire({
          icon: "error",
          title: err.message,
        });
      }
    }
  };

  return (
    <div className="container mx-auto mt-24 xl:px-6 flex flex-col">
      <div className="xl:p-12 p-6 m-6 xl:-translate-y-24 -translate-y-[74px] rounded-md overflow-hidden relative bg-[var(--Dark-Violet)]">
        <Image
          src={bg_boost}
          alt=""
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center gap-4 xl:flex-row flex-col"
        >
          {/* Input Shorturl */}
          <input
            type="text"
            {...register("link", {
              required: true,
              pattern:
                /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
            })}
            className={`rounded-md p-4 w-full border-none outline-none ${
              errors.link
                ? "border border-red-500 outline-red-500 placeholder:text-red-200"
                : ""
            }`}
            placeholder="Shorten a link here..."
            aria-invalid={errors.link ? "true" : "false"}
          />
          {errors.link && (
            <span className="absolute xl:bottom-4 bottom-[96px] xl:left-[45px] left-[24px] text-[var(--Red)] text-sm">
              Please enter a valid link.
            </span>
          )}
          <Button
            type="submit"
            className={`xl:w-[155px] w-full p-4 bg-[var(--Cyan)] text-white hover:bg-blue-400 capitalize ${
              errors.link ? "max-md:mt-[35px]" : ""
            }`}
          >
            Shorten it!
          </Button>
        </form>
      </div>

      {/* Shorted URLs */}
      {urls.length > 0 && <Shortedurl />}
    </div>
  );
};

export default UrlShorter;
