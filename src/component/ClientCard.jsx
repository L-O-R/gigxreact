import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import one from "../assets/images/client11.png";
import two from "../assets/images/client22.png";
import three from "../assets/images/client33.png";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ClientCard = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useGSAP(
    () => {
      // Initially hide elements
      gsap.set(
        [
          headingRef.current,
          paraRef.current,
          cardsContainerRef.current,
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

      // Animate paragraph fade in with y-shift
      tl.fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Reveal container
      tl.fromTo(
        cardsContainerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Stagger slide-in for cards (from left)
      const cards =
        cardsContainerRef.current?.querySelectorAll(
          "[class*='bg-white']"
        );
      if (cards && cards.length === 3) {
        tl.fromTo(
          cards,
          { x: -80, opacity: 0, scale: 0.95 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.6"
        );

        // Within each card, stagger inner elements: step, h3 with SplitText, p, image
        cards.forEach((card, index) => {
          const step = card.querySelector(
            "span[class*='text-xl']"
          );
          const title = card.querySelector("h3");
          const desc = card.querySelector(
            "p[class*='text-lg']"
          );
          const img = card.querySelector("img");

          const cardTl = gsap.timeline({
            delay: index * 0.2 + 0.3,
          });

          if (step) {
            cardTl.fromTo(
              step,
              { opacity: 0, y: 15 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              }
            );
          }

          if (title) {
            const titleSplit = new SplitText(title, {
              type: "lines",
              linesClass: "split-line",
            });
            cardTl.from(titleSplit.lines, {
              duration: 0.6,
              y: 60,
              opacity: 0,
              stagger: 0.04,
              ease: "power2.out",
            });
          }

          if (desc) {
            cardTl.fromTo(
              desc,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.3"
            );
          }

          if (img) {
            cardTl.fromTo(
              img,
              { scale: 1.1, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.4"
            );
          }
        });
      }

      return () => {
        if (headingSplit) headingSplit.revert();
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
      <header className="lg:text-center">
        <h2
          ref={headingRef}
          className="text-4xl lg:text-[4rem] font-semibold mb-4 overflow-hidden">
          Launch. Collaborate. Track.
        </h2>
        <p
          ref={paraRef}
          className="text-center text-lg lg:text-xl overflow-hidden">
          From signup to live results manage your student
          campaigns seamlessly with GigX.
        </p>
      </header>
      <div
        ref={cardsContainerRef}
        className="flex max-lg:flex-wrap gap-10 mt-14">
        <div className="overflow-y-hidden w-full h-154 lg:h-175 flex flex-col justify-between bg-white rounded-4xl pl-10 pt-14 aspect-586/733">
          <div className="pr-10 mb-14">
            <span className="text-xl text-[#8A8A8E] font-normal leading-relaxed">
              Step 1
            </span>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight mb-6 overflow-hidden">
              Sign up on GigX and set up your brand profile
            </h3>
            <p className="text-lg text-[#7B7B7B]">
              Access a dashboard built to help you launch
              and manage student-powered gigs with ease
            </p>
          </div>
          <div className="w-full h-full flex items-end relative">
            <img
              src={one}
              alt="one"
              className="w-full h-96 object-cover z-10 rounded-tl-lg"
            />
          </div>
        </div>
        <div className="overflow-y-hidden w-full h-154 lg:h-175 flex flex-col justify-between bg-white rounded-4xl pl-10 pt-14 aspect-586/733">
          <div className="pr-10 mb-14">
            <span className="text-xl text-[#8A8A8E] font-normal leading-relaxed">
              Step 2
            </span>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight mb-6 overflow-hidden">
              Add your brief, goal, and assets
            </h3>
            <p className="text-lg text-[#7B7B7B]">
              Define your goal whether it's product trials,
              content creation, or campus buzz.
            </p>
          </div>
          <div className="w-full h-full flex items-end relative">
            <img
              src={two}
              alt="one"
              className="w-full h-96 object-cover z-10 rounded-tl-lg"
            />
          </div>
        </div>
        <div className="overflow-y-hidden w-full h-154 lg:h-175 flex flex-col justify-between bg-white rounded-4xl pl-10 pt-14 aspect-586/733">
          <div className="pr-10 mb-6.5">
            <span className="text-xl text-[#8A8A8E] font-normal leading-relaxed">
              Step 3
            </span>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight mb-6 overflow-hidden">
              Monitor every stage in real time
            </h3>
            <p className="text-lg text-[#7B7B7B]">
              Track participation, content performance, and
              engagement metrics all from your GigX
              dashboard, built for clarity and insight.
            </p>
          </div>
          <div className="w-full h-full flex items-end relative">
            <img
              src={three}
              alt="one"
              className="w-full h-96 object-cover z-10 rounded-tl-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCard;
