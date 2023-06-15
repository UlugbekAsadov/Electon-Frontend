"use strick";

import React from "react";

interface IProps {
  onClick?: () => void;
  title: string;
  variant: "PRIMARY" | "SECONDARY" | "OUTLINE" | "DANGER";
}

export const Button = ({ variant, onClick, title }: IProps) => {
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
      className={`${getButtonStyles()} py-3 px-7 md:py-5 md:px-14 rounded-3xl md:text-base text-sm font-bold cursor-pointer`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
