import React from "react";
import Social from "./Svgs/Social";
function Top() {
  return (
    <div className="hidden  sm:flex items-center sm:bg-[#F7F7F7] border-b-[1px] border-black  px-16 ">
      <div className=" w-full h-[54px] text-black  flex justify-between gap-8 py-3">
        <div className="w-[386px] h-[30px] flex gap-4 ">
          <div className="  h-[21px] border-r-[1px] border-[#676767]  font-normal text-[14px] flex justify-center items-center pr-4">
            Phone Number: 956 742 455 678
          </div>
          <div className="  h-[21px] font-normal text-[14px] flex justify-center items-center">
            Email:info@ddsgnr.com{" "}
          </div>
        </div>
        <div className="">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Top;
