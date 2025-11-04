import React, { useState, useEffect, useRef } from "react";
import pinkCard from "../assets/images/pinkCard.png";
import purpleCard from "../assets/images/person.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  const cards = [
    {
      id: 1,
      bgColor: "bg-pink-500",
      title: "New gigs everyday",
      type: "phone",
    },
    {
      id: 2,
      bgColor: "bg-orange-500",
      title: "56+",
      subtitle: "Brands ready to team up",
      type: "stat",
    },
    {
      id: 3,
      bgColor: "bg-purple-600",
      type: "image",
    },
  ];

  // Auto-slide for carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  // Intersection Observer for ticker effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current)
        observer.unobserve(countRef.current);
    };
  }, []);

  // Count-up animation when visible
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = 50;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="bg-black min-h-screen flex items-center px-4 xl:px-6 py-12 mx-2 xl:mx-14 mt-6 rounded-2xl">
      <div className="w-full flex flex-col lg:flex-row items-center gap-0">
        {/* Left Side - Text */}
        <div className=" text-white w-full xl:w-[45%] lg:pl-8">
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-normal leading-[110%]">
            Earn between classes.
            <br />
            No cubicles required
          </h1>
        </div>

        {/* Right Side */}
        <div className="w-full xl:w-[55%]">
          {/* Desktop Grid */}
          <div className="hidden xl:grid grid-cols-2 border-white grid-rows-[200px_1fr_1fr] gap-4">
            {/* Pink Card */}
            <div className="bg-[#B6BAFB] rounded-4xl px-8 pt-8 flex flex-col justify-between row-span-2">
              <h2 className="text-[2.75rem] leading-14 font-medium text-black mb-6">
                New gigs everyday
              </h2>
              <div className="flex justify-center items-end flex-1">
                <img
                  src={pinkCard}
                  alt="Phone mockup showing gigs app"
                  className="max-w-full h-auto object-contain pl-8"
                />
              </div>
            </div>

            {/* Purple Card */}
            <div className="bg-[#FFFCEC] rounded-3xl overflow-hidden flex items-start justify-center row-span-3">
              <img
                src={purpleCard}
                alt="Person using phone"
                className="w-full h-full object-fill"
              />
            </div>

            {/* Orange Stat Card (Ticker Effect) */}
            <div
              ref={countRef}
              className="bg-[#FF6D39] rounded-3xl px-5 py-6 flex flex-col justify-center row-span-1">
              <div className="mb-4">
                <div className="w-20 h-20 mt-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    className="w-full h-full object-contain -ml-2"
                    fill="none">
                    <g clip-path="url(#clip0_2515_300)">
                      <path
                        d="M38.3631 11.6861C38.9974 8.87524 43.0026 8.87524 43.6369 11.6861V11.6861C44.1648 14.0258 47.2518 14.5701 48.5481 12.5521V12.5521C50.1055 10.1277 53.8692 11.4975 53.5038 14.3558V14.3558C53.1997 16.735 55.9143 18.3023 57.8226 16.8493V16.8493C60.1153 15.1037 63.1835 17.6783 61.8625 20.2392V20.2392C60.7631 22.3708 62.778 24.7721 65.0681 24.0595V24.0595C67.8196 23.2033 69.8222 26.6719 67.705 28.6267V28.6267C65.9427 30.2537 67.0148 33.1993 69.4106 33.3129V33.3129C72.289 33.4494 72.9845 37.3938 70.3264 38.5065V38.5065C68.114 39.4327 68.114 42.5673 70.3264 43.4935V43.4935C72.9845 44.6062 72.289 48.5506 69.4106 48.6871V48.6871C67.0149 48.8007 65.9427 51.7463 67.705 53.3733V53.3733C69.8222 55.3281 67.8196 58.7967 65.0681 57.9405V57.9405C62.778 57.2279 60.7631 59.6292 61.8625 61.7608V61.7608C63.1835 64.3217 60.1153 66.8963 57.8226 65.1507V65.1507C55.9143 63.6977 53.1997 65.265 53.5038 67.6442V67.6442C53.8692 70.5025 50.1055 71.8723 48.5481 69.4479V69.4479C47.2518 67.4299 44.1648 67.9742 43.6369 70.3139V70.3139C43.0026 73.1248 38.9974 73.1248 38.3631 70.3139V70.3139C37.8352 67.9742 34.7482 67.4299 33.4519 69.4479V69.4479C31.8945 71.8723 28.1308 70.5025 28.4962 67.6442V67.6442C28.8003 65.265 26.0857 63.6977 24.1774 65.1507V65.1507C21.8847 66.8963 18.8165 64.3217 20.1375 61.7608V61.7608C21.2369 59.6292 19.222 57.2279 16.9319 57.9405V57.9405C14.1804 58.7967 12.1778 55.3281 14.295 53.3733V53.3733C16.0573 51.7463 14.9851 48.8007 12.5894 48.6871V48.6871C9.71103 48.5506 9.01553 44.6062 11.6736 43.4935V43.4935C13.886 42.5673 13.886 39.4327 11.6736 38.5065V38.5065C9.01553 37.3938 9.71103 33.4494 12.5894 33.3129V33.3129C14.9852 33.1993 16.0573 30.2537 14.295 28.6267V28.6267C12.1778 26.6719 14.1804 23.2033 16.9319 24.0595V24.0595C19.222 24.7721 21.2369 22.3708 20.1375 20.2392V20.2392C18.8165 17.6783 21.8847 15.1037 24.1774 16.8493V16.8493C26.0857 18.3023 28.8003 16.735 28.4962 14.3558V14.3558C28.1308 11.4975 31.8945 10.1277 33.4519 12.5521V12.5521C34.7482 14.5701 37.8352 14.0258 38.3631 11.6861V11.6861Z"
                        stroke="black"
                        stroke-width="1.6"
                      />
                      <path
                        d="M41.0001 33.5823L40.275 34.2786C40.4647 34.4752 40.7265 34.5863 41.0001 34.5863C41.2738 34.5863 41.5356 34.4752 41.7253 34.2786L41.0001 33.5823ZM37.546 50.7467C35.5121 49.1471 33.2881 47.5851 31.5237 45.6031C29.7938 43.6598 28.5871 41.3923 28.5871 38.4506H26.5742C26.5742 42.019 28.0645 44.7413 30.0186 46.9365C31.9383 49.0929 34.3854 50.818 36.2999 52.3237L37.546 50.7467ZM28.5871 38.4506C28.5871 35.5711 30.2181 33.1564 32.4444 32.1412C34.6072 31.1549 37.5133 31.4161 40.275 34.2786L41.7253 32.886C38.4484 29.4896 34.6448 28.9298 31.6075 30.3148C28.6337 31.6709 26.5742 34.8198 26.5742 38.4506H28.5871ZM36.2999 52.3237C36.9873 52.8643 37.7252 53.4408 38.473 53.8766C39.2206 54.3124 40.0737 54.6666 41.0001 54.6666V52.6585C40.5847 52.6585 40.0958 52.4969 39.4886 52.1428C38.8816 51.789 38.2519 51.3018 37.546 50.7467L36.2999 52.3237ZM45.7004 52.3237C47.6149 50.818 50.062 49.0929 51.9817 46.9365C53.9358 44.7413 55.4261 42.019 55.4261 38.4506H53.4132C53.4132 41.3923 52.2065 43.6598 50.4766 45.6031C48.7122 47.5851 46.4882 49.1471 44.4543 50.7467L45.7004 52.3237ZM55.4261 38.4506C55.4261 34.8198 53.3666 31.6709 50.3927 30.3148C47.3555 28.9298 43.5519 29.4896 40.275 32.886L41.7253 34.2786C44.4869 31.4161 47.393 31.1549 49.5559 32.1412C51.7822 33.1564 53.4132 35.5711 53.4132 38.4506H55.4261ZM44.4543 50.7467C43.7483 51.3018 43.1187 51.789 42.5117 52.1428C41.9045 52.4969 41.4156 52.6585 41.0001 52.6585V54.6666C41.9266 54.6666 42.7797 54.3124 43.5273 53.8766C44.2752 53.4408 45.013 52.8643 45.7004 52.3237L44.4543 50.7467Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2515_300">
                        <rect
                          width="82"
                          height="82"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <h2 className="text-8xl font-medium text-black mb-2">
                {count}+
              </h2>
              <p className="text-4xl font-normal text-black">
                Brands ready to team up
              </p>
            </div>
          </div>

          {/* Mobile/Tablet View (lg and below) - Carousel */}
          <div className="xl:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * 100
                }%)`,
              }}>
              {/* Slide 1 - Pink Card */}
              <div className="w-full shrink-0 px-2 overflow-hidden">
                <div className="bg-[#B6BAFB] rounded-3xl px-8 pt-8 h-[500px] flex flex-col justify-between">
                  <h2 className="text-3xl font-semibold text-black mb-6">
                    New gigs everyday
                  </h2>
                  <div className="flex justify-center items-end flex-1">
                    <img
                      src={pinkCard}
                      alt="Phone mockup showing gigs app"
                      className="max-w-full h-auto object-contain pl-6"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 2 - Orange Card */}
              <div className="w-full shrink-0 px-2">
                <div className="bg-[#FF6D39] rounded-3xl p-8 h-[500px] flex flex-col justify-center gap-10">
                  <div className="mb-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="82"
                        height="82"
                        viewBox="0 0 82 82"
                        className="w-full h-full -ml-2"
                        fill="none">
                        <g clip-path="url(#clip0_2515_300)">
                          <path
                            d="M38.3631 11.6861C38.9974 8.87524 43.0026 8.87524 43.6369 11.6861V11.6861C44.1648 14.0258 47.2518 14.5701 48.5481 12.5521V12.5521C50.1055 10.1277 53.8692 11.4975 53.5038 14.3558V14.3558C53.1997 16.735 55.9143 18.3023 57.8226 16.8493V16.8493C60.1153 15.1037 63.1835 17.6783 61.8625 20.2392V20.2392C60.7631 22.3708 62.778 24.7721 65.0681 24.0595V24.0595C67.8196 23.2033 69.8222 26.6719 67.705 28.6267V28.6267C65.9427 30.2537 67.0148 33.1993 69.4106 33.3129V33.3129C72.289 33.4494 72.9845 37.3938 70.3264 38.5065V38.5065C68.114 39.4327 68.114 42.5673 70.3264 43.4935V43.4935C72.9845 44.6062 72.289 48.5506 69.4106 48.6871V48.6871C67.0149 48.8007 65.9427 51.7463 67.705 53.3733V53.3733C69.8222 55.3281 67.8196 58.7967 65.0681 57.9405V57.9405C62.778 57.2279 60.7631 59.6292 61.8625 61.7608V61.7608C63.1835 64.3217 60.1153 66.8963 57.8226 65.1507V65.1507C55.9143 63.6977 53.1997 65.265 53.5038 67.6442V67.6442C53.8692 70.5025 50.1055 71.8723 48.5481 69.4479V69.4479C47.2518 67.4299 44.1648 67.9742 43.6369 70.3139V70.3139C43.0026 73.1248 38.9974 73.1248 38.3631 70.3139V70.3139C37.8352 67.9742 34.7482 67.4299 33.4519 69.4479V69.4479C31.8945 71.8723 28.1308 70.5025 28.4962 67.6442V67.6442C28.8003 65.265 26.0857 63.6977 24.1774 65.1507V65.1507C21.8847 66.8963 18.8165 64.3217 20.1375 61.7608V61.7608C21.2369 59.6292 19.222 57.2279 16.9319 57.9405V57.9405C14.1804 58.7967 12.1778 55.3281 14.295 53.3733V53.3733C16.0573 51.7463 14.9851 48.8007 12.5894 48.6871V48.6871C9.71103 48.5506 9.01553 44.6062 11.6736 43.4935V43.4935C13.886 42.5673 13.886 39.4327 11.6736 38.5065V38.5065C9.01553 37.3938 9.71103 33.4494 12.5894 33.3129V33.3129C14.9852 33.1993 16.0573 30.2537 14.295 28.6267V28.6267C12.1778 26.6719 14.1804 23.2033 16.9319 24.0595V24.0595C19.222 24.7721 21.2369 22.3708 20.1375 20.2392V20.2392C18.8165 17.6783 21.8847 15.1037 24.1774 16.8493V16.8493C26.0857 18.3023 28.8003 16.735 28.4962 14.3558V14.3558C28.1308 11.4975 31.8945 10.1277 33.4519 12.5521V12.5521C34.7482 14.5701 37.8352 14.0258 38.3631 11.6861V11.6861Z"
                            stroke="black"
                            stroke-width="1.6"
                          />
                          <path
                            d="M41.0001 33.5823L40.275 34.2786C40.4647 34.4752 40.7265 34.5863 41.0001 34.5863C41.2738 34.5863 41.5356 34.4752 41.7253 34.2786L41.0001 33.5823ZM37.546 50.7467C35.5121 49.1471 33.2881 47.5851 31.5237 45.6031C29.7938 43.6598 28.5871 41.3923 28.5871 38.4506H26.5742C26.5742 42.019 28.0645 44.7413 30.0186 46.9365C31.9383 49.0929 34.3854 50.818 36.2999 52.3237L37.546 50.7467ZM28.5871 38.4506C28.5871 35.5711 30.2181 33.1564 32.4444 32.1412C34.6072 31.1549 37.5133 31.4161 40.275 34.2786L41.7253 32.886C38.4484 29.4896 34.6448 28.9298 31.6075 30.3148C28.6337 31.6709 26.5742 34.8198 26.5742 38.4506H28.5871ZM36.2999 52.3237C36.9873 52.8643 37.7252 53.4408 38.473 53.8766C39.2206 54.3124 40.0737 54.6666 41.0001 54.6666V52.6585C40.5847 52.6585 40.0958 52.4969 39.4886 52.1428C38.8816 51.789 38.2519 51.3018 37.546 50.7467L36.2999 52.3237ZM45.7004 52.3237C47.6149 50.818 50.062 49.0929 51.9817 46.9365C53.9358 44.7413 55.4261 42.019 55.4261 38.4506H53.4132C53.4132 41.3923 52.2065 43.6598 50.4766 45.6031C48.7122 47.5851 46.4882 49.1471 44.4543 50.7467L45.7004 52.3237ZM55.4261 38.4506C55.4261 34.8198 53.3666 31.6709 50.3927 30.3148C47.3555 28.9298 43.5519 29.4896 40.275 32.886L41.7253 34.2786C44.4869 31.4161 47.393 31.1549 49.5559 32.1412C51.7822 33.1564 53.4132 35.5711 53.4132 38.4506H55.4261ZM44.4543 50.7467C43.7483 51.3018 43.1187 51.789 42.5117 52.1428C41.9045 52.4969 41.4156 52.6585 41.0001 52.6585V54.6666C41.9266 54.6666 42.7797 54.3124 43.5273 53.8766C44.2752 53.4408 45.013 52.8643 45.7004 52.3237L44.4543 50.7467Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2515_300">
                            <rect
                              width="82"
                              height="82"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-6xl font-semibold text-black mb-2">
                      56+
                    </h2>
                    <p className="text-3xl font-normal text-black">
                      Brands ready to team up
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide 3 - Purple Card */}
              <div className="w-full shrink-0 px-2">
                <div className="bg-[#FFFCEC] rounded-3xl overflow-hidden h-[500px] flex items-end justify-center">
                  {/* Replace with your actual person image */}
                  <img
                    src={purpleCard}
                    alt="ID Card"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white w-8"
                      : "bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
