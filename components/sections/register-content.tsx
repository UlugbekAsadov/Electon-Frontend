import Link from "next/link";
import React from "react";
import Image from "next/image";

import UserImg from "@/assets/image/Saly-14.png";

const RegisterContent = () => {
  return (
    <div className="relative">
      <h2 className="font-semibold text-2xl md:text-5xl mb-1 md:mb-4">
        Sign up to
      </h2>
      <p className="font-medium text-xl md:text-4xl mb-8 md:mb-14">
        Lorem ipsum is simply
      </p>
      <p className="w-[308px] mb-14 md:mb-0">
        If you don’t have an account register You can{" "}
        <Link className="text-blue-700" href={"/register"}>
          Login here
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

export default RegisterContent;
