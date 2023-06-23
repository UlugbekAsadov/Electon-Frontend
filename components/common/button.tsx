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
        return "bg-orange-500 text-white";
      case "SECONDARY":
        return "bg-blue-600 text-white";
      case "OUTLINE":
        return "border border-blue-600 text-blue-600";
      case "DANGER":
        return "border border-red-500 text-red-500";
    }
  };

  return (
    <button
      className={`${getButtonStyles()} ${className}  py-3 px-7 md:py-5 md:px-14 rounded-3xl md:text-base text-sm font-bold cursor-pointer ${
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
