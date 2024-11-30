import React from "react";
import Logo from "@/components/Svgs/Logo";
import Social from "./Svgs/Social";

function Footer() {
  return (
    <div className="w-[428px] sm:w-full h-[1,411px] sm:p-20 px-6 py-12 text-black bg-white  flex flex-col sm:gap-20 gap-12  ">
      <div className="sm:w-full w-[380px] h-[1,315px]  flex flex-col gap-12  ">
        {/*News letter */}
        <div className="w-[380px] h-[261px] sm:flex-row flex sm:justify-between  items-center flex-col gap-6 sm:gap-[500px]  ">
          <div className="w-[287px] h-[91px]  flex flex-col gap-4  ">
            <h5 className="w-[287px]  h-[27px] font-semibold text-[18px] sm:text-left text-center">
              Subscribe to our newsletter
            </h5>
            <p className="w-[287px] sm:w-[700px] h-[48px] font-normal text-[18px] sm:text-left text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Actions*/}
          <div className="w-[380px]h-[146px] flex  flex-col gap-4 ">
            <div className="w-[380px]h-[112px] sm:w-[265px] sm:h-[48px] sm:flex-row flex flex-col gap-4">
              <div className="w-[380px]h-[48px]  sm:w-[265px] sm:h-[48px] rounded-[5px] border-[1px] border-black p-3 flex flex-col gap-2  ">
                <p className="w-[356px] h-[24px] font-normal text-[16px] text-[#505050]">
                  {" "}
                  Enter your email
                </p>
              </div>
              <button className="w-[380px]h-[48px]  sm:w-[119px] sm:h-[48px] rounded-[5px] border-[1px] border-black px-6 py-3 flex items-center flex-col gap-2  ">
                <p className="w-[71px] h-[24px] font-normal text-[16px] ">
                  {" "}
                  Subscribe
                </p>
              </button>
            </div>
            <p className="w-[380px] h-[18px]  sm:w-[400px]  font-normal text-[12px] sm:text-left text-center ">
              By subscribing you agree to with our{" "}
              <span className="underline">Privacy Policy</span>{" "}
            </p>
          </div>
        </div>
{/* Logo */}
          <div className="sm:-mb-[60px]">
            <Logo />
          </div>
        {/*Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Column1 */}
          <div className="w-[172px] h-[225px] flex flex-col justify-center items-center gap-4">
            <h5 className="w-[172px]  h-[24px] font-semibold text-[16px] text-center sm:text-left ">
              Courses
            </h5>
            <div className="w-[172px] h-[185px] font-normal text-[14px] text-center sm:text-left  ">
              <p className="py-2">Business</p>
              <p className="py-2">Development</p>
              <p className="py-2">Technology</p>
              <p className="py-2">Design</p>
              <p className="py-2">Programming</p>
            </div>
          </div>
          {/* Column3 */}
          <div className="w-[172px] h-[225px] flex flex-col justify-center items-center gap-4">
            <h5 className="w-[172px]  h-[24px] font-semibold text-[16px] text-center sm:text-left ">
              Resources
            </h5>
            <div className="w-[172px] h-[185px] font-normal text-[14px] text-center sm:text-left ">
              <p className="py-2">Career</p>
              <p className="py-2">Resume</p>
              <p className="py-2">Learning</p>
              <p className="py-2">Interview Preparation</p>
              <p className="py-2">Jobs</p>
            </div>
          </div>

          {/* Column4 */}
          <div className="w-[172px] h-[225px] flex flex-col justify-center items-center gap-4">
            <h5 className="w-[172px]  h-[24px] font-semibold text-[16px] text-center sm:text-left ">
              About Us
            </h5>
            <div className="w-[172px] h-[185px] font-normal text-[14px] text-center sm:text-left ">
              <p className="py-2">Contact</p>
              <p className="py-2">Help/Support</p>
              <p className="py-2">FAQ</p>
              <p className="py-2">Terms and Conditions </p>
              <p className="py-2">Partners</p>
            </div>
          </div>
        </div>
        {/*Credits */}
        <div className="w-full  h-[147px] flex flex-col gap-8 ">
          <div className="w-full sm:h-0 h-[147px] border-t-[1px] border-black"></div>
          {/* Row */}
          <div className=" flex  sm:flex-row flex-col  gap-6">
            <div className="w-full sm:h-0 h-[66px] flex  sm:flex-row flex-col sm:justify-start justify-center items-center gap-6 font-normal text-[14px] text-center ">
              <p>2023 Ddsgnr. All right reserved.</p>{" "}
              <div className="flex justify-center items-center gap-6 underline">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies Settings</p>
              </div>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
