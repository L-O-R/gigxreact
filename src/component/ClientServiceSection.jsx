import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import why from "../assets/images/why.png";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ClientServiceSection = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const listRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      // Initially hide background, content, and image
      gsap.set(
        [
          backgroundRef.current,
          headingRef.current,
          paraRef.current,
          listRef.current,
          imageRef.current,
        ],
        { opacity: 0 }
      );

      // Timeline for section entrance on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.set(headingRef.current, { opacity: 1 });

      // Step 1: Animate background SVG container first (fade and subtle scale)
      tl.fromTo(
        backgroundRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Step 2: Simultaneously animate image and right content after background
      const contentStart = "-=0.3"; // Overlap slightly with background end for smoothness

      // SplitText for heading (part of right content)
      const splitInstance = new SplitText(
        headingRef.current,
        {
          type: "lines, words",
          linesClass: "split-line",
          wordsClass: "split-word",
        }
      );

      // Animate heading lines from below simultaneously (right content)
      tl.from(
        splitInstance.lines,
        {
          duration: 1,
          y: 100,
          opacity: 0,
          ease: "power2.out",
          stagger: 0.05,
        },
        contentStart
      );

      // Fade in paragraph following heading (right content)
      tl.fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        contentStart + "-=0.5"
      );

      // Fade in list container first (parent for visibility)
      tl.fromTo(
        listRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        contentStart + "-=0.3"
      );

      // Staggered slide-in for list items (fade up, after parent)
      const listItems =
        listRef.current?.querySelectorAll("li");
      if (listItems) {
        tl.fromTo(
          listItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          contentStart + "-=0.2"
        );
      }

      // Slide-in for image from left (simultaneous with right content)
      tl.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "0.6"
      );

      return () => {
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
      className="py-24 px-5 sm:px-8 lg:px-14">
      <div className="relative mx-auto rounded-4xl overflow-hidden">
        {/* Background SVG */}
        <div
          ref={backgroundRef}
          className="absolute w-full h-full top-0 left-0 z-0">
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
          <div className="relative w-full md:w-1/2 flex items-center justify-center rounded-4xl">
            <img
              ref={imageRef}
              src={why}
              alt="gigX app"
              className="w-full h-auto object-contain z-1"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-15">
            <div>
              <h2
                ref={headingRef}
                className="text-4xl lg:text-[4.5rem] text-white leading-tight font-medium overflow-hidden">
                Why Collaborate
              </h2>
              <p
                ref={paraRef}
                className="text-lg lg:text-[1.75rem] leading-tight text-white mt-4">
                Today’s students are tomorrow’s creators,
                marketers, and innovators. Collaborate with
                them through GigX to bring fresh ideas,
                agility, and affordability to your brand.
              </p>
            </div>
            <div ref={listRef}>
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
