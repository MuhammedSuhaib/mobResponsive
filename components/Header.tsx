import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="w-[428px] h-[780px]">
      {/* Column */}
      <div className="h-[390px] px-6 py-[36px] flex flex-col gap-6">
        {/* Content */}
        <div className="h-[174px] w-[380px] flex flex-col gap-6">
          <h3 className="font-bold h-[96px] w-[380px] text-[#000000] text-4xl">
            Learn new skills online with ease
          </h3>
          <p className="text-[#000000] font-normal w-[380px] h-[54px] text-lg">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
        {/* Actions */}
        <div className="w-[358px] h-[64px] pt-4 flex gap-4">
          {/* Button 1 */}
          <div className="w-[178px] h-[48px] rounded-[5px] border-[1px] border-black px-6 py-3 bg-black">
            <div className="w-[130px] h-6 text-white font-normal text-base">
              Start learning now
            </div>
          </div>
          {/* Button 2 */}
          <div className="w-[164px] h-[48px] rounded-[5px] border-[1px] border-black px-6 py-3">
            <div className="w-[116px] h-6 text-black font-normal text-base">
              Explore Courses
            </div>
          </div>
        </div>
        {/* Image  */}
        <div className="h-[390px] w-[428px] relative">
          <Image
            src="/place.jfif"
            alt="Sample Image"
            width={428}
            height={390}
            className="w-[428px] h-[390px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
