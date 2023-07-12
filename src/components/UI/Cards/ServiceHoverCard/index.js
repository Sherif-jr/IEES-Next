import Image from "next/image";
import Link from "next/link";
import React from "react";

const SerivceHoverCard = ({ name, description, bgLink, all }) => {
  const title = name.split("-").join(" ").toUpperCase();
  return (
    <div
      className={`bg-[#ffffffc3] rounded-3xl shadow-Card group relative h-[500px] flex flex-col p-8 ${
        all ? "max-w-[400px]" : "max-w-[450px]"
      } w-full items-center justify-start overflow-hidden`}
    >
      <Image
        fill
        src={bgLink}
        alt=""
        className="object-cover z-[-1] group-hover:scale-105 transition duration-300"
      />
      <h3 className="text-[#004c52] text-4xl text-center translate-y-[calc(250px-1em)] font-bold transition-all duration-[350ms] ease-out group-hover:scale-50 group-hover:translate-y-0">
        {title}
      </h3>
      <div className="absolute invisible min-h-[70px] flex flex-col w-full justify-between h-[60%] px-6 py-8 translate-y-full bottom-0 group-hover:translate-y-0 group-hover:visible transition-all duration-300 shadow-Card bg-[#ffffffcc] ">
        <div className="flex items-start justify-start w-full h-[70%]">
          <span className="font-light text-left tracking-wide">
            {description.length > 260
              ? `${description.substring(0, 220)}...`
              : description}
          </span>
        </div>
        <div className="flex items-end justify-center w-full mt-4">
          <Link
            href={`/services/${name}`}
            className="text-white mt-auto px-8 bg-black py-4 justify-self-end transition-all duration-300 ease-out hover:bg-[#82bb27]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SerivceHoverCard;
