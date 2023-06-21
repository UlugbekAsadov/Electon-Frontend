import Link from "next/link";
import React from "react";

// import image
import UserImg from "@/assets/image/Saly-14.png";
import Image from "next/image";

const LoginContent = () => {
  return (
    <div className="relative">
      <h2 className="font-semibold text-2xl md:text-5xl mb-1 md:mb-4">
        Sign in to
      </h2>
      <p className="font-medium text-xl md:text-4xl mb-8 md:mb-14">
        Lorem ipsum is simply
      </p>
      <p className="w-[308px] mb-14 md:mb-0">
        If you don’t have an account register You can{" "}
        <Link className="text-blue-700" href={"/"}>
          Register here
        </Link>{" "}
        !
      </p>

      <Image
        className="absolute top-24 right-[-40%] hidden lg:block"
        src={UserImg}
        alt="User image"
        width={250}
      />
    </div>
  );
};

export default LoginContent;
