import React, { useEffect, useRef, useState } from "react";
import why from "../assets/images/why.png";

const ClientServiceSection = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (list && list.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % list.length;
          if (containerRef.current) {
            containerRef.current.scrollTo({
              left: nextIndex * 300, // Approximate width of each item including gap
              behavior: "smooth",
            });
          }
          return nextIndex;
        });
      }, 3000); // Auto-rotate every 3 seconds

      intervalRef.current = interval;

      return () => {
        clearInterval(interval);
      };
    }
  }, [list]);
  return (
    <section className="mx-5 sm:mx-8 lg:mx-14 min-h-screen relative my-20">
      <div className="absolute inset-0 ">
        <img
          src={why}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative p-5 sm:p-8 lg:px-14 z-10 min-h-[90vh] flex flex-col lg:flex-row items-end justify-between rounded-4xl  ">
        {/* Left Content */}
        <div className="text-white w-full lg:w-1/2 lg:pr-8">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-medium leading-[120%] mb-6">
            Why Collaborate
          </h2>
          <div className="hidden lg:block bg-white p-4 md:p-6 rounded-lg max-w-3xl">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                className="w-16 md:w-20 aspect-square fill-current text-gray-800"
                fill="currentColor">
                <mask
                  id="mask0_3291_519"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="58"
                  height="58">
                  <rect
                    width="58"
                    height="58"
                    transform="matrix(1 0 0 -1 0 58)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_3291_519)">
                  <path
                    d="M15.4673 14.5L12.084 17.8833L35.284 41.0833H14.5007V45.9167H43.5006V16.9167H38.6673V37.7L15.4673 14.5Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
            <p className=" text-black text-base md:text-xl lg:text-2xl font-normal leading-normal lg:leading-[130%]">
              Today's students are tomorrow's creators,
              marketers, innovators, and customers.
              Collaborate with them through GigX to bring
              fresh ideas, agility, and affordability to
              your brand.
            </p>
          </div>
        </div>

        {/* Right Services - Horizontal scroll on mobile, vertical on desktop */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 flex gap-8 flex-col lg:flex-row justify-end">
          <ul
            ref={containerRef}
            className="flex lg:flex-col gap-4 w-full lg:w-auto snap-x snap-mandatory overflow-x-auto scrollbar-hide pb-4 lg:pb-0 lg:overflow-visible lg:static">
            {list &&
              list.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-4  rounded-lg min-w-[250px] lg:min-w-0 snap-center shrink-0 bg-black/60 lg:hover:bg-white/10 lg:transition-all lg:duration-300"
                  style={{
                    scrollSnapAlign: "start",
                  }}>
                  <span className="text-white">
                    {item.icon}
                  </span>
                  <span className="text-white font-normal text-xl lg:text-2xl ml-3">
                    {item.title}
                  </span>
                </li>
              ))}
          </ul>
          <div className="lg:hidden bg-white p-4 md:p-6 rounded-lg max-w-3xl">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                className="w-16 md:w-20 aspect-square fill-current text-gray-800"
                fill="currentColor">
                <mask
                  id="mask0_3291_519"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="58"
                  height="58">
                  <rect
                    width="58"
                    height="58"
                    transform="matrix(1 0 0 -1 0 58)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_3291_519)">
                  <path
                    d="M15.4673 14.5L12.084 17.8833L35.284 41.0833H14.5007V45.9167H43.5006V16.9167H38.6673V37.7L15.4673 14.5Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
            <p className=" text-black text-base md:text-xl lg:text-2xl font-normal leading-normal lg:leading-[130%]">
              Today's students are tomorrow's creators,
              marketers, innovators, and customers.
              Collaborate with them through GigX to bring
              fresh ideas, agility, and affordability to
              your brand.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Custom snap points for better mobile experience */
        @media (max-width: 1023px) {
          li {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientServiceSection;
