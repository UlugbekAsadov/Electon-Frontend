"use client";

import React from "react";
import LoaderIcon from "@/assets/icons/loader.svg";
import Image from "next/image";
import { ButtonProps } from "reactstrap";

interface IProps extends ButtonProps {
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
  ...props
}: IProps) => {
  const isButtonDisabled = isLoading || props.disabled;

  const getButtonStyles = () => {
    switch (variant) {
      case "PRIMARY":
        return `bg-orange-500 text-white ${
          !isButtonDisabled &&
          "hover:bg-orange-600 active:bg-orange-700 active:shadow-primaryInput"
        }`;
      case "SECONDARY":
        return `bg-cyan-600 text-white ${
          !isButtonDisabled &&
          "hover:bg-cyan-700 active:bg-cyan-800 active:shadow-secondary"
        }`;
      case "OUTLINE":
        return `border border-cyan-600 text-cyan-600 ${
          !isButtonDisabled && "active:shadow-secondary"
        }`;
      case "DANGER":
        return `border border-red-500 text-red-500 ${
          !isButtonDisabled && "active:shadow-primaryInputError"
        }`;
    }
  };

  return (
    <button
      className={`${getButtonStyles()} ${className} transition py-3 px-7 md:py-5 md:px-14 rounded-xl md:text-base text-sm font-bold  ${
        isButtonDisabled ? "opacity-50 cursor-default" : "cursor-pointer"
      }`}
      onClick={onClick}
      disabled={isButtonDisabled}
    >
      {isLoading ? (
        <Image className="mx-auto" src={LoaderIcon} alt="Loader Icon" width={24} height={24} />
      ) : (
        title
      )}
    </button>
  );
};
