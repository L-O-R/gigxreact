import React from "react";

const ClientDiscoverSection = ({ opportunities = [] }) => {
  return (
    <section className="pt-24 pb-6 px-0 lg:px-14">
      <div className="">
        {/* Header */}
        <header className="px-5 md:px-8 lg:px-0 flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12">
          <h2 className="text-4xl lg:text-[4rem] font-semibold leading-9 lg:leading-16 mb-4 lg:mb-0">
            What You Can Get
            <br />
            Done with GigX
          </h2>
          <p className=" text-lg lg:text-2xl lg:max-w-xl lg:text-right">
            From digital marketing to campus activations -
            post quick, skill-based gigs and get them done
            by motivated students who move fast and deliver
            impact.
          </p>
        </header>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-4xl py-12 px-8 h-142">
              <div className="mb-30 w-18">{item.icon}</div>
              <h3 className="text-[2.28rem] font-semibold mb-8 leading-tight">
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
                className="min-w-[85%]  snap-center">
                <div className="flex flex-col justify-between  bg-white aspect-[1/1.4] border border-gray-200 rounded-2xl px-6 py-8">
                  <div className="mb-16 text-gray-800 w-20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-medium mb-3">
                      {item.title}
                    </h3>
                    <p className=" text-xl leading-relaxed">
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
