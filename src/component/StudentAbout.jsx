import React from "react";
import star from "../assets/images/star.png";
import coin from "../assets/images/coin.png";
import one from "../assets/images/Ellipse1.svg";
import two from "../assets/images/Ellipse2.svg";
import three from "../assets/images/Ellipse3.svg";
const StudentAbout = () => {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative">
      <div className="h-full px-4 md:px-12 lg:px-20 xl:px-28 relative">
        <div className="absolute -top-36 sm:-top-58 right-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-70 lg:h-70">
          <img
            src={star}
            alt="star"
            loading="lazy"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-center mx-auto text-4xl lg:text-[3rem] font-medium leading-11 sm:leading-12 lg:leading-16 -tracking-[0.175rem]">
          GigX started as a way for us to make some money
          without sacrificing our sleep. We turned it into a
          platform where students across the country can
          pick up quick gigs that actually make sense for
          their schedules.
        </p>
        <div className="absolute -bottom-35 -left-6 md:-bottom-65 md:left-10 w-50 h-50 sm:w-70 sm:h-70 lg:w-80 lg:h-80">
          <img
            src={coin}
            alt="star"
            loading="lazy"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 md:bottom-26 left-1/2 -translate-x-1/2">
        <div className="bg-black rounded-[62.4375rem] w-max mx-auto mt-10 px-4 py-5 flex gap-4 items-center ">
          <span className="flex ">
            <img
              src={one}
              alt="one"
              className="w-16 h-16 rounded-full object-contain"
            />
            <img
              src={two}
              alt="one"
              className="w-16 h-16 rounded-full object-contain -ml-5"
            />
            <img
              src={three}
              alt="one"
              className="w-16 h-16 rounded-full object-contain -ml-5"
            />
          </span>
          <span className="text-white text-xl ">
            500+ Students <br /> Earning Now
          </span>
        </div>
      </div>
    </section>
  );
};

export default StudentAbout;
