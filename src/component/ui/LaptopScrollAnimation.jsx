import React, { useRef } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";

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
  const sectionRef = useRef(null);

  // Create refs and "inView" observers for each step
  const stepRefs = steps.map(() => useRef(null));
  const stepInView = stepRefs.map((ref) =>
    useInView(ref, { amount: 0.5, once: false })
  );

  // Determine which step is currently active (visible)
  const activeIndex =
    stepInView.findIndex((v) => v) !== -1
      ? stepInView.findIndex((v) => v)
      : 0;

  return (
    <div
      ref={sectionRef}
      className="bg-white text-black py-20 px-8 md:px-16 mt-10">
      <div className=" mx-auto flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE - Steps */}
        <div className=" w-[30%] flex flex-col gap-[10vh]">
          {steps.map((step, i) => (
            <div
              key={step.id}
              ref={stepRefs[i]}
              className="min-h-[80vh] flex flex-col justify-center">
              <p className="text-gray-700 text-sm font-semibold mb-2">
                Step {step.id}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                {step.title}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Sticky Laptop */}
        <div className="w-[70%] sticky top-20 h-fit">
          <div className="relative w-full">
            {/* Laptop frame */}
            <img
              src="https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_0120.jpg"
              alt="Laptop Frame"
              loading="lazy"
              className="w-full h-auto block"
            />

            {/* Screen Content */}
            <div className="absolute top-[21px] left-[85px] w-[80.6%] overflow-hidden rounded-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[activeIndex].img}
                  src={steps[activeIndex].img}
                  alt={`Client ${activeIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="w-full h-auto object-cover rounded-md"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
