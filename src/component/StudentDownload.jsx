import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import DownloadBtn from "./ui/DownloadBtn";

gsap.registerPlugin(SplitText, ScrollTrigger);

const StudentDownload = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(
    () => {
      // Subtle entrance animation for the entire section on scroll into view
      gsap.fromTo(
        sectionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Timeline for heading entrance animation with SplitText
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      let split;
      headerTl.set(headingRef.current, { opacity: 1 });

      const splitInstance = new SplitText(
        headingRef.current,
        {
          type: "lines, words",
          linesClass: "split-line",
          wordsClass: "split-word",
        }
      );

      headerTl.from(splitInstance.lines, {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.05, // Minimal stagger for near-simultaneous entry from below
      });

      // Fade in for button, added to the same timeline for coordination
      headerTl.fromTo(
        btnRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5" // Overlap with heading animation
      );

      // Slide-in animation for step cards
      gsap.fromTo(
        ".step-card",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        // Cleanup
        if (splitInstance) {
          splitInstance.revert();
        }
        ScrollTrigger.getAll().forEach((trigger) =>
          trigger.kill()
        );
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-5 sm:px-8 lg:px-14 py-10">
      <header ref={headerRef} className="lg:text-center">
        <h2
          ref={headingRef}
          className="text-4xl lg:text-[4rem] font-semibold mb-8 leading-tight overflow-hidden">
          Download. Sign Up. Start Earning.
        </h2>
        <div ref={btnRef}>
          <DownloadBtn />
        </div>
      </header>
      <div className="flex max-lg:flex-wrap gap-10 mt-14">
        <div className="step-card overflow-y-hidden w-full h-154 lg:h-175 flex flex-col justify-between bg-white rounded-4xl px-10 pt-14 aspect-586/733">
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
                  fillOpacity="0.2"
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
                      stopColor="#D9D9D9"
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="1"
                      stopColor="#737373"
                      stopOpacity="0.9"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="step-card overflow-y-hidden w-full h-154 lg:h-175 flex flex-col justify-between bg-white rounded-4xl px-10 pt-14 aspect-586/733">
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
                  fillOpacity="0.2"
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
                      stopColor="#D9D9D9"
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="1"
                      stopColor="#737373"
                      stopOpacity="0.9"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="step-card overflow-y-hidden w-full h-154 lg:h-175 flex flex-col justify-between bg-white rounded-4xl px-10 pt-14 aspect-586/733">
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
                  fillOpacity="0.2"
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
                      stopColor="#D9D9D9"
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="1"
                      stopColor="#737373"
                      stopOpacity="0.9"
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
