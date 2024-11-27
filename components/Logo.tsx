import React from "react";
import Image from "next/image";
function Logo() {
  return (
    <div className="relative w-[428px] h-[239.34px] py-12 pl-6  bg-white flex-col gap-6">
      <div className="w-[327px] h-[54px] font-bold text-[18px] text-black">
        Trusted by the world&apos;s best companies [social proof to build
        credibility]
      </div>
      {/* Logos */}
      <div className="w-[1,376px] h-[65.34px]  py-4 flex gap-4 ">
        <div className="w-[107.15px] h-[33.34px]">
          {" "}
          <div className="w-[106.81px] h-[33.36px] -mt-[0.02px] -ml-[0.02px]  ">
            <Image
              src="/1.png"
              alt="Sample Image"
              width={106.81}
              height={33.36}
            />
          </div>
        </div>

        <div className="w-[107.15px] h-[33.34px]">
          {" "}
          <div className="w-[106.81px] h-[33.36px] -mt-[0.02px] -ml-[0.02px]  ">
            <Image
              src="/2.png"
              alt="Sample Image"
              width={106.81}
              height={33.36}
            />
          </div>
        </div>

        <div className="w-[107.15px] h-[33.34px]">
          {" "}
          <div className="w-[106.81px] h-[33.36px] -mt-[0.02px] -ml-[0.02px]  ">
            <Image
              src="/3.png"
              alt="Sample Image"
              width={106.81}
              height={33.36}
            />
          </div>
        </div>

        <div className="w-[107.15px] h-[33.34px]">
          {" "}
          <div className="w-[106.81px] h-[33.36px] -mt-[0.02px] -ml-[0.02px]  ">
            <Image
              src="/4.png"
              alt="Sample Image"
              width={106.81}
              height={33.36}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
