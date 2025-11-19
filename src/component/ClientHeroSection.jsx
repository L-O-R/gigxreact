import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clientHero from "../assets/images/clientHero.png";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ClientHeroSection = () => {
  const gigLink = "https://YOUR_GIG_LINK_HERE";
  const whatsappNumber = "+917559287198";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const desktopStatsRef = useRef(null);
  const mobileStatsRef = useRef(null);

  useGSAP(
    () => {
      // Initially hide entire stat sections (desktop and mobile) - opacity 0
      gsap.set(
        [desktopStatsRef.current, mobileStatsRef.current],
        { opacity: 0 }
      );

      // Collect refs for stats elements inside sections
      const getStatElements = () => {
        const desktopContainers =
          desktopStatsRef.current?.querySelectorAll(
            ".stat-container"
          );
        const desktopNumbers =
          desktopStatsRef.current?.querySelectorAll(
            ".stat-number"
          );
        const desktopTexts =
          desktopStatsRef.current?.querySelectorAll(
            ".stat-text"
          );
        const mobileContainers =
          mobileStatsRef.current?.querySelectorAll(
            ".mobile-stat-container"
          );
        const mobileNumbers =
          mobileStatsRef.current?.querySelectorAll(
            ".mobile-stat-number"
          );
        const mobileTexts =
          mobileStatsRef.current?.querySelectorAll(
            ".mobile-stat-text"
          );
        return {
          desktopContainers,
          desktopNumbers,
          desktopTexts,
          mobileContainers,
          mobileNumbers,
          mobileTexts,
        };
      };

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

      // Main timeline for header sequence with ScrollTrigger
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      headerTl.set(headingRef.current, { opacity: 1 });

      // SplitText for heading
      const splitInstance = new SplitText(
        headingRef.current,
        {
          type: "lines, words",
          linesClass: "split-line",
          wordsClass: "split-word",
        }
      );

      // Animate heading lines from below
      headerTl.from(splitInstance.lines, {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.05,
      });

      // Fade in paragraph overlapping heading
      headerTl.fromTo(
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

      // Fade in buttons following paragraph
      headerTl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            // Reveal and start stat animations immediately after buttons complete
            startStatAnimations(getStatElements());
          },
        },
        "-=0.3"
      );

      // Function to start all stat animations (reveal sections, fade containers including borders, smooth number/text sync)
      const startStatAnimations = ({
        desktopContainers,
        desktopNumbers,
        desktopTexts,
        mobileContainers,
        mobileNumbers,
        mobileTexts,
      }) => {
        const targets = [250000, 10000, 25];

        // Reveal entire stat sections (desktop and mobile) with smooth fade
        gsap.fromTo(
          [desktopStatsRef.current, mobileStatsRef.current],
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              // After section reveal, simultaneously fade inner containers (staggered, includes borders)
              if (desktopContainers) {
                gsap.fromTo(
                  desktopContainers,
                  { opacity: 0, scale: 0.98 },
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "back.out(1.7)", // Smooth bounce for entrance
                  }
                );
              }
              if (mobileContainers) {
                gsap.fromTo(
                  mobileContainers,
                  { opacity: 0, scale: 0.98 },
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "back.out(1.7)",
                  }
                );
              }
            },
          }
        );

        // Synchronized number and text animation: numbers reveal and count with texts for smoothness
        const animateStatItem = (
          numbers,
          texts,
          isDesktop = true
        ) => {
          if (
            numbers &&
            numbers.length === 3 &&
            texts &&
            texts.length === 3
          ) {
            numbers.forEach((num, index) => {
              const target = targets[index];
              const formatFn = (val) => {
                if (target >= 10000)
                  return `${Math.floor(val / 1000)}k+`;
                return `${Math.floor(val)}+`;
              };

              // Initial setup: empty text, opacity 0
              num.textContent = "";
              gsap.set(num, { opacity: 0 });

              // Sync: Start number reveal and counter with text fade (minimal delay 0.3s after section)
              gsap.delayedCall(0.3, () => {
                // Fade in text first (slight lead for balance)
                gsap.fromTo(
                  texts[index],
                  { opacity: 0, y: 8 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                  }
                );

                // Simultaneously reveal number and start counter (overlap with text)
                gsap.fromTo(
                  num,
                  { opacity: 0, y: 8 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    onStart: () => {
                      let currentVal = { val: 0 };
                      gsap.to(currentVal, {
                        val: target,
                        duration: 1.8, // Slightly faster for smoother feel
                        ease: "power2.out",
                        onUpdate: () => {
                          num.textContent = formatFn(
                            currentVal.val
                          );
                        },
                      });
                    },
                  }
                );
              });
            });
          }
        };

        // Trigger synced animations for desktop and mobile
        animateStatItem(desktopNumbers, desktopTexts, true);
        animateStatItem(mobileNumbers, mobileTexts, false);
      };

      // Slide-in animation for image (independent)
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
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
      className="min-h-screen mx-4 sm:mx-8 lg:mx-14">
      <div className="bg-white rounded-4xl mt-7 flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-14 gap-10 py-8">
        <div className="lg:w-[55%] flex flex-col justify-center gap-8">
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-[4.8rem] lg:leading-24 -tracking-[0.11rem] font-medium overflow-hidden">
            Empowering Youth, <br />
            Elevating Brands
          </h1>
          <p
            ref={paraRef}
            className="text-[#7B7B7B] text-lg sm:text-xl lg:text-2xl lg:leading-normal">
            Access a pool of skilled, motivated university
            students ready to take on design, marketing,
            content, and campus projects all in one place.
          </p>
          <div
            ref={buttonsRef}
            className="flex gap-4 items-center mb-6">
            <a
              href={gigLink}
              target="_blank"
              rel="noopener noreferrer">
              <button className="p-4 rounded-lg bg-[#007AFF] flex justify-center items-center gap-1 border border-black cursor-pointer hover:bg-transparent hover:text-black text-white transition-all duration-300 ease-in">
                Post A Gig!
              </button>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer">
              <button className="p-4 rounded-lg bg-transparent flex justify-center items-center gap-1 border border-black cursor-pointer hover:bg-[#007AFF] hover:text-white text-black transition-all duration-300 ease-in">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="w-5 h-5">
                    <g clipPath="url(#clip0_3186_715)">
                      <path
                        d="M17 0C8.7 0 2 6.7 2 15C2 18.4 3.1 21.6 5.2 24.2L3.1 30.6C3 31 3.1 31.4 3.4 31.7C3.5 31.9 3.8 32 4 32C4.1 32 4.3 32 4.4 31.9L11.3 28.8C13.1 29.6 15 30 17 30C25.3 30 32 23.3 32 15C32 6.7 25.3 0 17 0Z"
                        fill="#25D366"
                      />
                      <path
                        d="M25.7 20.5C25.3 21.7 23.8 22.7 22.5 22.9C22.2 23 21.9 23 21.5 23C20.7 23 19.5 22.8 17.4 21.9C15 20.9 12.6 18.8 10.7 16.1V16C10.1 15.1 9 13.4 9 11.6C9 9.4 10.1 8.3 10.5 7.8C11 7.3 11.7 7 12.5 7C12.7 7 12.8 7 13 7C13.7 7 14.2 7.2 14.7 8.2L15.1 9C15.4 9.8 15.8 10.7 15.9 10.8C16.2 11.4 16.2 11.9 15.9 12.4C15.8 12.7 15.6 12.9 15.4 13.1C15.3 13.3 15.2 13.4 15.1 13.4C15 13.5 15 13.5 14.9 13.6C15.2 14.1 15.8 15 16.6 15.7C17.8 16.8 18.7 17.1 19.2 17.3C19.4 17.1 19.6 16.7 19.9 16.4L20 16.2C20.5 15.5 21.3 15.3 22.1 15.6C22.5 15.8 24.7 16.8 24.7 16.8L24.9 16.9C25.2 17.1 25.6 17.2 25.8 17.6C26.2 18.5 25.9 19.8 25.7 20.5Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3186_715">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>Talk to Us</span>
              </button>
            </a>
          </div>
          <div
            ref={desktopStatsRef}
            className="hidden md:flex items-center">
            <div className="stat-container flex flex-col gap-3 border-r border-[#767676] py-3 pr-6">
              <span className="stat-number text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]"></span>
              <span className="stat-text text-lg md:text-2xl text-[#7b7b7b]">
                Gigs Completed
              </span>
            </div>
            <div className="stat-container flex flex-col gap-3 border-r border-[#767676] py-3 px-6">
              <span className="stat-number text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]"></span>
              <span className="stat-text text-lg md:text-2xl text-[#7b7b7b]">
                Students Engaged
              </span>
            </div>
            <div className="stat-container flex flex-col gap-3 py-3 pl-6">
              <span className="stat-number text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]"></span>
              <span className="stat-text text-lg md:text-2xl text-[#7b7b7b]">
                Brands Collaborated
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] flex justify-center items-center lg:px-14">
          <img
            ref={imageRef}
            src={clientHero}
            alt="Empowering Youth"
            width={400}
            height={600}
            loading="eager"
            className="max-w-full w-full h-auto object-cover rounded-4xl"
          />
        </div>
        <div
          ref={mobileStatsRef}
          className="flex md:hidden flex-col gap-4">
          <div className="mobile-stat-container flex flex-col gap-3 border-l-2 border-[#767676] py-3 px-6">
            <span className="mobile-stat-number text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]"></span>
            <span className="mobile-stat-text text-lg md:text-2xl text-[#7b7b7b]">
              Gigs Completed
            </span>
          </div>
          <div className="mobile-stat-container flex flex-col gap-3 border-l-2 border-[#767676] py-3 px-6">
            <span className="mobile-stat-number text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]"></span>
            <span className="mobile-stat-text text-lg md:text-2xl text-[#7b7b7b]">
              Students Engaged
            </span>
          </div>
          <div className="mobile-stat-container flex flex-col gap-3 py-3 px-6 border-l-2 border-[#767676]">
            <span className="mobile-stat-number text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]"></span>
            <span className="mobile-stat-text text-lg md:text-2xl text-[#7b7b7b]">
              Brands Collaborated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHeroSection;
