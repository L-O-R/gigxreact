import React from "react";
import one from "../assets/images/client11.png";
import two from "../assets/images/client22.png";
import three from "../assets/images/client33.png";

const ClientCard = () => {
  return (
    <section className="min-h-screen px-5 sm:px-8 lg:px-14 py-10">
      <header className="lg:text-center">
        <h2 className=" text-4xl lg:text-[4rem] font-semibold mb-4">
          Launch. Collaborate. Track.
        </h2>
        <p className="text-center text-lg lg:text-xl ">
          From signup to live results manage your student
          campaigns seamlessly with GigX.
        </p>
      </header>
      <div className="flex max-lg:flex-wrap gap-10 mt-14 ">
        <div className="overflow-y-hidden w-full h-154 lg:h-175 flex flex-col justify-between bg-white rounded-4xl pl-10 pt-14 aspect-586/733">
          <div className="pr-10 mb-14">
            <span className="text-xl text-[#8A8A8E] font-normal leading-relaxed">
              Step 1
            </span>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight mb-6">
              Sign up on GigX and set up your brand profile
            </h3>
            <p className="text-lg text-[#7B7B7B]">
              Access a dashboard built to help you launch
              and manage student-powered gigs with ease
            </p>
          </div>
          <div className="w-full h-full 1 flex items-end relative">
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
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight mb-6">
              Add your brief, goal, and assets
            </h3>
            <p className="text-lg  text-[#7B7B7B]">
              Define your goal whether it's product trials,
              content creation, or campus buzz.
            </p>
          </div>
          <div className="w-full h-full  flex items-end relative">
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
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight mb-6">
              Monitor every stage in real time
            </h3>
            <p className="text-lg  text-[#7B7B7B]">
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
