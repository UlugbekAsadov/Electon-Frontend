import React from "react";
import LocationIcon from "@/assets/icons/location.svg";
import TrackIcon from "@/assets/icons/track.svg";
import Image from "next/image";
import Link from "next/link";

const TopHeaderElement = () => {
  return (
    <div className="container mx-auto py-6 text-black flex flex-col items-end md:flex-row md:items-center justify-between font-normal text-sm">
      <span className="mb-4 md:mb-0">
        Need help? Call us: (+98) 0234 456 789
      </span>
      <ul className="flex justify-between items-center gap-9">
        <Link className="flex gap-5 items-center" href={"/"}>
          <Image src={LocationIcon} alt="Location icon" width={24} />
          <span>Our store</span>
        </Link>

        <Link className="flex gap-5 items-center" href={"/"}>
          <Image src={TrackIcon} alt="Track icon" />
          <span>Track your order</span>
        </Link>
      </ul>
    </div>
  );
};

export default TopHeaderElement;
