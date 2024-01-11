"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import Link from "next/link";

const link = [
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Why Participate?",
    link: "/#participate",
  },
  {
    name: "Event Schedule",
    link: "/#event",
  },
  {
    name: "Problem Statement",
    link: "/#about",
  },
  {
    name: "Past Events",
    link: "/#past",
  },
  {
    name: "Partners",
    link: "/#partners",
  },
  {
    name: "Sponsors",
    link: "/#sponsors",
  },
  {
    name: "FAQs",
    link: "/#faqs",
  },
  // {
  //   name: "Contact Us",
  //   link: "#footer",
  // },
];


const Nav = () => {
  const sideNav = useRef("")
  const Show = () => {
    sideNav.current.classList.toggle("translate-x-[-100vw]")
  }
  return (
    <div className="flex h-[100px] rounded-b-3xl lg:drop-shadow-lg lg:border-b-5 border-Cblue    lg:bg-Ccream lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-md lg:bg-opacity-40  fixed w-screen  z-50">
      {/* for large and upper devices */}
      <>
        <div className="leftNav w-1/5 hidden lg:block">
          <Link
            href="/"
            className=" px-2 py-5 items-center flex w-fit"
          >
            <Image
              src={"/images/logo.png"}
              className="w-[70px] h-auto"
              alt=""
              width={80}
              height={80}
            />
            <div className="NavHeading text-2xl text-Cblue cursor-pointer">
              <div>MLSA</div>
              <div>MIET</div>
            </div>
          </Link>
        </div>

        <div className="rightNav w-4/5 text-Cblue flex justify-evenly items-center px-5 font-semibold text-md xl:text-lg  hidden lg:flex  ">
          {link.map((e, i) => (
            <Link
              href={e.link}
              key={i}
              className=" hover:border-b-[3px] border-Cblue duration-100 drop-shadow-lg"
            >
              {e.name}
            </Link>
          ))}
        </div>
      </>

      {/* for md and below devices */}
      <>
        {/* slide bar initially hide on left side  */}
        <div ref={sideNav} className="rightNav translate-x-[-100vw] duration-300 fixed h-[100dvh] w-[95vw] shadow-xl rounded-r-3xl border-r-1 border-black-200  bg-Corange block lg:hidden z-50  ">
          {/*right side button to translate sidebar back */}
          <div className="  text-Cblue  text-4xl  cursor-pointer absolute right-4 top-4" >
            <MdOutlineClose onClick={Show} className="bg-Ccream bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-md" />
          </div>
          {/* logos */}
          <Link
            href="/"
            className="leftNav w-full justify-center px-2 py-5 items-center flex"
          >
            <Image
              src={"/images/logo.png"}
              className="w-[90px] h-auto"
              alt=""
              width={90}
              height={90}
            />
            <div className="NavHeading text-3xl text-Cblue">
              <h2>MLSA</h2>
              <h2>MIET</h2>
            </div>
          </Link>
          {/* links */}
          <div className="flex   w-screen justify-center items-center h-[70vh] text-2xl  space-y-4 ">
            <div className="flex text-Cblue  w-fit  flex-col text-2xl  space-y-4">
              {link.map((e, i) => {
                if (e.name == "Contact Us") {
                  return (<></>)
                }
                if (e.name == "FAQs") {
                  return (
                    <Link
                      href={e.link}
                      key={i}
                      className="  drop-shadow-lg tracking-wide pb-3 indent-2  "
                    >
                      {e.name}
                    </Link>
                  )
                } else {
                  return (
                    <Link
                      href={e.link}
                      key={i}
                      className=" border-b-[3px] border-Cblue drop-shadow-lg tracking-wide pb-3 indent-2  "
                    >
                      {e.name}
                    </Link>
                  )
                }
              })}
            </div>
          </div>
          {/* contact button */}
          <div className=" absolute left-0 right-0 bottom-10 m-auto  flex justify-center">
            <Button
              link="/#footer"
              text="Contact Us"
              px="10"
              py="2"
            />
          </div>
        </div>

        {/*left side button to translate sidebar */}
        <div className=" w-4/5 text-Cblue flex justify-start items-center pl-5 text-5xl cursor-pointer lg:hidden" >
          <HiMenuAlt2 onClick={Show} className="  bg-Ccream bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-md" />
        </div>

        {/* right sidemlsa logo */}
        <Link
          href="/"
          className="leftNav w-1/5  p-5 items-center flex lg:hidden justify-end "
        >
          <Image
            src={"/images/logo.png"}
            className="w-[100px] h-auto"
            alt=""
            width={100}
            height={100}
          />

        </Link>
      </>
    </div>
  );
};

export default Nav;
