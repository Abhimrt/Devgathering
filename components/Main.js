"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Main = () => {
  const [day, setDay] = useState("-");
  const [hour, setHour] = useState('-');
  const [minute, setMinute] = useState('-');
  const [second, setSecond] = useState('-');

  //competition date
  const date = Math.abs((new Date(2024, 2, 15).getTime() / 1000).toFixed(0));

  useEffect(() => {
    function displayTimeLeft() {
      const now = Math.abs((new Date().getTime() / 1000).toFixed(0));
      const diff = date - now;

      const days = Math.floor(diff / 86400);
      const hours = Math.floor(diff / 3600) % 24;
      const minutes = Math.floor(diff / 60) % 60;
      const seconds = diff % 60;
      setDay(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
    }

    setInterval(() => {
      displayTimeLeft();
    }, 1000);
  }, []);

  return (
    <section
      id="main"
      className="h-[100svh] overflow-hidden relative flex justify-center items-center flex-col "
    >
      <Image
        src="/images/mainMesh.png"
        alt=""
        className="h-screen w-auto absolute top-0 left-0  hidden lg:block "
        width={1920}
        height={1000}
      />
      <Image
        src="/images/mainMesh.png"
        alt=""
        className="h-screen w-auto absolute top-0 right-0 hidden lg:block rotate-180"
        width={1920}
        height={1000}
      />

      <Image
        src="/images/mainMeshMobile.png"
        alt=""
        className="h-auto w-screen absolute top-0 md:top-[-30%]  right-0 block lg:hidden z-[-1]"
        width={1920}
        height={1000}
      />
      <Image
        src="/images/mainMeshMobile.png"
        alt=""
        className="h-auto w-screen  absolute bottom-0 md:bottom-[-30%] rotate-180 right-0 block lg:hidden -z-[1] opacity-90"
        width={1920}
        height={1000}
      />

      <Image
        src="/images/mainsection.png"
        alt=""
        className="mainSectionImage z-[-1] h-auto min-w-[400vw] md:min-w-[200vw] lg:min-w-[150vw] xl:min-w-[110vw] absolute bottom-0 md:top-0 lg:bottom-auto "
        width={1920}
        height={1000}
      />

      <h2 className="text-Cblue drop-shadow-md text-center font-semibold uppercase tracking-[3px] lg:tracking-[4px] text-sm lg:text-lg">
        First ever hackathon of mlsa miet
      </h2>
      <h1 className="text-white uppercase cursor-pointer tracking-widest text-5xl lg:text-7xl font-extrabold py-10 text-center ">
        Dev <br className="lg:hidden" /> Gathering '24
      </h1>
      <h2 className="text-Cblue capitalize tracking-widest text-lg text-center ">
        32 Hours Offline Hackathon <br /> March 15 to March 17
      </h2>
      <div className="lg:space-x-5 space-y-5 w-[80vw] lg:w-auto mt-5 lg:mt-10 flex flex-col items-center lg:block ">
        <a
          href={"#"}
          className={`drop-shadow-lg text-nowrap font-semibold tracking-widest bg-Cblue px-8 lg:px-28 py-3 text-Corange rounded-full `}
        >
          Registrations Open Soon...
        </a>
        <Link
          href="#faqs"
          className={`drop-shadow-lg font-semibold tracking-widest text-nowrap text-center px-28 lg:px-48 py-2 text-Cblue text-xl border-2 border-Cblue rounded-full  bg-gray-500 backdrop-blur-lg bg-opacity-10 `}
        >
          See FAQs
        </Link>
      </div>

      {/* timer */}
      <div className="timer animate-pulse space-x-5 absolute bottom-3 lg:bottom-16 flex scale-75 md:scale-90 lg:scale-100 ">
        <div className="days">
          {" "}
          {day}
          <div>days</div>
        </div>
        <div className="hours ">
          {hour} <div>hours</div>{" "}
        </div>
        <div className="minutes">
          {" "}
          {minute} <div>minutes</div>
        </div>
        <div className="seconds">
          {second} <div>seconds</div>
        </div>
      </div>
    </section>
  );
};

export default Main;
