import React from "react";
import Logo from "@/components/Svgs/Logo";

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
              <div className="flex flex-col justify-center items-center ">
                <svg
                  width="132"
                  height="25"
                  viewBox="0 0 132 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 6.22559H13.5C12.9477 6.22559 12.5 6.67331 12.5 7.22559V10.2256H16.5C16.6137 10.2231 16.7216 10.276 16.7892 10.3675C16.8568 10.459 16.8758 10.5776 16.84 10.6856L16.1 12.8856C16.0318 13.0875 15.8431 13.224 15.63 13.2256H12.5V20.7256C12.5 21.0017 12.2761 21.2256 12 21.2256H9.5C9.22386 21.2256 9 21.0017 9 20.7256V13.2256H7.5C7.22386 13.2256 7 13.0017 7 12.7256V10.7256C7 10.4495 7.22386 10.2256 7.5 10.2256H9V7.22559C9 5.01645 10.7909 3.22559 13 3.22559H16.5C16.7761 3.22559 17 3.44945 17 3.72559V5.72559C17 6.00173 16.7761 6.22559 16.5 6.22559Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M52 3.22559H44C41.2386 3.22559 39 5.46417 39 8.22559V16.2256C39 18.987 41.2386 21.2256 44 21.2256H52C54.7614 21.2256 57 18.987 57 16.2256V8.22559C57 5.46417 54.7614 3.22559 52 3.22559ZM55.25 16.2256C55.2445 18.0182 53.7926 19.4701 52 19.4756H44C42.2074 19.4701 40.7555 18.0182 40.75 16.2256V8.22559C40.7555 6.43294 42.2074 4.98108 44 4.97559H52C53.7926 4.98108 55.2445 6.43294 55.25 8.22559V16.2256ZM52.75 8.47559C53.3023 8.47559 53.75 8.02787 53.75 7.47559C53.75 6.92331 53.3023 6.47559 52.75 6.47559C52.1977 6.47559 51.75 6.92331 51.75 7.47559C51.75 8.02787 52.1977 8.47559 52.75 8.47559ZM48 7.72559C45.5147 7.72559 43.5 9.74031 43.5 12.2256C43.5 14.7109 45.5147 16.7256 48 16.7256C50.4853 16.7256 52.5 14.7109 52.5 12.2256C52.5027 11.0313 52.0294 9.88516 51.1849 9.04067C50.3404 8.19618 49.1943 7.72293 48 7.72559ZM45.25 12.2256C45.25 13.7444 46.4812 14.9756 48 14.9756C49.5188 14.9756 50.75 13.7444 50.75 12.2256C50.75 10.7068 49.5188 9.47559 48 9.47559C46.4812 9.47559 45.25 10.7068 45.25 12.2256Z"
                    fill="black"
                  />
                  <path
                    d="M92.9728 6.94299C92.5084 7.56251 91.947 8.10292 91.3103 8.54335C91.3103 8.70518 91.3103 8.86701 91.3103 9.03784C91.3154 11.9767 90.1415 14.7947 88.0518 16.8601C85.962 18.9255 83.1312 20.0655 80.1941 20.0245C78.496 20.0302 76.8197 19.6425 75.2964 18.8917C75.2143 18.8558 75.1613 18.7746 75.1616 18.6849V18.586C75.1616 18.4569 75.2662 18.3523 75.3953 18.3523C77.0644 18.2972 78.674 17.7185 79.9963 16.698C78.4855 16.6675 77.1262 15.7725 76.5006 14.3963C76.469 14.3212 76.4788 14.2349 76.5266 14.1688C76.5743 14.1027 76.653 14.0663 76.7343 14.0727C77.1934 14.1188 77.6572 14.0761 78.1002 13.9468C76.4324 13.6006 75.1792 12.216 74.9999 10.5213C74.9935 10.44 75.0299 10.3613 75.096 10.3135C75.1621 10.2658 75.2482 10.2559 75.3234 10.2876C75.7709 10.4851 76.2541 10.5891 76.7432 10.5932C75.2818 9.63405 74.6506 7.80964 75.2066 6.15181C75.2639 5.99072 75.4018 5.87171 75.5695 5.83853C75.7372 5.80534 75.91 5.86287 76.0243 5.98998C77.9964 8.08884 80.706 9.33955 83.5819 9.47838C83.5083 9.18444 83.4721 8.88235 83.4741 8.57931C83.501 6.99031 84.4842 5.5748 85.9634 4.99546C87.4425 4.41613 89.1249 4.78762 90.223 5.93603C90.9714 5.79344 91.695 5.54204 92.3707 5.1898C92.4202 5.1589 92.483 5.1589 92.5325 5.1898C92.5634 5.23932 92.5634 5.30211 92.5325 5.35163C92.2052 6.10111 91.6523 6.72971 90.9509 7.14978C91.5651 7.07855 92.1685 6.93366 92.7482 6.71823C92.797 6.68501 92.8611 6.68501 92.9099 6.71823C92.9508 6.73693 92.9814 6.7727 92.9935 6.81601C93.0056 6.85932 92.998 6.90577 92.9728 6.94299Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M113 3.22559H127C128.105 3.22559 129 4.12102 129 5.22559V19.2256C129 20.3302 128.105 21.2256 127 21.2256H113C111.895 21.2256 111 20.3302 111 19.2256V5.22559C111 4.12102 111.895 3.22559 113 3.22559ZM116 18.2256C116.276 18.2256 116.5 18.0017 116.5 17.7256V10.7256C116.5 10.4495 116.276 10.2256 116 10.2256H114.5C114.224 10.2256 114 10.4495 114 10.7256V17.7256C114 18.0017 114.224 18.2256 114.5 18.2256H116ZM115.25 9.22559C114.422 9.22559 113.75 8.55402 113.75 7.72559C113.75 6.89716 114.422 6.22559 115.25 6.22559C116.078 6.22559 116.75 6.89716 116.75 7.72559C116.75 8.55402 116.078 9.22559 115.25 9.22559ZM125.5 18.2256C125.776 18.2256 126 18.0017 126 17.7256V13.1256C126.033 11.5364 124.858 10.1801 123.28 9.98559C122.177 9.88484 121.108 10.4 120.5 11.3256V10.7256C120.5 10.4495 120.276 10.2256 120 10.2256H118.5C118.224 10.2256 118 10.4495 118 10.7256V17.7256C118 18.0017 118.224 18.2256 118.5 18.2256H120C120.276 18.2256 120.5 18.0017 120.5 17.7256V13.9756C120.5 13.1472 121.172 12.4756 122 12.4756C122.828 12.4756 123.5 13.1472 123.5 13.9756V17.7256C123.5 18.0017 123.724 18.2256 124 18.2256H125.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
