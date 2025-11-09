import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import one from "../assets/images/client11.png";
import two from "../assets/images/client22.png";
import three from "../assets/images/client33.png";
import StepSection from "./ui/LaptopScrollAnimation";

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
          className="text-center text-lg lg:text-xl ">
          From signup to live results manage your student
          campaigns seamlessly with GigX.
        </p>
      </header>
      <div>
        <StepSection />
      </div>
    </section>
  );
};

export default ClientCard;
