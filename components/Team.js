import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaLinkedin, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Team = () => {
  return (
    <>
      <div
        id="team"
        className="w-screen min-h-screen flex items-center justify-evenly flex-col mt-4 lg:mt-0 lg:bg-center pb-10 relative"
      >
        <div className="w-full h-full bg-Cblack-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 absolute lg:hidden"></div>
        <h2
          className="text-Corange text-3xl text-center cursor-pointer break-words sm:text-5xl tracking-[5px] font-bold relative pt-24 z-10 mb-10 lg:mb-10"
          style={{ textShadow: "3px 3px 6px black" }}
        >
          {" "}
          Meet Our Faculty Coordinators{" "}
        </h2>
        <div className="w-[90vw] gap-10 flex items-center justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 lg:mt-[100px] flex-wrap">
          <Box
            image="Meet.jpg"
            name="Brijesh Singh"
            // phone="9548538035"
            mail="brijesh.singh@miet.ac.in"
            // instagram="https://www.instagram.com/vani__001/"
            linkedin="https://www.linkedin.com/in/brijesh-singh-804a3b15/"
            // twitter="https://twitter.com/VANIMITTAL12"
            connect="https://www.linkedin.com/in/brijesh-singh-804a3b15/"
          />
          <Box
            image="MeetMukesh.jpg"
            name="Mukesh Rawat"
            phone="9837477042"
            mail="mukesh.rawat@miet.ac.in"
            // instagram="https://www.instagram.com/vani__001/"
            linkedin="https://www.linkedin.com/in/mukesh-rawat-818722123/"
            // twitter="https://twitter.com/VANIMITTAL12"
            connect="https://www.linkedin.com/in/mukesh-rawat-818722123/"
          />
          <Box
            image="MeetJagbeer.png"
            name="Jagbeer Singh"
            phone="8533927442"
            mail="jagbeer.singh@miet.ac.in"
            // instagram="https://www.instagram.com/vani__001/"
            linkedin="https://www.linkedin.com/in/jagbeer-singh-61b34064/"
            // twitter="https://twitter.com/VANIMITTAL12"
            connect="https://www.linkedin.com/in/jagbeer-singh-61b34064/"
          />
        </div>
      </div>
      <div
        id="teamMiddle"
        className="w-screen min-h-screen flex items-center justify-evenly flex-col mt-4 lg:mt-0 lg:bg-center pt-10 lg:pt-24 pb-10 relative"
      >
        <div className="w-full h-full bg-Cblack-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 absolute lg:hidden"></div>
        <h2
          className="text-Corange text-3xl text-center cursor-pointer break-words sm:text-5xl tracking-[5px] font-bold relative pt-6 z-10 mb-10 lg:mb-16"
          style={{ textShadow: "3px 3px 6px black" }}
        >
          {" "}
          Meet Our Lead Organizer{" "}
        </h2>
        <div className="w-[90vw] gap-10 flex items-center justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 lg:mt-[100px] flex-wrap">
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
        </div>
      </div>
      <div
        id="team2"
        className="w-screen min-h-screen flex items-center justify-evenly flex-col  lg:bg-center  pb-10 relative"
      >
        <div className="w-full h-full bg-Cblack-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 absolute lg:hidden"></div>
        <h2
          className="text-Corange text-3xl text-center cursor-pointer sm:text-5xl tracking-[5px] font-bold relative pt-24 z-10 mb-20 lg:mb-10"
          style={{ textShadow: "3px 3px 6px black" }}
        >
          {" "}
          Meet Our Organizers{" "}
        </h2>
        <div className="w-[90vw] gap-10 flex items-center justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 lg:mt-[100px] flex-wrap">
          <Box
            image="MeetAbhishek.jpg"
            name="Abhishek Singhal"
            phone="9927245142"
            mail="support@abhisheksinghal.in"
            instagram="https://www.instagram.com/abhi112001/"
            linkedin="https://www.linkedin.com/in/abhishek-singhal-112001/"
            twitter="https://www.linkedin.com/in/abhishek-singhal-112001/"
            connect="https://www.abhisheksinghal.in/"
          />
          <Box
            image="MeetMadhur.png"
            name="Madhur Agrawal"
            phone="9084417011"
            mail="madhuragl609@gmail.com"
            instagram="https://www.instagram.com/madhuragrawal__"
            linkedin="https://www.linkedin.com/in/madhuragl/"
            twitter="https://twitter.com/madhuragl"
            connect="https://www.linkedin.com/in/madhuragl/"
          />
          <Box
            image="MeetHimank.jpeg"
            name="Himank Varshney"
            phone="8373931752"
            mail="var.himank@gmail.com"
            instagram=""
            linkedin="https://www.linkedin.com/in/varhimank/"
            twitter=""
            connect="https://www.linkedin.com/in/varhimank/"
          />
        </div>
      </div>
    </>
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
          {phone && <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            className="w-[100%] mx-auto text-left flex"
          >
            <FaPhoneAlt className="mr-3 animate-jiggle" />
            +91 {phone}
          </a>}
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
