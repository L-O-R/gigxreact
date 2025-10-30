import React, { useState } from "react";
import faqBanner from "../assets/images/faqBanner.png";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is GigX?",
      answer:
        "GigX is a platform that connects students with gig opportunities, allowing them to earn money while gaining valuable experience. It provides a seamless way to find, apply, and complete various tasks and projects.",
    },
    {
      question: "Do I need prior experience to take gigs",
      answer:
        "No, you don't need prior experience to take gigs. Many opportunities are designed for beginners, and you can learn while earning. Just browse through available gigs and choose ones that match your skill level.",
    },
    {
      question: "How do I get paid after completing a gig?",
      answer:
        "After completing a gig and getting it approved, the payment is processed directly to your GigX wallet. You can then withdraw your earnings to your bank account or UPI.",
    },
    {
      question: "Are the gigs remote or on-campus?",
      answer:
        "GigX offers both remote and on-campus opportunities. You can filter gigs based on your preference and location. Remote gigs give you flexibility to work from anywhere.",
    },
    {
      question: "Is GigX free to join?",
      answer:
        "Yes, GigX is completely free to join. There are no registration fees or hidden charges. You can create your profile and start applying for gigs immediately.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-16 px-5 sm:px-8 lg:px-14">
      <div className="mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 lg:mb-12">
          FAQs
        </h1>
        <div className="grid lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-start">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full ">
              <img
                src={faqBanner}
                alt="GigX App Interface"
                className="w-full h-auto rounded-4xl"
              />
            </div>
          </div>

          {/* Right side - FAQs */}
          <div className="w-full lg:pr-12">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-[1.35rem] sm:text-xl lg:text-[1.75rem] font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>

                    {/* Plus/Cross Icon */}
                    <div className="shrink-0 w-6 h-6 relative">
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                          openIndex === index
                            ? "rotate-225"
                            : "rotate-0"
                        }`}>
                        <svg
                          className="w-8 h-8 text-gray-900"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Answer Div */}
                  <div
                    className={`overflow-hidden transition-all duration-600 ease-linear ${
                      openIndex === index
                        ? "max-h-100 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}>
                    <div className="px-6 pb-5 pt-2">
                      <p className=" text-[1.2rem] lg:text-xl leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
