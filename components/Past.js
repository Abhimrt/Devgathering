"use client"
import Image from "next/image";
import React, { useRef, useState } from "react";

const Past = () => {
  const [Src, setSrc] = useState("/images/PastFirst.JPG")
  const FullImage = useRef("")

  const toggle = (e) => {
    if (e != "") setSrc(e.target.getAttribute('src'))

    FullImage.current.classList.toggle("hidden")
  }

  return (
    <section id="past" className="min-h-fit " style={{ background: "linear-gradient(to bottom, transparent,var(--Cblue),var(--Cblue),var(--Cblue)" }}>
      <Image
        src="/images/PastWaves.png"
        className="w-screen mt-8"
        width={1000}
        height={200}
        alt=""
      />
      <div className="w-screen h-auto   bg-Cblue relative -top-10 flex justify-start items-center flex-col">
        <h2
          className="text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold text-Corange pb-10 pt-10 lg:pt-0 relative lg:-top-10"
          style={{ textShadow: "4px 4px 8px black" }}
        >
          {" "}
          Past Events
        </h2>
        <div className="w-screen space-y-5 lg:space-y-10 pb-10 ">
          <Image
            src="/images/PastFirst.JPG"
            width={1000}
            height={200}
            className="w-screen border-2 lg:border-4 border-Corange rounded-2xl cursor-pointer"
            onClick={(e) => toggle(e)}
            alt=""
          />

          <div className="flex justify-between items-center w-[95vw] mx-auto  overflow-hidden">
            <Image
              src="/images/PastSecond.jpg"
              width={400}
              height={400}
              className="w-[48%] border-2 lg:border-4 border-Corange rounded-2xl cursor-pointer"
              onClick={(e) => toggle(e)}
              alt=""
            />
            <Image
              src="/images/PastThird.jpg"
              width={400}
              height={400}
              className="w-[48%] border-2 lg:border-4 border-Corange rounded-2xl cursor-pointer"
              onClick={(e) => toggle(e)}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center w-[90vw] mx-auto  overflow-hidden">
            <Image
              src="/images/PastFour.jpg"
              width={400}
              height={400}
              className="w-[32%] border-2 lg:border-4 border-Corange rounded-2xl cursor-pointer"
              onClick={(e) => toggle(e)}
              alt=""
            />
            <Image
              src="/images/PastFive.jpg"
              width={400}
              height={400}
              className="w-[32%] border-2 lg:border-4 border-Corange rounded-2xl cursor-pointer"
              onClick={(e) => toggle(e)}
              alt=""
            />
            <Image
              src="/images/PastSix.jpg"
              width={400}
              height={400}
              className="w-[32%] border-2 lg:border-4 border-Corange rounded-2xl cursor-pointer"
              onClick={(e) => toggle(e)}
              alt=""
            />
          </div>

          <div className="flex justify-end items-center w-[90vw] mx-auto space-x-10 relative ">
            <Image
              src="/images/PastSeven.jpg"
              width={400}
              height={400}
              className="w-[34vw] lg:w-[33vw] relative -right-[70px] sm:-right-24 lg:-right-28  border-2 lg:border-4 border-Corange  rounded-full drop-shadow-xl  cursor-pointer"
              onClick={(e) => toggle(e)}
              alt=""
            />
            <Image
              src="/images/PastEight.jpg"
              width={400}
              height={400}
              className="min-w-[65vw] lg:min-w-[60vw] border-2 lg:border-4 border-Corange rounded-2xl  cursor-pointer"
              onClick={(e) => toggle(e)}
              alt=""
            />
          </div>
        </div>
        <hr className="w-[90vw] h-3 lg:h-5 border-0 bg-Corange rounded-xl" />
        <Image
          src="/images/PastArrow.png"
          className=" w-[5vw] lg:w-[3vw] h-auto pt-5 animate-bounce"
          width={50}
          height={50}
          alt=""
        />
      </div>
      {/* on click open image */}
      <div ref={FullImage} className="w-screen h-screen bg-Ccream bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 fixed top-0 z-40 flex justify-center items-center lg:pt-[110px] hidden" >
        <div className="w-screen h-screen fixed top-0 " onClick={() => toggle("")}></div>
        <Image
          src={Src}
          width={1500}
          height={800}
          className="w-[90%] lg:w-auto lg:h-[75vh] border-2 lg:border-4 border-Corange rounded-2xl shadow-2xl z-50"
          alt=""
        />
      </div>
    </section>
  );
};

export default Past;
