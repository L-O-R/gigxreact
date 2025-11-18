import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import why from "../assets/images/why.png";

// Define the motion variants for the vertical list transition
const listVariants = {
  // Initial state (outside the container, ready to enter)
  enter: (direction) => ({
    y: direction > 0 ? 50 : -50, // Move up or down based on direction
    opacity: 0,
  }),
  // Active state (visible)
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  // Exit state (leaving the container)
  exit: (direction) => ({
    y: direction > 0 ? -50 : 50, // Move opposite direction upon exit
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  }),
};

// Custom hook to track window size (for mobile/desktop differentiation)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth < 1024); // Tailwind's 'lg' breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const ClientServiceSection = ({ list }) => {
  // State for the item index to start the pair display
  const [currentStart, setCurrentStart] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const isMobile = useIsMobile();

  // New useEffect for the auto-rotation (Mobile Only)
  useEffect(() => {
    if (!isMobile || !list || list.length < 3) return; // Only run on mobile if list has items

    const interval = setInterval(() => {
      setDirection(1); // Always move forward in the auto-rotate
      setCurrentStart((prevStart) => {
        // Move to the next pair (2 items), wrap around when hitting the end.
        // If currentStart + 2 is >= list.length, reset to 0.
        return (prevStart + 2) % list.length;
      });
    }, 4000); // Auto-rotate every 4 seconds (gives time to read two items)

    return () => {
      clearInterval(interval);
    };
  }, [list, isMobile]);

  // Determine which list items to display
  const itemsToShow = isMobile
    ? list.slice(currentStart, currentStart + 2)
    : list;

  // If we wrapped around, the last visible item might not be 2,
  // so we handle the wrap-around logic for the display items here:
  if (
    isMobile &&
    itemsToShow.length < 2 &&
    list.length > 0
  ) {
    // If we only have one item, grab the first one to make it a pair again
    itemsToShow.push(list[0]);
  }

  // Handle the single item case if list has an odd number of items and wraps around.
  // The logic above ensures we always show a pair, using the first item again if needed.

  return (
    <section className="mx-5 sm:mx-8 lg:mx-14 min-h-screen relative my-20 rounded-3xl lg:rounded-4xl">
      <div className="absolute inset-0 rounded-3xl lg:rounded-4xl">
        <img
          src={why}
          alt="background"
          className="w-full h-full object-cover rounded-3xl lg:rounded-4xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-3xl lg:rounded-4xl"></div>
      </div>

      <div className="relative p-5 py-8 sm:p-8 lg:px-14 z-10 min-h-screen flex flex-col lg:flex-row items-end justify-between rounded-4xl">
        {/* Left Content (Title and Desktop text) */}
        <div className="text-white w-full lg:w-1/2 lg:pr-8">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-medium leading-[120%] mb-6">
            Why Collaborate
          </h2>

          {/* Desktop Text Box */}
          <div className="hidden lg:block bg-white p-4 md:p-6 rounded-lg max-w-3xl">
            {/* SVG and Text Content remain here for desktop */}
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                className="w-16 md:w-20 aspect-square fill-current text-gray-800"
                fill="currentColor">
                <mask
                  id="mask0_3291_519_d" // Changed ID to avoid conflict
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
                <g mask="url(#mask0_3291_519_d)">
                  <path
                    d="M15.4673 14.5L12.084 17.8833L35.284 41.0833H14.5007V45.9167H43.5006V16.9167H38.6673V37.7L15.4673 14.5Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
            <p className="text-black text-base md:text-xl lg:text-2xl font-normal leading-normal lg:leading-[130%]">
              Today's students are tomorrow's creators,
              marketers, innovators, and customers.
              Collaborate with them through GigX to bring
              fresh ideas, agility, and affordability to
              your brand.
            </p>
          </div>
        </div>

        {/* Right Services - Dynamic List */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 flex flex-col  justify-end">
          {/* List Container for Mobile (Shows two items, auto-rotates) */}
          <div className="lg:hidden w-full relative h-56 overflow-hidden mb-8">
            <AnimatePresence
              initial={false}
              custom={direction}>
              {/* Key ensures motion runs every time currentStart changes */}
              <motion.ul
                key={currentStart}
                custom={direction}
                variants={listVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-4 w-full absolute top-0 left-0">
                {itemsToShow.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg bg-black/60 shrink-0">
                    <span className="text-white">
                      {item.icon}
                    </span>
                    <span className="text-white font-normal text-xl ml-3">
                      {item.title}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {/* List Container for Desktop (Static Vertical List) */}
          <ul className="hidden lg:flex lg:flex-col gap-4 w-full lg:w-auto">
            {list &&
              list.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg bg-black/60 lg:hover:bg-white/10 lg:transition-all lg:duration-300">
                  <span className="text-white">
                    {item.icon}
                  </span>
                  <span className="text-white font-normal text-2xl ml-3">
                    {item.title}
                  </span>
                </li>
              ))}
          </ul>

          {/* Mobile Text Box (Moved to align below the auto-rotating list) */}
          <div className="lg:hidden bg-white p-4 md:p-6 ">
            <div className="mb-4">
              {/* SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                className="w-12 md:w-20 aspect-square fill-current text-black"
                fill="currentColor">
                <mask
                  id="mask0_3291_519_m" // Changed ID to avoid conflict
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
                <g mask="url(#mask0_3291_519_m)">
                  <path
                    d="M15.4673 14.5L12.084 17.8833L35.284 41.0833H14.5007V45.9167H43.5006V16.9167H38.6673V37.7L15.4673 14.5Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
            <p className="text-black text-lg md:text-xl lg:text-2xl font-normal leading-normal lg:leading-[130%]">
              Today's students are tomorrow's creators,
              marketers, innovators, and customers.
              Collaborate with them through GigX to bring
              fresh ideas, agility, and affordability to
              your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientServiceSection;
