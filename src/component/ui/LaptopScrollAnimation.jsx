import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with actual imports
import client11 from "../../assets/images/client11.png";
import client12 from "../../assets/images/client22.png";
import client13 from "../../assets/images/client33.png";

const steps = [
  {
    id: 1,
    title: "Sign up on GigX and set up your brand profile",
    desc: "Access a dashboard built to help you launch and manage student-powered gigs with ease.",
    img: client11,
  },
  {
    id: 2,
    title:
      "Post your first gig to attract top student talent",
    desc: "Create and publish a gig that aligns with your brand goals in minutes.",
    img: client12,
  },
  {
    id: 3,
    title:
      "Collaborate and track your project effortlessly",
    desc: "Use your GigX dashboard to manage communication and monitor progress.",
    img: client13,
  },
];

const StepSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Track screen size
  const containerRef = useRef(null);

  // 1. Detect Mobile Screen
  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Handle Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } =
        containerRef.current.getBoundingClientRect();
      const scrollPos = -top;
      const stepHeight = height / 3;

      if (scrollPos < stepHeight * 0.8) setActiveIndex(0);
      else if (scrollPos < stepHeight * 1.8)
        setActiveIndex(1);
      else setActiveIndex(2);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* STICKY CONTAINER: Stack vertically on mobile, horizontally on desktop */}
      <div className="sticky top-0 min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center md:gap-10 px-4 py-6 md:py-0">
        {/* --- TOP (Mobile) / RIGHT (Desktop): Laptop --- 
            We changed the order so Laptop is visibly first on Mobile 
        */}
        <div className="w-full md:w-[60%] relative h-[30vh] md:h-auto flex items-center justify-center order-1 md:order-2 mb-6 md:mb-0">
          <div className="relative w-full max-w-[500px] md:max-w-full">
            <img
              src="https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_0120.jpg"
              alt="Laptop Frame"
              className="z-10 w-full h-auto block pointer-events-none"
            />
            {/* Screen Content */}
            <div className="absolute z-0 top-[4.5%] left-[9.7%] w-[80.5%] aspect-[16/10] overflow-hidden bg-black rounded-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[activeIndex].img}
                  src={steps[activeIndex].img}
                  alt={`Screen ${activeIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* --- BOTTOM (Mobile) / LEFT (Desktop): Accordion Steps --- */}
        <div className="w-full md:w-[40%] flex flex-col gap-2 md:gap-0 pl-2 md:pl-4 order-2 md:order-1">
          {/* Continuous Vertical Line (Adjusted position for mobile) */}

          {steps.map((step, index) => {
            // LOGIC:
            // Mobile: Only the active index is true (Single focus)
            // Desktop: Active index AND previous indices are true (History)
            const isActive = isMobile
              ? index === activeIndex
              : index <= activeIndex;
            const isNextActive = index < activeIndex;
            const isLastStep = index === steps.length - 1;

            return (
              <div
                key={step.id}
                className="relative flex gap-4 md:gap-6 z-10">
                {/* Badge Column */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "#F97316"
                        : "#E5E7EB",
                      color: isActive ? "#fff" : "#374151",
                    }}
                    // Smaller badge on mobile (w-10) vs desktop (w-12)
                    className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg font-bold text-base md:text-lg shadow-sm transition-colors duration-300 shrink-0">
                    {step.id}
                  </motion.div>

                  {/* Connecting Line (Desktop Only to avoid mobile clutter) */}
                  {!isLastStep && (
                    <div
                      className="grow w-1 bg-gray-200 relative hidden md:block"
                      style={{ minHeight: "2rem" }}>
                      <motion.div
                        className="absolute top-0 left-0 w-full bg-orange-500"
                        initial={{ height: 0 }}
                        animate={{
                          height: isNextActive
                            ? "100%"
                            : "0%",
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-1 pb-4 md:pb-8">
                  <h3
                    className={`text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl leading-tight font-normal transition-colors duration-300 ${
                      isActive
                        ? "text-black"
                        : "text-gray-400"
                    }`}>
                    {step.title}
                  </h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                          marginTop: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          marginTop: 10,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          marginTop: 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden">
                        <p className="text-gray-600 text-sm md:text-xl leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepSection;
