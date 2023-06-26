"use client";

import React from "react";
import LoaderIcon from "@/assets/icons/loader.svg";
import Image from "next/image";

interface IProps {
  onClick?: () => void;
  title: string;
  variant: "PRIMARY" | "SECONDARY" | "OUTLINE" | "DANGER";
  className?: string;
  isLoading?: boolean;
}

export const Button = ({
  variant,
  onClick,
  title,
  className,
  isLoading,
}: IProps) => {
  const getButtonStyles = () => {
    switch (variant) {
      case "PRIMARY":
        return "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 active:shadow-primaryInput";
      case "SECONDARY":
        return "bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800 active:shadow-secondary";
      case "OUTLINE":
        return "border border-cyan-600 text-cyan-600 active:shadow-secondary";
      case "DANGER":
        return "border border-red-500 text-red-500 active:shadow-primaryInputError ";
    }
  };

  return (
    <button
      className={`${getButtonStyles()} ${className} transition  py-3 px-7 md:py-5 md:px-14 rounded-xl md:text-base text-sm font-bold cursor-pointer ${
        isLoading && "opacity-50 cursor-default"
      }`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Image className="mx-auto" src={LoaderIcon} alt="Loader Icon" />
      ) : (
        title
      )}
    </button>
  );
};
