import React from "react";
import Image from "next/image";
import Stars from "./Svgs/Stars";
function Testimonial() {
  return (
    <div className="w-[428px] sm:w-full h-full px-6 py-12 flex flex-col gap-12 sm:gap-20 sm:bg-[#F7F7F7] bg-white ">
      {/*Section */}
      <div className="w-[361px] sm:w-full h-[120px] flex flex-col gap-6 text-black ">
        <h4 className=" sm:hidden h-[42px] font-bold text-[32px]   text-center">
          What Our Student Say
        </h4>

        <h4 className="hidden sm:block h-[58px] font-bold text-[32px] sm:text-left text-center">
          Customer testimonials
        </h4>
        <p className="w-[361px] sm:w-full h-[54px] font-normal text-[18px] sm:text-left text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/*Content */}
      {/* 1 */}
      <div className="w-[380px] h-[417.89px] flex sm:flex-row  flex-col gap-12">
        <div className="w-[380px] h-[321.89px] flex flex-col gap-8">
          <div className="w-[380px] h-[321.89px] border-[1px] border-black p-8 flex flex-col gap-6">
            <Stars/>

            <div className="w-[316px] h-[215px] flex flex-col gap-6 ">
              <p className="w-[361px] h-[135px] font-normal text-[18px] ">
                &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              {/*AVATAR*/}

              <div className="w-[254px] h-[56px] flex flex-col gap-5 flex-wrap ">
                <Image
                  src="/pfp3.png"
                  alt="pfp3"
                  width={56}
                  height={56}
                  className="rounded-full "
                />
                <div className="w-[178px] h-[48px] flex flex-col ">
                  <p className="sm:hidden w-auto h-[24px] font-semibold text-[16px]">
                    Wade Warren
                  </p>
                  <p className="hidden sm:block w-auto h-[24px] font-semibold text-[16px]">
                  James Nduku                  </p>
                  <p className="sm:hidden w-[178px] h-[24px] font-normal text-[16px]">
                    Position, Company name
                  </p>
                  <p className="hidden sm:block w-[178px] h-[24px] font-normal text-[16px]">
                  Software Developer                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="hidden sm:block w-[380px] h-[321.89px]  flex-col gap-8">
          <div className="w-[380px] h-[321.89px] border-[1px] border-black p-8 flex flex-col gap-6">
          <Stars/>


            <div className="w-[316px] h-[215px] flex flex-col gap-6 ">
              <p className="w-[361px] h-[135px] font-normal text-[18px] ">
                &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              {/*AVATAR*/}

              <div className="w-[254px] h-[56px] flex flex-col gap-5 flex-wrap ">
                <Image
                  src="/pfp1.png"
                  alt="pfp1"
                  width={56}
                  height={56}
                  className="rounded-full "
                />
                <div className="w-[178px] h-[48px] flex flex-col ">
                  <p className="w-auto h-[24px] font-semibold text-[16px]">
                  Erick Kipkemboi                  </p>
                  <p className="w-[178px] h-[24px] font-normal text-[16px]">
                  Scrum Master                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className=" hidden sm:block w-[380px] h-[321.89px]  flex-col gap-8">
          <div className="w-[380px] h-[321.89px] border-[1px] border-black p-8 flex flex-col gap-6">
          <Stars/>


            <div className="w-[316px] h-[215px] flex flex-col gap-6 ">
              <p className="w-[361px] h-[135px] font-normal text-[18px] ">
                &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              {/*AVATAR*/}

              <div className="w-[254px] h-[56px] flex flex-col gap-5 flex-wrap ">
                <Image
                  src="/pfp6.png"
                  alt="pfp6"
                  width={56}
                  height={56}
                  className="rounded-full "
                />
                <div className="w-[178px] h-[48px] flex flex-col ">
                  <p className="w-auto h-[24px] font-semibold text-[16px]">
                  Stephen Kerubo                  </p>
                  <p className="w-[178px] h-[24px] font-normal text-[16px]">
                  UI/UX Designer                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:hidden w-[380px] h-[48px] p-1">
        <svg
          width="380"
          height="49"
          viewBox="0 0 380 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="24.2253" r="4" fill="black" />
          <circle cx="20" cy="24.2253" r="4" fill="#8D8D8D" />
          <circle cx="36" cy="24.2253" r="4" fill="#8D8D8D" />
          <circle cx="52" cy="24.2253" r="4" fill="#8D8D8D" />
          <circle cx="68" cy="24.2253" r="4" fill="#8D8D8D" />
          <rect
            x="269.5"
            y="0.725342"
            width="47"
            height="47"
            rx="23.5"
            stroke="black"
          />
          <path
            d="M301 23.2253H288.83L294.42 17.6353L293 16.2253L285 24.2253L293 32.2253L294.41 30.8153L288.83 25.2253H301V23.2253Z"
            fill="black"
          />
          <rect
            x="332.5"
            y="0.725342"
            width="47"
            height="47"
            rx="23.5"
            stroke="black"
          />
          <path
            d="M356 16.2253L354.59 17.6353L360.17 23.2253H348V25.2253H360.17L354.59 30.8153L356 32.2253L364 24.2253L356 16.2253Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="hidden sm:block w-[1152px] h-[49px] p-1" >
      <svg width="1152" height="49" viewBox="0 0 1152 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="24.8889" r="4" fill="black"/>
<circle cx="20" cy="24.8889" r="4" fill="#8D8D8D"/>
<circle cx="36" cy="24.8889" r="4" fill="#8D8D8D"/>
<circle cx="52" cy="24.8889" r="4" fill="#8D8D8D"/>
<circle cx="68" cy="24.8889" r="4" fill="#8D8D8D"/>
<rect x="1041.5" y="1.38892" width="47" height="47" rx="23.5" stroke="black"/>
<path d="M1073 23.8889H1060.83L1066.42 18.2989L1065 16.8889L1057 24.8889L1065 32.8889L1066.41 31.4789L1060.83 25.8889H1073V23.8889Z" fill="black"/>
<rect x="1104.5" y="1.38892" width="47" height="47" rx="23.5" stroke="black"/>
<path d="M1128 16.8889L1126.59 18.2989L1132.17 23.8889H1120V25.8889H1132.17L1126.59 31.4789L1128 32.8889L1136 24.8889L1128 16.8889Z" fill="black"/>
</svg>

      </div>
    </div>
  );
}

export default Testimonial;
