import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaLinkedin, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Team = () => {
  return (
    <div
      id="team"
      className="w-screen min-h-screen flex items-center justify-evenly flex-col  lg:bg-center pt-10 lg:pt-24 pb-10 relative"
    >
      <div className="w-full h-full bg-Cblack-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 absolute lg:hidden"></div>
      <h2
        className="text-Corange text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold relative z-10 mb-10 lg:mb-0"
        style={{ textShadow: "3px 3px 6px black" }}
      >
        {" "}
        Meet Organizers{" "}
      </h2>
      <div className="w-[90vw] flex items-center justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 lg:mt-[100px]">
        <Box
          image="MeetVani.jpg"
          name="Vani Mittal"
          phone="9548538035"
          mail="VANI.MITTAL@studentambassadors.com"
          instagram="https://www.instagram.com/vani__001/"
          linkedin="https://www.linkedin.com/in/vani-mi-ttal/"
          twitter="https://twitter.com/VANIMITTAL12"
          connect="https://www.linkedin.com/in/vani-mi-ttal/"
        />
        <Box
          image="MeetAbhishek.jpg"
          name="Abhishek Singhal"
          phone="9927245142"
          mail="abhisinghal112001@gmail.com"
          instagram="https://www.instagram.com/abhi112001/"
          linkedin="https://www.linkedin.com/in/abhishek-singhal-112001/"
          twitter="https://www.linkedin.com/in/abhishek-singhal-112001/"
          connect="https://www.abhisheksinghal.in/"
        />
        {/* <Box image="MeetAbhishek.jpg" name="Abhishek Singhal" phone="9927245142" mail="abhisinghal112001@gmail.com" instagram="https://www.instagram.com/abhi112001/" linkedin="https://www.linkedin.com/in/abhishek-singhal-112001/" twitter="https://www.linkedin.com/in/abhishek-singhal-112001/" connect="https://www.abhisheksinghal.in/" /> */}
      </div>
    </div>
  );
};

export default Team;

const Box = ({
  image,
  name,
  phone,
  mail,
  instagram,
  linkedin,
  twitter,
  connect,
}) => {
  return (
    <div className="w-[90%] mx-auto lg:w-[25%] flex items-center justify-end min-h-[60vh] flex-col relative ">
      <div className="w-full h-[350px] space-y-4 rounded-2xl bg-Corange flex items-center justify-end flex-col  pb-5 text-Cblue relative  mt-[100px] lg:mt-0">
        <Image
          src={`/images/${image}`}
          className=" rounded-2xl absolute top-[-100px]"
          style={{ boxShadow: "0px 2px 5px rgba(0,0,0,.6) " }}
          width={200}
          height={200}
          alt=""
        />
        <h3
          className="text-3xl font-bold"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,.4) " }}
        >
          {name}
        </h3>
        <div className="min-w-fit mx-auto ">
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            className="w-[100%] mx-auto text-left flex"
          >
            <FaPhoneAlt className="mr-3 animate-jiggle" />
            +91 {phone}
          </a>
          <div className="w-[100%] mx-auto text-left flex text-nowrap flex items-center">
            <IoMail className="mr-3" />
            {mail}
          </div>
        </div>
        {/* links */}
        <div className="flex space-x-3 text-xl ">
          <a href={linkedin} target="_blank">
            {" "}
            <FaLinkedin />
          </a>
          <a href={instagram} target="_blank">
            {" "}
            <FaInstagramSquare />
          </a>
          <a href={twitter} target="_blank">
            {" "}
            <FaXTwitter />
          </a>
        </div>
        <Button link={connect} text="Connect with me" />
      </div>
      <div className="w-full h-[2vh] mt-5 rounded-2xl bg-Corange "></div>
    </div>
  );
};
