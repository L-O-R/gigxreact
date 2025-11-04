import React from "react";
import clientHero from "../assets/images/clientHero.png";
const ClientHeroSection = () => {
  return (
    <section className="min-h-screen  mx-4 sm:mx-8 lg:mx-14">
      <div className="bg-white rounded-4xl mt-7 flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-14 gap-10 py-8">
        <div className="  lg:w-[55%] flex flex-col justify-center gap-8">
          <h1 className="text-4xl md:text-6xl lg:text-[4.8rem] lg:leading-24 -tracking-[0.11rem] font-medium">
            Empowering Youth, <br />
            Elevating Brands
          </h1>
          <p className="text-[#7B7B7B] text-lg sm:text-xl lg:text-2xl lg:leading-normal">
            Access a pool of skilled, motivated university
            students ready to take on design, marketing,
            content, and campus projects all in one place.
          </p>
          <div className="flex gap-4 items-center mb-6">
            <button className="p-4 rounded-lg bg-[#007AFF] flex justify-center items-center gap-1 border border-black  cursor-pointer hover:bg-transparent hover:text-black text-white transition-all duration-300 ease-in ">
              Post A Gig!
            </button>
            <button className="p-4 rounded-lg bg-transparent flex justify-center items-center gap-1 border border-black cursor-pointer hover:bg-[#007AFF] hover:text-white text-black transition-all duration-300 ease-in ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-5 h-5">
                  <g clip-path="url(#clip0_3186_715)">
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
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex flex-col gap-3 border-r border-[#767676] py-3 pr-6 ">
              <span className="text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]">
                250k+
              </span>
              <span className="text-lg md:text-2xl text-[#7b7b7b]">
                Gigs Completed
              </span>
            </div>
            <div className="flex flex-col gap-3 border-r border-[#767676] py-3 px-6">
              <span className="text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]">
                10,000+
              </span>
              <span className="text-lg md:text-2xl text-[#7b7b7b]">
                Students Engaged
              </span>
            </div>
            <div className="flex flex-col gap-3 py-3 pl-6 ">
              <span className="text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]">
                25+
              </span>
              <span className="text-lg md:text-2xl text-[#7b7b7b]">
                Brands Collaborated
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] flex justify-center items-center lg:px-14">
          <img
            src={clientHero}
            alt="Empowering Youth"
            width={400}
            height={600}
            loading="eager"
            className="max-w-full w-full h-auto object-cover rounded-4xl"
          />
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <div className="flex flex-col gap-3 border-l-2 border-[#767676] py-3 px-6 ">
            <span className="text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]">
              250k+
            </span>
            <span className="text-lg md:text-2xl text-[#7b7b7b]">
              Gigs Completed
            </span>
          </div>
          <div className="flex flex-col gap-3 border-l-2 border-[#767676] py-3 px-6">
            <span className="text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]">
              10,000+
            </span>
            <span className="text-lg md:text-2xl text-[#7b7b7b]">
              Students Engaged
            </span>
          </div>
          <div className="flex flex-col gap-3 py-3 px-6  border-l-2 border-[#767676]">
            <span className="text-2xl md:text-[3rem] font-medium -tracking-[0.06rem]">
              25+
            </span>
            <span className="text-lg md:text-2xl text-[#7b7b7b]">
              Brands Collaborated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHeroSection;
