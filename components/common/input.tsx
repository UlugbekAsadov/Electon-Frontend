"use client";

import React, { useState } from "react";
import { InputProps } from "reactstrap";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

interface IProps extends InputProps {
  className?: string;
  isError?: boolean;
  errorText?: string;
}

export const Input = (props: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const getInputType = () => {
    if (props.type === "password") {
      return isVisible ? "text" : "password";
    }

    return props.type;
  };

  const getStyles = () => {
    if (props.isError) {
      return `focus:border-red-500 focus-within:border-red-500 focus-within:shadow-primaryInputError`;
    }

    return `focus:border-orange-500 focus-within:border-orange-500 focus-within:shadow-primaryInput`;
  };

  return (
    <div>
      <div
        className={`${props.className} ${getStyles()} ${
          props.isError
            ? "border-red-500 opacity-100"
            : "border-gray-500 border-opacity-50"
        } ${
          props.disabled && (
            "opacity-40 pointer-events-none"
          )
        } flex items-center px-5 border-2 transition-all ease-in-out rounded-xl focus-within:border-opacity-100`}
      >
        <input
          {...props}
          type={getInputType()}
          className="focus:outline-none outline-none  w-full rounded-lg py-5"
        />
        {props.type === "password" && (
          <div className="ml-2">
            {isVisible ? (
              <EyeOffIcon
                onClick={setIsVisible.bind(null, false)}
                width={24}
                className="cursor-pointer"
              />
            ) : (
              <EyeIcon
                onClick={setIsVisible.bind(null, true)}
                width={24}
                className="cursor-pointer"
              />
            )}
          </div>
        )}
      </div>
      <label
        htmlFor={props.id}
        className={`text-red-500 text-xs ml-2 opacity-0 ${
          props.isError && "opacity-100"
        }`}
      >
        {props.errorText}
      </label>
    </div>
  );
};
