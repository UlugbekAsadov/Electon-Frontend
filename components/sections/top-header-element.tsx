import React from "react";
import LocationIcon from "@/assets/icons/location.svg";
import TrackIcon from "@/assets/icons/track.svg";
import Image from "next/image";
import Link from "next/link";

export const TopHeaderElement = () => {
  return (
    <div className="container py-6 flex flex-col items-end md:flex-row md:items-center justify-between font-normal text-sm">
      <p className="mb-4 md:mb-0 text-black">
        Need help? Call us: (+98) 0234 456 789
      </p>
      <ul className="flex justify-between items-center gap-9">
        <Link className="flex gap-5 items-center" href={"/"}>
          <Image src={LocationIcon} alt="Location icon" width={24} />
          <span className="text-black">Our store</span>
        </Link>

        <Link className="flex gap-5 items-center" href={"/"}>
          <Image src={TrackIcon} alt="Track icon" />
          <span className="text-black">Track your order</span>
        </Link>
      </ul>
    </div>
  );
};
