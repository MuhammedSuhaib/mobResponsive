import React from "react";
import Image from "next/image";
function Blog() {
  return (
    <div className="w-full  h-auto px-6 py-12 bg-white flex flex-col justify-start items-center gap-12">
      {/* Section Title */}
      
      <div className="w-[249px] sm:w-full flex flex-col justify-center items-center gap-6">
        <h4 className="font-bold text-[32px] text-center">Courses</h4>
        <p className="font-normal text-[16px] text-center">
          Your Ultimate Guide to Learning
        </p>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col gap-16">
      {/* Categories */}
        <div className="w-full sm:w-1/3 mx-auto h-[40px]  flex justify-between   text-black">
          <button className=" font-normal text-[16px] text-center w-[87px] h-[40px] border-b-[1px] border-[#676767] px-4 py-2 flex gap-2">
            Popular
          </button>
          <button className=" font-normal text-[16px] text-center w-[108px] h-[24px] px-4 py-2 flex gap-2">
            Recommended
          </button>
          <button className="font-normal text-[16px] text-center  px-4 py-2 flex gap-2">
            Best Price
          </button>
        </div>

        {/* Content */}
        <div className="w-[380px] h-[1,690px] flex justify-center flex-col gap-16">
          {/**Row 1*/}
          <div className="w-[380px] h-[1,690px] sm:w-full sm:flex-row  flex flex-col gap-8">
            <div className=" bg-[#F7F7F7]">
              <div className="w-[380px] h-auto rounded-[5px]  text-black  flex flex-col gap-6">
                <Image
                  src="/UI-min.jpg"
                  alt="UI"
                  width={380}
                  height={300}
                  className="w-[380px] h-[300px] rounded-[5px]"
                />
              </div>
              <div className="w-[380px] h-auto px-4 pb-6 flex flex-col gap-6">
                <div className="w-[348px]  flex-col gap-2 ">
                  <div className=" flex-col gap-2 ">
                    <div className="flex">
                      <h6 className="font-semibold text-[14px] w-[326px] h-[21px] ">
                        Design
                      </h6>
                      <span className="font-semibold text-[14px] text-right w-[48px] h-[24px] flex gap-1 ">
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.04894 1.26348C9.3483 0.342167 10.6517 0.342166 10.9511 1.26348L12.4697 5.93724C12.6035 6.34926 12.9875 6.62822 13.4207 6.62822H18.335C19.3037 6.62822 19.7065 7.86784 18.9228 8.43724L14.947 11.3258C14.5966 11.5804 14.4499 12.0318 14.5838 12.4438L16.1024 17.1176C16.4017 18.0389 15.3472 18.805 14.5635 18.2356L10.5878 15.3471C10.2373 15.0924 9.7627 15.0924 9.41221 15.3471L5.43648 18.2356C4.65276 18.805 3.59828 18.0389 3.89763 17.1176L5.41623 12.4438C5.55011 12.0318 5.40345 11.5804 5.05296 11.3258L1.07722 8.43724C0.293507 7.86784 0.696283 6.62822 1.66501 6.62822H6.57929C7.01252 6.62822 7.39647 6.34926 7.53035 5.93724L9.04894 1.26348Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                        5.0
                      </span>
                    </div>

                    <h5 className="font-bold text-[24px]">UX/UI Design 201</h5>
                    <p className="font-normal text-[16px] w-[326px] sm:w-full h-[72px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
              
              {/*Avatar 1*/}
              <div className=" ml-4 w-[382px] h-[40px] flex gap-4 ">
                <button className=" py-2 px-5 rounded-[5px]  border-[1px] border-black font-normal text-base text-black flex gap-2 ">
                  Enroll Now
                </button> 

                <button className=" py-2 px-5 font-medium text-base text-black flex gap-2 ">
                  $400
                </button>
              </div>
            </div>

            <div className=" bg-[#F7F7F7] ">
              <div className="w-[380px] h-auto rounded-[5px]  text-black  flex justify-center items-center flex-col gap-6">
                <Image
                  src="/py-min.jpg"
                  alt="py"
                  width={380}
                  height={300}
                  className="w-[380px] h-[300px] rounded-[5px]"
                />
              </div>
              <div className="w-[380px] h-auto px-4 pb-6 flex flex-col gap-6">
                <div className="w-[348px]  flex-col gap-2">
                  <div className=" flex-col gap-2">
                    <div className="flex">
                      <h6 className="font-semibold text-[14px] w-[326px] h-[21px]">
                        Programmimg
                      </h6>
                      <span className="font-semibold text-[14px] text-right w-[48px] h-[24px] flex gap-1 ">
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.04894 1.26348C9.3483 0.342167 10.6517 0.342166 10.9511 1.26348L12.4697 5.93724C12.6035 6.34926 12.9875 6.62822 13.4207 6.62822H18.335C19.3037 6.62822 19.7065 7.86784 18.9228 8.43724L14.947 11.3258C14.5966 11.5804 14.4499 12.0318 14.5838 12.4438L16.1024 17.1176C16.4017 18.0389 15.3472 18.805 14.5635 18.2356L10.5878 15.3471C10.2373 15.0924 9.7627 15.0924 9.41221 15.3471L5.43648 18.2356C4.65276 18.805 3.59828 18.0389 3.89763 17.1176L5.41623 12.4438C5.55011 12.0318 5.40345 11.5804 5.05296 11.3258L1.07722 8.43724C0.293507 7.86784 0.696283 6.62822 1.66501 6.62822H6.57929C7.01252 6.62822 7.39647 6.34926 7.53035 5.93724L9.04894 1.26348Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                        5.0
                      </span>
                    </div>

                    <h5 className="font-bold text-[24px]">
                      Introduction to Python
                    </h5>
                    <p className="font-normal text-[16px] w-[348px] h-[48px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
              {/*Avatar 2 */}
              <div className=" ml-4 w-[382px] h-[40px] flex  gap-4 ">
                <button className=" py-2 px-5 rounded-[5px] border-[1px] border-black font-normal text-base text-black flex gap-2 ">
                  Enroll Now
                </button>

                <button className=" py-2 px-5 font-medium text-base text-black flex gap-2 ">
                  $400
                </button>
              </div>
            </div>

            <div className=" bg-[#F7F7F7]">
              <div className="w-[380px] h-auto rounded-[5px]  text-black  flex flex-col gap-6">
                <Image
                  src="/DataAnalysis.png"
                  alt="DataAnalysis"
                  width={380}
                  height={300}
                  className="w-[380px] h-[300px] rounded-[5px]"
                />
              </div>
              <div className="w-[380px] h-auto px-4 pb-6 flex flex-col gap-6">
                <div className="w-[348px]  flex-col gap-2">
                  <div className=" flex-col gap-2">
                    <div className="flex">
                      <h6 className="font-semibold text-[14px] w-[326px] h-[21px] ">
                        Business
                      </h6>
                      <span className="font-semibold text-[14px] text-right w-[48px] h-[24px] flex gap-1 ">
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.04894 1.26348C9.3483 0.342167 10.6517 0.342166 10.9511 1.26348L12.4697 5.93724C12.6035 6.34926 12.9875 6.62822 13.4207 6.62822H18.335C19.3037 6.62822 19.7065 7.86784 18.9228 8.43724L14.947 11.3258C14.5966 11.5804 14.4499 12.0318 14.5838 12.4438L16.1024 17.1176C16.4017 18.0389 15.3472 18.805 14.5635 18.2356L10.5878 15.3471C10.2373 15.0924 9.7627 15.0924 9.41221 15.3471L5.43648 18.2356C4.65276 18.805 3.59828 18.0389 3.89763 17.1176L5.41623 12.4438C5.55011 12.0318 5.40345 11.5804 5.05296 11.3258L1.07722 8.43724C0.293507 7.86784 0.696283 6.62822 1.66501 6.62822H6.57929C7.01252 6.62822 7.39647 6.34926 7.53035 5.93724L9.04894 1.26348Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                        5.0
                      </span>
                    </div>

                    <h5 className="font-bold text-[24px]">
                      Data Analysis for Beginners
                    </h5>
                    <p className="font-normal text-[16px] w-[348px] h-[48px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
              {/*Avatar 3*/}
              <div className=" ml-4 w-[382px] h-[40px] flex gap-4 ">
                <button className=" py-2 px-5 rounded-[5px] border-[1px] border-black font-normal text-base text-black flex gap-2 ">
                  Enroll Now
                </button>

                <button className=" py-2 px-5 font-medium text-base text-black flex gap-2 ">
                  $400
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block w-[380px] h-[1,690px]   flex-col gap-16">
          {/**Row 2 */}
          <div className=" w-[380px] h-[1,690px] sm:w-full sm:flex-row  flex flex-col gap-8">
            <div className=" bg-[#F7F7F7]">
              <div className="w-[380px] h-auto rounded-[5px]  text-black  flex flex-col gap-6">
                <Image
                  src="/Art.jpg"
                  alt="Art"
                  width={380}
                  height={300}
                  className="w-[380px] h-[300px] rounded-[5px]"
                />
              </div>
              <div className="w-[380px] h-auto px-4 pb-6 flex flex-col gap-6">
                <div className="w-[348px]  flex-col gap-2">
                  <div className=" flex-col gap-2">
                    <div className="flex">
                      <h6 className="font-semibold text-[14px] w-[326px] h-[21px] ">
                      Art
                      </h6>
                      <span className="font-semibold text-[14px] text-right w-[48px] h-[24px] flex gap-1 ">
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.04894 1.26348C9.3483 0.342167 10.6517 0.342166 10.9511 1.26348L12.4697 5.93724C12.6035 6.34926 12.9875 6.62822 13.4207 6.62822H18.335C19.3037 6.62822 19.7065 7.86784 18.9228 8.43724L14.947 11.3258C14.5966 11.5804 14.4499 12.0318 14.5838 12.4438L16.1024 17.1176C16.4017 18.0389 15.3472 18.805 14.5635 18.2356L10.5878 15.3471C10.2373 15.0924 9.7627 15.0924 9.41221 15.3471L5.43648 18.2356C4.65276 18.805 3.59828 18.0389 3.89763 17.1176L5.41623 12.4438C5.55011 12.0318 5.40345 11.5804 5.05296 11.3258L1.07722 8.43724C0.293507 7.86784 0.696283 6.62822 1.66501 6.62822H6.57929C7.01252 6.62822 7.39647 6.34926 7.53035 5.93724L9.04894 1.26348Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                        5.0
                      </span>
                    </div>

                    <h5 className="font-bold text-[24px]">Art Specialization</h5>
                    <p className="font-normal text-[16px] w-[326px] h-[72px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
              {/*Avatar */}
              <div className=" ml-4 w-[382px] h-[40px] flex gap-4 ">
                <button className=" py-2 px-5 rounded-[5px] border-[1px] border-black font-normal text-base text-black flex gap-2 ">
                  Enroll Now
                </button>

                <button className=" py-2 px-5 font-medium text-base text-black flex gap-2 ">
                  $400
                </button>
              </div>
            </div>

            <div className=" bg-[#F7F7F7] ">
              <div className="w-[380px] h-auto rounded-[5px]  text-black  flex justify-center items-center flex-col gap-6">
                <Image
                  src="/Law.jpg"
                  alt="Law"
                  width={380}
                  height={300}
                  className="w-[380px] h-[300px] rounded-[5px]"
                />
              </div>
              <div className="w-[380px] h-auto px-4 pb-6 flex flex-col gap-6">
                <div className="w-[348px]  flex-col gap-2">
                  <div className=" flex-col gap-2">
                    <div className="flex">
                      <h6 className="font-semibold text-[14px] w-[326px] h-[21px]">
                      Law
                      </h6>
                      <span className="font-semibold text-[14px] text-right w-[48px] h-[24px] flex gap-1 ">
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.04894 1.26348C9.3483 0.342167 10.6517 0.342166 10.9511 1.26348L12.4697 5.93724C12.6035 6.34926 12.9875 6.62822 13.4207 6.62822H18.335C19.3037 6.62822 19.7065 7.86784 18.9228 8.43724L14.947 11.3258C14.5966 11.5804 14.4499 12.0318 14.5838 12.4438L16.1024 17.1176C16.4017 18.0389 15.3472 18.805 14.5635 18.2356L10.5878 15.3471C10.2373 15.0924 9.7627 15.0924 9.41221 15.3471L5.43648 18.2356C4.65276 18.805 3.59828 18.0389 3.89763 17.1176L5.41623 12.4438C5.55011 12.0318 5.40345 11.5804 5.05296 11.3258L1.07722 8.43724C0.293507 7.86784 0.696283 6.62822 1.66501 6.62822H6.57929C7.01252 6.62822 7.39647 6.34926 7.53035 5.93724L9.04894 1.26348Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                        5.0
                      </span>
                    </div>

                    <h5 className="font-bold text-[24px]">
                    Rule of Law                    </h5>
                    <p className="font-normal text-[16px] w-[348px] h-[48px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
              {/*Avatar */}
              <div className=" ml-4 w-[382px] h-[40px] flex  gap-4 ">
                <button className=" py-2 px-5 rounded-[5px] border-[1px] border-black font-normal text-base text-black flex gap-2 ">
                  Enroll Now
                </button>

                <button className=" py-2 px-5 font-medium text-base text-black flex gap-2 ">
                  $400
                </button>
              </div>
            </div>

            <div className=" bg-[#F7F7F7]">
              <div className="w-[380px] h-auto rounded-[5px]  text-black  flex flex-col gap-6">
                <Image
                  src="/web.jpg"
                  alt="Tech"
                  width={380}
                  height={300}
                  className="w-[380px] h-[300px] rounded-[5px]"
                />
              </div>
              <div className="w-[380px] h-auto px-4 pb-6 flex flex-col gap-6">
                <div className="w-[348px]  flex-col gap-2">
                  <div className=" flex-col gap-2">
                    <div className="flex">
                      <h6 className="font-semibold text-[14px] w-[326px] h-[21px] ">
                      Tech
                      </h6>
                      <span className="font-semibold text-[14px] text-right w-[48px] h-[24px] flex gap-1 ">
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.04894 1.26348C9.3483 0.342167 10.6517 0.342166 10.9511 1.26348L12.4697 5.93724C12.6035 6.34926 12.9875 6.62822 13.4207 6.62822H18.335C19.3037 6.62822 19.7065 7.86784 18.9228 8.43724L14.947 11.3258C14.5966 11.5804 14.4499 12.0318 14.5838 12.4438L16.1024 17.1176C16.4017 18.0389 15.3472 18.805 14.5635 18.2356L10.5878 15.3471C10.2373 15.0924 9.7627 15.0924 9.41221 15.3471L5.43648 18.2356C4.65276 18.805 3.59828 18.0389 3.89763 17.1176L5.41623 12.4438C5.55011 12.0318 5.40345 11.5804 5.05296 11.3258L1.07722 8.43724C0.293507 7.86784 0.696283 6.62822 1.66501 6.62822H6.57929C7.01252 6.62822 7.39647 6.34926 7.53035 5.93724L9.04894 1.26348Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                        5.0
                      </span>
                    </div>

                    <h5 className="font-bold text-[24px]">
                    Introduction to webflow                    </h5>
                    <p className="font-normal text-[16px] w-[348px] h-[48px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
              {/*Avatar */}
              <div className=" ml-4 w-[382px] h-[40px] flex gap-4 ">
                <button className=" py-2 px-5 rounded-[5px] border-[1px] border-black font-normal text-base text-black flex gap-2 ">
                  Enroll Now
                </button>

                <button className=" py-2 px-5 font-medium text-base text-black flex gap-2 ">
                  $400
                </button>
              </div>
            </div>
          </div>
          
        </div>
       
        </div>
        <div className="flex  items-center justify-center">
              <button
                className="w-[155px] h-[48px] rounded-[5px] border-[1px] border-black flex gap-2 items-center justify-center font-normal text-base text-black
              py-3 px-17.5 "
              >
                View All Courses
              </button>
            </div>
      </div>
    </div>
  );
}

export default Blog;
