import React from "react";
import why from "../assets/images/why.png";
const ClientServiceSection = () => {
  return (
    <section className=" py-24 px-5 sm:px-8 lg:px-14">
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
        <div className="relative z-10 flex flex-col md:flex-row justify-between p-8 md:p-12 gap-10">
          {/* Left Image Section */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center rounded-4xl ">
            <img
              src={why}
              alt="gigX app"
              className="w-full h-auto object-contain z-1"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-15">
            <div>
              <h2 className="text-4xl lg:text-[4.5rem] text-white leading-tight font-medium">
                Why Collaborate
              </h2>
              <p className="text-lg lg:text-[1.75rem] leading-tight text-white mt-4">
                Today’s students are tomorrow’s creators,
                marketers, and innovators. Collaborate with
                them through GigX to bring fresh ideas,
                agility, and affordability to your brand.
              </p>
            </div>
            <div className="">
              <ol className="list-decimal text-lg lg:text-[1.75rem] text-white space-y-2 ml-5">
                <li>Fresh ideas that work</li>
                <li>Quick, flexible execution</li>
                <li>Affordable skilled talent</li>
                <li>Verified and reliable students</li>
                <li>Scalable campus network</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientServiceSection;
