import React from "react";
import location from "@/assets/icons/location.svg";
import track from "@/assets/icons/track.svg";
import Image from "next/image";

const topHeaderElement = () => {
  return (
    <div className="container mx-auto py-6 text-black-500 flex flex-col items-end lg:flex-row lg:items-center justify-between font-normal text-sm">
      <span className="mb-4 lg:mb-0">
        Need help? Call us: (+98) 0234 456 789
      </span>
      <ul className="flex justify-between items-center gap-9">
        <li className="flex gap-5 items-center">
          <Image src={location} alt="Location icon" width={24} />
          <span>Our store</span>
        </li>

        <li className="flex gap-5 items-center">
          <Image src={track} alt="Track icon" />
          <span>Track your order</span>
        </li>
      </ul>
    </div>
  );
};

export default topHeaderElement;
