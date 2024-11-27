import React from "react";

function Layout() {
  return (
    <div
      className="w-[428px] h-[451px] flex gap-6 py-12 px-6"
    >
      <div className="w-[380px] h-[355px] flex flex-col gap-6">
        {/* Header Section */}
        <div className="text-center text-black flex-col gap-6">
          <h4 className="w-[380px] h-[42px] font-bold text-[32px]">
            Our Achievements
          </h4>
          <p className="w-[362px] h-[81px] font-normal mt-6 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Courses Section */}
<div className="w-[380px] h-[176px] flex flex-wrap items-center gap-6">
  {/* Row 1 */}
  <div className="w-full flex justify-center items-center gap-4">
    <div className="w-[182px] h-[60px] text-black flex flex-col gap-1 justify-center items-center text-center">
      <h6 className="font-bold text-[20px]">+200</h6>
      <p className="font-normal text-[16px]">Courses</p>
    </div>
    <div className="w-[182px] h-[60px] text-black flex flex-col gap-1 justify-center items-center text-center">
      <h6 className="font-bold text-[20px]">50K</h6>
      <p className="font-normal text-[16px]">Mentors</p>
    </div>
  </div>

  {/* Row 2 */}
  <div className="w-full flex justify-center items-center gap-4">
    <div className="w-[182px] h-[60px] text-black flex flex-col gap-1 justify-center items-center text-center">
      <h6 className="font-bold text-[20px]">370K</h6>
      <p className="font-normal text-[16px]">Students</p>
    </div>
    <div className="w-[182px] h-[60px] text-black flex flex-col gap-1 justify-center items-center text-center">
      <h6 className="font-bold text-[20px]">100+</h6>
      <p className="font-normal text-[16px]">Recognition</p>
    </div>
    </div>
    </div></div>
    </div>

  );
}

export default Layout;
