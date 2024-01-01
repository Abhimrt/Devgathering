"use client";
import Image from "next/image";
import React, { useState } from "react";

const items = [
  {
    Question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta laboriosam unde illo sapiente quas et, fuga quod dolor cumque eaque exercitationem maxime consequuntur quasi, aliquam vitae sunt necessitatibus harum.",
    Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta laboriosam unde illo sapiente quas et, fuga quod dolor cumque eaque exercitationem maxime consequuntur quasi, aliquam vitae sunt necessitatibus harum.",
  },
  {
    Question: "Section 2",
    Answer: "Pellentesque ac ligula in tellus feugiat tincidunt.",
  },
  {
    Question: "Section 3",
    Answer: "Fusce aliquam euismod sem id commodo.",
  },
  {
    Question: "Section 3",
    Answer: "Fusce aliquam euismod sem id commodo.",
  },
  
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section id="faqs  " className="w-screen min-h-screen">
      <div>
        
        <Image
          src="/images/FaqHeading.png"
          className="min-w-[120vw] lg:min-w-[70%] h-auto cursor-pointer"
          alt=""
          width={900}
          height={200}
        />
        {items.map((item, index) => (
          <div key={index} className="mb-2 w-[90vw] mx-auto ">
            <div
              className="flex justify-between items-center p-3 bg-Cblue text-Ccream cursor-pointer rounded-xl drop-shadow-xl"
              onClick={() => handleClick(index)}
            >
              <span className={`text-md font ${activeIndex === index?"opacity-100":"opacity-70"}`}>{item.Question}</span>
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
        ))}
      </div>
    </section>
  );
};

export default Faq;
