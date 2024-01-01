import Image from "next/image";
import React from "react";

const Past = () => {
  return (
    <section id="past" className="min-h-fit " style={{background:"linear-gradient(to bottom, transparent,var(--Cblue),var(--Cblue),var(--Cblue)"}}>
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
        <div className="w-screen space-y-5 lg:space-y-10 pb-10">
          <Image
            src="/images/PastFirst.png"
            width={1000}
            height={200}
            className="w-screen"
            alt=""
          />

          <div className="flex justify-between items-center w-[90vw] mx-auto  overflow-hidden">
            <Image
              src="/images/PastSecond.png"
              width={400}
              height={400}
              className="w-[30%]"
              alt=""
            />
            <Image
              src="/images/PastThird.png"
              width={400}
              height={400}
              className="w-[30%]"
              alt=""
            />
            <Image
              src="/images/PastFour.png"
              width={400}
              height={400}
              className="w-[30%]"
              alt=""
            />
          </div>

          <div className="flex justify-end items-center w-[90vw] mx-auto space-x-10 relative ">
            <Image
              src="/images/PastFive.png"
              width={400}
              height={400}
              className="w-[38vw] lg:w-[35vw] relative -right-20 sm:-right-24 lg:-right-28"
              alt=""
            />
            <Image
              src="/images/PastSix.png"
              width={400}
              height={400}
              className="min-w-[65vw] lg:min-w-[60vw]"
              alt=""
            />
          </div>
        </div>
        <hr className="w-[90vw] h-3 lg:h-5 border-0 bg-Corange rounded-xl" />
        <Image
          src="/images/PastArrow.png"
          className=" w-[5vw] lg:w-[3vw] h-auto pt-5"
          width={50}
          height={50}
          alt=""
        />
      </div>
    </section>
  );
};

export default Past;
