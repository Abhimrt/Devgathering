"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaqsData } from "./Data";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section
      id="faqs"
      className="w-screen min-h-screen flex flex-col mb-12 lg:mb-2 items-center space-y-10"
    >
      <div>
        <Image
          src="/images/FaqHeading.png"
          className="min-w-[120vw] lg:min-w-[70%] h-auto cursor-pointer"
          alt=""
          width={900}
          height={200}
        />
        {FaqsData.map((item, index) => {
          if (index >= 7) return;
          return (
            <div key={index} className="mb-2 w-[90vw] mx-auto ">
              <div
                className="flex justify-between items-center p-3 bg-Cblue text-Ccream cursor-pointer rounded-xl drop-shadow-xl"
                onClick={() => handleClick(index)}
              >
                <span
                  className={`text-md font ${
                    activeIndex === index ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {item.Question}
                </span>
                <span className="text-Ccream">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="text-md w-[95%] lg:w-[98%] mx-auto p-3 bg-Cblack-50 text-Cblue rounded-b-xl border-2 border-Cblue drop-shadow-xl border-t-0 relative -top-2 ">
                  {item.Answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Link
        href={"/faq"}
        className={`drop-shadow-lg font-semibold tracking-widest bg-Cblue px-10 py-2 text-Corange rounded-full flex justify-center items-center gap-3 `}
      >
        Explore More FAQs <FaAnglesRight className="animate-bounceR" />
      </Link>
    </section>
  );
};

export default Faq;
