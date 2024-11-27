import React from "react";
import Logo from "@/components/Svgs/Logo";
import Social from "./Svgs/Social";

function Footer() {
  return (
    <div className="w-[428px] h-[1,411px] px-6 py-12 text-black bg-white  flex flex-col gap-12  ">
      <div className="w-[380px] h-[1,315px]  flex flex-col gap-12  ">
        {/*News letter */}
        <div className="w-[380px] h-[261px]  flex  items-center flex-col gap-6  ">
          <div className="w-[287px] h-[91px]  flex flex-col gap-4  ">
            <h5 className="w-[287px]  h-[27px] font-semibold text-[18px] text-center">
              Subscribe to our newsletter
            </h5>
            <p className="w-[287px]  h-[48px] font-normal text-[18px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Actions*/}
          <div className="w-[380px]h-[146px] flex flex-col gap-4 ">
            <div className="w-[380px]h-[112px] flex flex-col gap-4 ">
              <div className="w-[380px]h-[48px] rounded-[5px] border-[1px] border-black p-3 flex flex-col gap-2  ">
                <p className="w-[356px] h-[24px] font-normal text-[16px] text-[#505050]">
                  {" "}
                  Enter your email
                </p>
              </div>
              <button className="w-[380px]h-[48px] rounded-[5px] border-[1px] border-black px-6 py-3 flex items-center flex-col gap-2  ">
                <p className="w-[71px] h-[24px] font-normal text-[16px] ">
                  {" "}
                  Subscribe
                </p>
              </button>
            </div>
            <p className="w-[380px] h-[18px] font-normal text-[12px] text-center ">
              By subscribing you agree to with our{" "}
              <span className="underline">Privacy Policy</span>{" "}
            </p>
          </div>
        </div>

        {/*Links */}
        <div className="flex flex-col justify-center items-center gap-8">
          {/* Column1 */}
          <div>
            {" "}
            <Logo />
          </div>
          {/* Column2 */}
          <div className="w-[172px] h-[225px] flex flex-col justify-center items-center gap-4">
            <h5 className="w-[172px]  h-[24px] font-semibold text-[16px] text-center ">
              Courses
            </h5>
            <div className="w-[172px] h-[185px] ">
              <p className="py-2 font-normal text-[14px] text-center  ">
                Business
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Development
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Technology
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Design
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Programming
              </p>
            </div>
          </div>

          {/* Column3 */}
          <div className="w-[172px] h-[225px] flex flex-col justify-center items-center gap-4">
            <h5 className="w-[172px]  h-[24px] font-semibold text-[16px] text-center ">
              Resources
            </h5>
            <div className="w-[172px] h-[185px] ">
              <p className="py-2 font-normal text-[14px] text-center  ">
                Career
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Resume
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Learning
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Interview Preparation
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">Jobs</p>
            </div>
          </div>

          {/* Column4 */}
          <div className="w-[172px] h-[225px] flex flex-col justify-center items-center gap-4">
            <h5 className="w-[172px]  h-[24px] font-semibold text-[16px] text-center ">
              About Us
            </h5>
            <div className="w-[172px] h-[185px] ">
              <p className="py-2 font-normal text-[14px] text-center  ">
                Contact
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Help/Support
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">FAQ</p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Terms and Conditions{" "}
              </p>
              <p className="py-2 font-normal text-[14px] text-center  ">
                Partners
              </p>
            </div>
          </div>

          {/*Credits */}
          <div className="w-[380px] h-[147px] flex flex-col gap-8 ">
            <div className="w-[380px] h-[147px] border-t-[1px] border-black"></div>
            {/* Row */}
            <div className="w-[380px] h-[114px] flex flex-col  gap-6">
              <div className="w-[380px] h-[66px] flex flex-col justify-center items-center gap-6 font-normal text-[14px] text-center ">
                <p>2023 Ddsgnr. All right reserved.</p>{" "}
                <div className="flex justify-center items-center gap-6 underline">
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                  <p>Cookies Settings</p>
                </div>
              </div>
              <Social/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
