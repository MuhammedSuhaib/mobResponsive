import React from "react";
import Image from "next/image";
import Connections from "./Svgs/Connections";

function OurTeam() {
  return (
    <div className="w-[400px] sm:w-full h-[1,075px] px-6 py-12 flex sm:flex-row justify-center items-center flex-col sm:gap-20 gap-12 text-black bg-[#F7F7F7]">
      <div className="w-full flex flex-col gap-4">
        {/* Section Title */}
        <div className="w-full flex flex-col justify-center gap-6">
          <h4 className="font-bold text-[32px] text-center">Our team</h4> {/*going out on mobile */}
          <p className="w-[363px] sm:w-full  font-normal text-[18px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Content */}
        <div className="w-full flex   flex-col items-center gap-24">
          {/* Row 1*/}
          <div className="w-full sm:flex-row  flex flex-col justify-center items-center gap-16">
            {/* Profile 1*/}
            <div className="w-full flex flex-col justify-center items-center">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <Image src="./pfp1.png" alt="pfp1" width={80} height={80} />
              </div>
              {/* Text */}
              <div className="flex flex-col items-center gap-0">
                <h4 className="font-semibold text-[20px] text-center">
                  James Nduku
                </h4>
                <p className="font-normal text-[18px] text-center">
                  Marketing Coordinator
                </p>
              </div>
              {/*Icons */}
              <div className="w-[394.67px]   flex justify-center mt-6  ">
                <Connections />
              </div>
            </div>
            {/* Profile 2 */}
            <div className="w-full flex flex-col justify-center items-center">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <Image src="./pfp2.png" alt="pfp2" width={80} height={80} />
              </div>
              {/* Text */}
              <div className="flex flex-col items-center gap-0">
                <h4 className="font-semibold text-[20px] text-center">
                  Joseph Munyambu
                </h4>
                <p className="font-normal text-[18px] text-center">
                  Nursing Assistant
                </p>
              </div>
              {/*Icons */}
              <div className="w-[394.67px]  flex justify-center mt-6  ">
                <Connections />
              </div>
            </div>
            {/* Profile 3 */}
            <div className="w-full flex flex-col justify-center items-center">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <Image src="./pfp3.png" alt="pfp3" width={80} height={80} />
              </div>
              {/* Text */}
              <div className="flex flex-col items-center gap-0">
                <h4 className="font-semibold text-[20px] text-center">
                  Joseph Ngumbau{" "}
                </h4>
                <p className="font-normal text-[18px] text-center">
                  Medical Assistant{" "}
                </p>
              </div>
              {/*Icons */}
              <div className="w-[394.67px]  flex justify-center mt-6  ">
                <Connections />
              </div>
            </div>
          </div>
         {/* Row 2  */} {/*sm:block is messing here so sm:flex instead of block  & if i write hidden so no need to write flex */}
         <div className="hidden sm:flex w-full sm:flex-row   flex-col justify-center items-center gap-16">
            {/* Profile 4*/}
            <div className="w-full flex flex-col justify-center items-center">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <Image src="./pfp4.png" alt="pfp1" width={80} height={80} />
              </div>
              {/* Text */}
              <div className="flex flex-col items-center gap-0">
                <h4 className="font-semibold text-[20px] text-center">
                Erick Kipkemboi                </h4>
                <p className="font-normal text-[18px] text-center">
                Web Designer                </p>
              </div>
              {/*Icons */}
              <div className="w-[394.67px]   flex justify-center mt-6  ">
                <Connections />
              </div>
            </div>
            {/* Profile 5 */}
            <div className="w-full flex flex-col justify-center items-center">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <Image src="./pfp5.png" alt="pfp2" width={80} height={80} />
              </div>
              {/* Text */}
              <div className="flex flex-col items-center gap-0">
                <h4 className="font-semibold text-[20px] text-center">
                Stephen Kerubo                </h4>
                <p className="font-normal text-[18px] text-center">
                President of Sales                </p>
              </div>
              {/*Icons */}
              <div className="w-[394.67px]  flex justify-center mt-6  ">
                <Connections />
              </div>
            </div>
            {/* Profile 6 */}
            <div className="w-full flex flex-col justify-center items-center">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <Image src="./pfp6.png" alt="pfp3" width={80} height={80} />
              </div>
              {/* Text */}
              <div className="flex flex-col items-center gap-0">
                <h4 className="font-semibold text-[20px] text-center">
                John Leboo                </h4>
                <p className="font-normal text-[18px] text-center">
                Dog Trainer                </p>
              </div>
              {/*Icons */}
              <div className="w-[394.67px]  flex justify-center mt-6  ">
                <Connections />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*button */}
      <div className="sm:hidden flex  items-center justify-center">
        <button
          className="w-[89px] h-[40px] rounded-[5px] border-[1px] border-black flex gap-2 items-center justify-center font-normal text-base text-black
              py-3 px-17.5 "
        >
          View All
        </button>
      </div>
    </div>
  );
}

export default OurTeam;
