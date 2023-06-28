import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AuthTypes } from "@/shared/enum";
import UserImg from "@/assets/image/Saly-14.png";

interface IProps {
  variant: AuthTypes;
}

const AuthContent = ({ variant }: IProps) => {
  return (
    <div className="relative">
      <h2 className="font-semibold text-2xl md:text-5xl mb-1 md:mb-4">
        {variant == AuthTypes.Login ? "Sign in" : "Sign up"} to
      </h2>
      <p className="font-medium text-xl md:text-4xl mb-8 md:mb-14">
        Lorem ipsum is simply
      </p>
      <p className="w-[308px] mb-14 md:mb-0">
        {variant == AuthTypes.Login
          ? "If you don’t have an account register"
          : "If you already have an account"}
        <br />
        You can{" "}
        <Link
          className="text-indigo-500"
          href={`/${variant == AuthTypes.Login ? "register" : "login"}`}
        >
          {variant == AuthTypes.Login ? "Register" : "Login"} here
        </Link>{" "}
        !
      </p>

      <Image
        className="absolute top-14 right-[-40%] hidden lg:block"
        src={UserImg}
        alt="User image"
        width={250}
      />
    </div>
  );
};

export default AuthContent;
