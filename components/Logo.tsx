import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="py-12 sm:py-20 px-6 sm:px-16 bg-white sm:bg-[#F7F7F7] flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-16">
      {/* Text */}
      <div className="w-full sm:w-[50%]">
        <div className="sm:hidden w-[327px] h-[54px] font-bold text-[18px] text-black">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </div>
        <div className="hidden sm:block w-[320px] h-[68px] font-bold text-[18px] text-black">
          Trusted by 2000+ companies worldwide.
        </div>
      </div>

      {/* Logos */}
      <div className="w-full  sm:flex sm:gap-[19.12px] flex gap-4 justify-center ">
        <div className="w-ful h-[33.36px]">
          <Image
            src="/1.png"
            alt="Logo 1"
            width={106.81}
            height={33.36}
            className="object-contain"
          />
        </div>
        <div className="w-[106.81px] h-[33.36px]">
          <Image
            src="/2.png"
            alt="Logo 2"
            width={106.81}
            height={33.36}
            className="object-contain"
          />
        </div>
        <div className="w-[106.81px] h-[33.36px]">
          <Image
            src="/3.png"
            alt="Logo 3"
            width={106.81}
            height={33.36}
            className="object-contain"
          />
        </div>
        <div className="w-[106.81px] h-[33.36px]">
          <Image
            src="/4.png"
            alt="Logo 4"
            width={106.81}
            height={33.36}
            className="object-contain"
          />
        </div>
        <div className="w-[106.81px] h-[33.36px]">
          <Image
            src="/5.png"
            alt="Logo 5"
            width={106.81}
            height={33.36}
            className="object-contain"
          />
        </div>
        <div className="w-[106.81px] h-[33.36px]">
          <Image
            src="/6.png"
            alt="Logo 6"
            width={106.81}
            height={33.36}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
