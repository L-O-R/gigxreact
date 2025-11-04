import React from "react";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import DownloadBtn from "./ui/DownloadBtn";
const StudentDownload = () => {
  return (
    <section className="min-h-screen px-5 sm:px-8 lg:px-14 py-10">
      <header className="lg:text-center">
        <h2 className=" text-4xl lg:text-[4rem] font-semibold mb-8">
          Download. Sign Up. Start Earning.
        </h2>
        <DownloadBtn />
      </header>
      <div className="flex max-lg:flex-wrap gap-10 mt-14 ">
        <div className="overflow-y-hidden w-full h-154 lg:h-165 flex flex-col justify-between bg-white rounded-4xl px-10 pt-14 aspect-586/733">
          <div>
            <span className="text-xl text-[#8A8A8E] font-normal leading-relaxed">
              Step 1
            </span>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight md:leading-11">
              Find GigX on the App Store or Play Store
            </h3>
          </div>
          <div className="w-full px-2 md:px-8 flex items-end relative">
            <img
              src={one}
              alt="one"
              className="w-full h-auto object-contain z-10"
            />
            <div className="absolute -right-10 top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="232"
                height="470"
                viewBox="0 0 232 470"
                fill="none">
                <path
                  d="M0 0L255 170.484V565H0V0Z"
                  fill="url(#paint0_linear_2510_159)"
                  fill-opacity="0.2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2510_159"
                    x1="229.5"
                    y1="497.79"
                    x2="69.9614"
                    y2="87.8936"
                    gradientUnits="userSpaceOnUse">
                    <stop
                      stop-color="#D9D9D9"
                      stop-opacity="0.5"
                    />
                    <stop
                      offset="1"
                      stop-color="#737373"
                      stop-opacity="0.9"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="overflow-y-hidden w-full h-154 lg:h-165 flex flex-col justify-between bg-white rounded-4xl px-10 pt-14 aspect-586/733">
          <div>
            <span className="text-xl text-[#8A8A8E] font-normal leading-relaxed">
              Step 2
            </span>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight md:leading-11">
              Sign up and build your profile
            </h3>
          </div>
          <div className="w-full px-2 md:px-8 flex items-end relative">
            <img
              src={two}
              alt="one"
              className="w-full h-auto object-contain z-10"
            />
            <div className="absolute -right-10 top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="232"
                height="470"
                viewBox="0 0 232 470"
                fill="none">
                <path
                  d="M0 0L255 170.484V565H0V0Z"
                  fill="url(#paint0_linear_2510_159)"
                  fill-opacity="0.2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2510_159"
                    x1="229.5"
                    y1="497.79"
                    x2="69.9614"
                    y2="87.8936"
                    gradientUnits="userSpaceOnUse">
                    <stop
                      stop-color="#D9D9D9"
                      stop-opacity="0.5"
                    />
                    <stop
                      offset="1"
                      stop-color="#737373"
                      stop-opacity="0.9"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="overflow-y-hidden w-full h-154 lg:h-165 flex flex-col justify-between bg-white rounded-4xl px-10 pt-14 aspect-586/733">
          <div>
            <span className="text-xl text-[#8A8A8E] font-normal leading-relaxed">
              Step 3
            </span>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight md:leading-11">
              Explore gigs and start earning
            </h3>
          </div>
          <div className="w-full px-2 md:px-8 flex items-end relative">
            <img
              src={three}
              alt="one"
              className="w-full h-auto object-contain z-10"
            />
            <div className="absolute -right-10 top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="232"
                height="470"
                viewBox="0 0 232 470"
                fill="none">
                <path
                  d="M0 0L255 170.484V565H0V0Z"
                  fill="url(#paint0_linear_2510_159)"
                  fill-opacity="0.2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2510_159"
                    x1="229.5"
                    y1="497.79"
                    x2="69.9614"
                    y2="87.8936"
                    gradientUnits="userSpaceOnUse">
                    <stop
                      stop-color="#D9D9D9"
                      stop-opacity="0.5"
                    />
                    <stop
                      offset="1"
                      stop-color="#737373"
                      stop-opacity="0.9"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDownload;
