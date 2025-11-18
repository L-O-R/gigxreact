import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ClientDiscoverSection = ({ opportunities = [] }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const desktopGridRef = useRef(null);
  const mobileCarouselRef = useRef(null);

  useGSAP(
    () => {
      // Initially hide elements
      gsap.set(
        [
          headingRef.current,
          paraRef.current,
          desktopGridRef.current,
          mobileCarouselRef.current,
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

      tl.set([headingRef.current, paraRef.current], {
        opacity: 1,
      });

      // Animate heading (h2) with SplitText lines from below simultaneously
      const headingSplit = new SplitText(
        headingRef.current,
        {
          type: "lines",
          linesClass: "split-line",
        }
      );
      tl.from(headingSplit.lines, {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.05,
      });

      // Animate paragraph with SplitText lines from below
      const paraSplit = new SplitText(paraRef.current, {
        type: "lines",
        linesClass: "split-line",
      });
      tl.from(
        paraSplit.lines,
        {
          duration: 0.8,
          y: 80,
          opacity: 0,
          ease: "power2.out",
          stagger: 0.03,
        },
        "-=0.5"
      );

      // Reveal and stagger slide-in for desktop cards (from left)
      tl.fromTo(
        desktopGridRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
      const desktopCards =
        desktopGridRef.current?.querySelectorAll(
          "[class*='bg-white']"
        );
      if (desktopCards) {
        tl.fromTo(
          desktopCards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }

      // Reveal and stagger slide-in for mobile cards (from bottom, since carousel)
      tl.fromTo(
        mobileCarouselRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
      const mobileCards =
        mobileCarouselRef.current?.querySelectorAll(
          "[class*='min-w-[85%]']"
        );
      if (mobileCards) {
        tl.fromTo(
          mobileCards,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }

      return () => {
        if (headingSplit) headingSplit.revert();
        if (paraSplit) paraSplit.revert();
        ScrollTrigger.getAll().forEach((trigger) =>
          trigger.kill()
        );
      };
    },
    { scope: sectionRef, dependencies: [opportunities] }
  );

  return (
    <section
      ref={sectionRef}
      className="pt-24 pb-6 px-0 lg:px-14 ">
      <div className="">
        {/* Header */}
        <header className="px-5 md:px-8 lg:px-0 flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12">
          <h2
            ref={headingRef}
            className="text-4xl lg:text-[4rem] font-semibold leading-9 lg:leading-16 mb-4 lg:mb-0 overflow-hidden">
            What You Can Get
            <br />
            Done with GigX
          </h2>
          <p
            ref={paraRef}
            className="text-lg lg:text-2xl lg:max-w-xl lg:text-right overflow-hidden">
            From digital marketing to campus activations -
            post quick, skill-based gigs and get them done
            by motivated students who move fast and deliver
            impact.
          </p>
        </header>

        {/* Desktop Grid - Hidden on mobile */}
        <div
          ref={desktopGridRef}
          className="hidden lg:grid lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-4xl py-12 px-8 h-138 2xl:h-142">
              <div className="mb-20 2xl:mb-30 w-18">
                {item.icon}
              </div>
              <h3 className="text-4xl 2xl:text-[2.28rem] font-semibold mb-8 leading-tight">
                {item.title}
              </h3>
              <p className="text-black text-xl 2xl:text-[1.5rem] leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Carousel - Visible only on mobile */}
        <div
          ref={mobileCarouselRef}
          className="lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 pb-4 first:pl-5 last:pr-5">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="min-w-[85%] snap-center">
                <div className="flex flex-col justify-between bg-white aspect-[1/1.4] border border-gray-200 rounded-2xl px-6 py-8">
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

export default ClientDiscoverSection;
