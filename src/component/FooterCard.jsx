import React from "react";
import studentfooter from "../assets/images/studentfooter.png";
import playStore from "../assets/images/google_pay.png";
import appStore from "../assets/images/app.png";

const FooterCard = () => {
  return (
    <section className="bg-black py-24 px-5 sm:px-8 lg:px-14">
      <div className="relative mx-auto rounded-4xl overflow-hidden">
        {/* Background SVG */}
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1792"
            height="470"
            viewBox="0 0 1792 470"
            className="w-full h-full object-cover"
            fill="none"
            preserveAspectRatio="xMidYMid slice">
            <g filter="url(#filter0_n_2560_130)">
              <rect
                width="1792"
                height="470"
                rx="32"
                fill="url(#paint0_radial_2560_130)"
              />
            </g>
            <defs>
              <filter
                id="filter0_n_2560_130"
                x="0"
                y="0"
                width="1792"
                height="470"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="1 1"
                  stitchTiles="stitch"
                  numOctaves="3"
                  result="noise"
                  seed="6766"
                />
                <feColorMatrix
                  in="noise"
                  type="luminanceToAlpha"
                  result="alphaNoise"
                />
                <feComponentTransfer
                  in="alphaNoise"
                  result="coloredNoise1">
                  <feFuncA
                    type="discrete"
                    tableValues="0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                  />
                </feComponentTransfer>
                <feComposite
                  operator="in"
                  in2="shape"
                  in="coloredNoise1"
                  result="noise1Clipped"
                />
                <feFlood
                  floodColor="rgba(0, 0, 0, 0.25)"
                  result="color1Flood"
                />
                <feComposite
                  operator="in"
                  in2="noise1Clipped"
                  in="color1Flood"
                  result="color1"
                />
                <feMerge result="effect1_noise_2560_130">
                  <feMergeNode in="shape" />
                  <feMergeNode in="color1" />
                </feMerge>
              </filter>
              <radialGradient
                id="paint0_radial_2560_130"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(1826.5 -529.047 2017.13 2452.48 -34.4999 552.487)"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#EC4092" />
                <stop
                  offset="0.598947"
                  stopColor="#FF6D39"
                />
                <stop offset="1" stopColor="#732BFB" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between py-6 px-4 md:p-12 gap-10">
          {/* Left Image Section */}
          <div className="relative w-full md:w-[45%] flex items-center justify-center bg-white pt-16 px-10 rounded-4xl border border-[#F5F4F3] overflow-hidden">
            <img
              src={studentfooter}
              alt="gigX app"
              className="w-full max-w-md h-auto object-contain z-1"
            />
            <div className="absolute -right-44 top-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="305"
                height="309"
                viewBox="0 0 305 309"
                className="w-full h-full object-contain"
                fill="none">
                <path
                  d="M0 0L305 97.1605V322H0V0Z"
                  fill="url(#paint0_linear_2560_136)"
                  fill-opacity="0.2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2560_136"
                    x1="274.5"
                    y1="283.696"
                    x2="226.273"
                    y2="23.6469"
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

          {/* Right Content Section */}
          <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left gap-15 px-2 md:px-4">
            <h2 className="text-3xl lg:text-[4.5rem] font-medium text-white leading-tight lg:leading-18">
              Your Next Gig Awaits
              <br className="hidden lg:block" />
              Get the App
            </h2>
            <div className="flex flex-row gap-4">
              <img
                src={playStore}
                alt="Get it on Google Play"
                className="h-12 md:h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={appStore}
                alt="Download on the App Store"
                className="h-12 md:h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCard;
