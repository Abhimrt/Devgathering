"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const link = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Why Participate?",
    link: "#about",
  },
  {
    name: "Event Schedule",
    link: "#about",
  },
  {
    name: "Problem Statement",
    link: "#about",
  },
  {
    name: "Past Events",
    link: "#about",
  },
  {
    name: "Sponsors",
    link: "#about",
  },
  {
    name: "FAQs",
    link: "#about",
  },
  {
    name: "Contact Us",
    link: "#about",
  },
];


const Nav = () => {
  const sideNav = useRef("")
  const Show = ()=>{
    sideNav.current.classList.toggle("translate-x-[-100vw]")
  }
  return (
    <div className="flex h-[100px] rounded-b-3xl shadow-md border-b-5 border-Cblue    bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  fixed w-screen bg-Cblack-100 z-50">
      {/* for large and upper devices */}
      <>
        <a
          href="/"
          className="leftNav w-1/5 px-2 py-5 items-center hidden lg:flex"
        >
          <Image
            src={"/images/logo.png"}
            className="w-[70px] h-auto"
            alt=""
            width={80}
            height={80}
          />
          <div className="NavHeading text-2xl text-Cblue">
            <h2>MLSA</h2>
            <h2>MIET</h2>
          </div>
        </a>

        <div className="rightNav w-4/5 text-Cblue flex justify-evenly items-center px-5 font-semibold text-md xl:text-lg  hidden lg:flex  ">
          {link.map((e, i) => (
            <a
              href={e.link}
              key={i}
              className=" hover:border-b-[3px] border-Cblue duration-100 drop-shadow-lg"
            >
              {e.name}
            </a>
          ))}
        </div>
      </>

      {/* for md and below devices */}
      <>
      {/* slide bar initially hide on left side  */}
        <div ref={sideNav} className="rightNav translate-x-[-100vw] duration-300 fixed h-screen w-[95vw] shadow-xl rounded-r-3xl border-r-1 border-black-200 bg-Corange block lg:hidden  ">
         {/*right side button to translate sidebar back */}
         <div className="  text-Cblue  text-4xl  cursor-pointer absolute right-4" >
        <MdOutlineClose onClick={Show}/>
        </div>
          {/* logos */}
        <a
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
        </a>
        {/* links */}
          <div className="flex   w-screen justify-center items-center h-[70vh] text-2xl  space-y-4 ">
          <div className="flex   w-fit  flex-col text-2xl  space-y-4">
          {link.map((e, i) => {
            if(e.name == "Contact Us"){
              return(<></>)
            }
            if(e.name == "FAQs"){
              return (
                <a
                  href={e.link}
                  key={i}
                  className="  drop-shadow-lg tracking-wide pb-3 indent-2  "
                >
                  {e.name}
                </a>
              )
            }else{
              return (
                <a
                  href={e.link}
                  key={i}
                  className=" border-b-[3px] border-Cblue drop-shadow-lg tracking-wide pb-3 indent-2  "
                >
                  {e.name}
                </a>
              )
            }
          })}
          </div>
          </div>
          {/* contact button */}
          <div className=" w-screen flex justify-center">
          <a
                  href="#contact"
                  className="  drop-shadow-lg  bg-Cblue px-10 py-2 text-Corange rounded-full "
                >
                  Contact Us
                </a>
          </div>
        </div>

        {/*left side button to translate sidebar */}
        <div className=" w-4/5 text-Cblue flex justify-start items-center pl-5 text-5xl cursor-pointer lg:hidden" >
        <HiMenuAlt2 onClick={Show}/>
        </div>

        {/* right sidemlsa logo */}
        <a
          href="/"
          className="leftNav w-1/5  p-5 items-center flex lg:hidden justify-end "
        >
          <Image
            src={"/images/logo.png"}
            className="w-[80px] h-auto"
            alt=""
            width={80}
            height={80}
          />
          
        </a>
      </>
    </div>
  );
};

export default Nav;
