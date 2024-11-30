import React from "react";

function Layout2() {
  return (
    <div className="sm:block hidden sm:w-full sm:h-full w-[428px]  h-[451px]    gap-6 sm:gap-20 py-12 sm:py-[112px] px-6 sm:px-16">
      <div className="w-full h-[355px] sm:h-[264px] flex flex-col gap-6">
        {/* Header Section */}
        <div className="text-center text-black flex-col gap-6 sm:flex-col ">
          <h4 className="w-[380px] sm:w-full h-[42px] sm:h-[70px]  font-bold text-[32px]">
            Our Achievements
          </h4>
          <p className="sm:hidden  w-[362px] h-[81px] sm:w-full  font-normal text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          {/* P2*/}
          <p className="hidden sm:block  w-[362px] h-[81px] sm:w-full sm:h-[54px] font-normal text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        {/* Courses Section */}
        <div className="w-[380px] sm:w-full  h-[176px] flex flex-wrap  sm:flex-nowrap items-center gap-6 ">
          {/* Row 1 */}
          <div className="w-full flex justify-center items-center gap-4">
            <div className="w-full h-[60px] text-black flex flex-col gap-1 justify-center items-center text-center">
              <h6 className="font-bold text-[20px]">+200</h6>
              <p className="font-normal text-[16px]">Courses</p>
            </div>
            <div className="w-full h-[60px] text-black flex flex-col gap-1 justify-center items-center text-center">
              <h6 className="font-bold text-[20px]">50K</h6>
              <p className="font-normal text-[16px]">Mentors</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full flex  justify-center  items-center gap-4">
            <div className="w-full h-[60px] text-black flex flex-col gap-1 justify-center items-center text-center">
              <h6 className="font-bold text-[20px]">370K</h6>
              <p className="font-normal text-[16px]">Students</p>
            </div>
            <div className="w-full h-[60px] text-black flex flex-col gap-1 justify-center items-center text-center">
              <h6 className="font-bold text-[20px]">100+</h6>
              <p className="font-normal text-[16px]">Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout2;
