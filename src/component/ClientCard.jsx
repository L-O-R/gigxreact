import React from "react";
import one from "../assets/images/client1.png";
import two from "../assets/images/client2.png";
import three from "../assets/images/client3.png";

const data = [
  {
    id: 1,
    title:
      "Manage every gig and campaign from one unified GigX dashboard.",
    img: one,
  },
  {
    id: 2,
    title:
      "Connect with 100K+ students across active campus communities.",
    img: two,
  },
  {
    id: 3,
    title:
      "Join our growing network of 800+ colleges nationwide",
    img: three,
  },
];

const ClientCard = () => {
  return (
    <section className="px-5 md:px-8 lg:px-14 pb-24">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className=" min-h-100 lg:min-h-150 w-full lg:w-[calc(100%/3-14px)] bg-white rounded-4xl p-4">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
              <p className="mt-4 text-2xl md:text-[2.2rem] font-semibold leading-tight md:leading-[128%]">
                {item.title}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ClientCard;
