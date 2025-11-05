import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const DiscoverSection = ({ opportunities = [] }) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

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

      // Fade in for paragraph, added to the same timeline for coordination
      headerTl.fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5" // Overlap with heading animation
      );

      // Slide-in animation for opportunity cards
      gsap.fromTo(
        ".opportunity-item",
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
      className="py-16 px-0 lg:px-14">
      <div className="">
        {/* Header */}
        <header
          ref={headerRef}
          className="px-5 md:px-8 lg:px-0 flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12">
          <h2
            ref={headingRef}
            className="text-4xl lg:text-[4rem] font-semibold leading-9 lg:leading-16 mb-4 lg:mb-0 overflow-hidden">
            Discover what
            <br />
            you can do
          </h2>
          <p
            ref={paraRef}
            className="text-lg lg:text-2xl lg:max-w-xl lg:text-right">
            From creative gigs to internships, find flexible
            opportunities that match your strengths.
          </p>
        </header>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="opportunity-item bg-white rounded-4xl py-12 px-8 h-130">
              <div className="mb-30 w-18">{item.icon}</div>
              <h3 className="text-[2.55rem] font-semibold mb-8 leading-tight">
                {item.title}
              </h3>
              <p className="text-black text-[1.5rem] leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Carousel - Visible only on mobile */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 pb-4 first:pl-5 last:pr-5">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="min-w-[85%] snap-center">
                <div className="opportunity-item flex flex-col justify-between bg-white aspect-[1/1.4] border border-gray-200 rounded-2xl px-6 py-8">
                  <div className="mb-16 text-gray-800 w-20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-medium mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
