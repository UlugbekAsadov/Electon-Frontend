"use client";

import React, { useState } from "react";
import { InputProps } from "reactstrap";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

interface IProps extends InputProps {
  className?: string;
  isError?: boolean;
}

export const Input = (props: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const getInputType = () => {
    if (props.type === "password") {
      return isVisible ? "text" : "password";
    }

    return props.type;
  };

  return (
    <div
      className={`${props.className} flex items-center px-5 border border-gray-500 rounded-lg`}
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
  );
};
