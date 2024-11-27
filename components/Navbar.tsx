import React from "react";
import Logo from '@/components/Svgs/Logo'
function Navbar() {
  return (
    /*Navbar/4/ */ <nav className="w-[428px] h-[72px]">
      {/* Container*/}
      <div className="bg-[#FFFFFF] w-[428px] h-[72px] p-[24px] border-b-[1px] border-black">
        {/* Container*/}
        <div className="w-[380px] h-[48px] flex ml-[32px]">
          {/* Column left*/}
          <div className="w-[300px] h-[41px]">
            {/* Ddsgnr Lib*/}{" "}
            <div className="px-[29] w-[130.6px] h-[41px]">
              {/* Ddsgnr Themes*/}
             <Logo/>
              {/* Ddsgnr Themes*/}
            </div>
            {/* Ddsgnr Lib*/}
          </div>
          {/* Column left*/}

          {/* Column right*/}
          <div className="pt-[7px] ">
            <div className=" pb-[18px]">
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          {/* Column right*/}
        </div>
        {/* Container*/}
      </div>
      {/* Container*/}
    </nav> /*Navbar/4/ */
  );
}

export default Navbar;
