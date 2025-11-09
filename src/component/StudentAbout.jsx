import one from "../assets/images/studentAbout.png";
import two from "../assets/images/studentAboutM.png";

const StudentAbout = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative  lg:px-14 gap-14 py-16 lg:py-24">
      <header>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl lg:leading-[120%] font-semibold px-5 sm:px-8 lg:px-0">
          We built GigX so every student can earn, learn,
          and grow on their own schedule
        </h2>
      </header>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 ">
        <div className="lg:w-2/3">
          <img
            src={one}
            loading="lazy"
            alt="10,000 Students Earning"
            width={600}
            height={400}
            className="hidden rounded-4xl lg:inline-block w-full h-full object-cover"
          />
          <img
            src={two}
            loading="lazy"
            alt="10,000 Students Earning"
            width={320}
            height={450}
            className="inline-block lg:hidden w-full h-full object-cover pr-5 sm:pr-8"
          />
        </div>
        <div className="lg:w-1/3 flex flex-col items-start gap-4 px-5 sm:px-8 lg:px-0">
          <span className="hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              className="w-14 h-14"
              fill="none">
              <mask
                id="mask0_3289_510"
                style={{ "mask-type": "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="58"
                height="58">
                <rect
                  width="58"
                  height="58"
                  transform="matrix(1 0 0 -1 0 58)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_3289_510)">
                <path
                  d="M15.4673 14.5003L12.084 17.8837L35.284 41.0837H14.5007V45.917H43.5006V16.917H38.6673V37.7003L15.4673 14.5003Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </span>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal lg:leading-[130%] -tracking-[0.075rem]">
            GigX started as a way for us to make some money
            without sacrificing our sleep. We turned it into
            a platform where students across the country can
            pick up quick gigs that actually make sense for
            their schedules.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentAbout;
