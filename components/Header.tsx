import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between">
      {/* Content */}
      <div className="px-6 py-[36px] w-[380px] sm:w-[50%] sm:py-[250px] sm:px-[60px] flex flex-col gap-6">
        <h3 className="font-bold h-[96px] w-[380px] text-[#000000] text-4xl">
          Learn new skills online with ease
        </h3>
        <p className="text-[#000000] font-normal w-[380px] h-[54px] text-lg">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>

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
      </div>

      {/* Image */}
      <div className="h-[390px] w-[428px] sm:w-[50%] sm:h-auto sm:flex sm:justify-center">
        {/* Small screen image */}
        <Image
          src="/place.jpg"
          alt="Sample Image for Small Screens"
          width={428}
          height={390}
          className="sm:hidden"
        />
        {/* Large screen image */}
        <Image
          src="/place.jfif"
          alt="Sample Image for Large Screens"
          width={640}
          height={800}
          className="hidden sm:block"
        />
      </div>
    </div>
  );
}

export default Header;

