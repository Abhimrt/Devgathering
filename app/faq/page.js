"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaqsData } from "@/components/Data";
import Nav from "@/components/Nav";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
    <Nav/>
        <section
      id="faqs"
      className="w-screen min-h-screen flex flex-col items-center space-y-10 pt-36"
    >
      <div >
        <div className="w-screen">
        <Image
          src="/images/FaqHeading.png"
          className="min-w-[130vw] lg:min-w-[70%]  relative -left-5 h-auto cursor-pointer"
          alt=""
          width={900}
          height={200}
        />
        </div>
        {FaqsData.map((item, index) => {
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
    </section>
    </>
  );
};

export default page;
