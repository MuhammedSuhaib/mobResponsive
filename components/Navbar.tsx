import React from "react";
import Logo from "@/components/Svgs/Logo"; // Adjust path if needed

function Navbar() {
  return (
    <nav className="w-full h-[72px]">
      {/* Navbar container */}
      <div className="bg-white sm:bg-[#F7F7F7]  w-full h-full p-6 sm:px-16 flex justify-center items-center  border-solid border-b border-[#676767]">
        {/* Inner container */}
        <div className="w-full h-[48px] flex justify-between  sm:justify-between items-center">
          {/* Left column (Logo) */}
          <div className="w-[130px] h-[41px]">
            <Logo />
          </div>

          {/* Right column Desktop/Tablet*/}
          <div className="hidden text-black sm:flex items-center bg-white px-[10px] gap-8">
            <div className=" border-b-[1px] border-black ">Home</div>
            <div>Courses</div>
            <div>Services</div>
            <div>Achievement</div>
            <div>About Us</div>
            <div>Testimonial</div>

            <button className="text-black rounded-[5px] border-[1px] border-black px-5 py-2">
              Login
            </button>
            <button className="text-white  bg-black rounded-[5px] border-[1px] border-black px-5 py-2">
              Signup
            </button>
          </div>

          {/* Hamburger menu for small screens */}
          <div className="sm:hidden">
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
      </div>
    </nav>
  );
}

export default Navbar;
