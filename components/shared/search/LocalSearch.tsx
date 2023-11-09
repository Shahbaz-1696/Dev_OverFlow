"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  placeholder: string;
  route: string;
  imgSrc: string;
  otherClasses?: string;
  iconPosition: string;
}

const LocalSearch = ({
  placeholder,
  route,
  imgSrc,
  otherClasses,
  iconPosition,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="searchIcon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="no-focus placeholder paragraph-regular background-light800_darkgradient border-none shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="searchIcon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
