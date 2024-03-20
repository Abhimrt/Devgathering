"use client"
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaLinkedin, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Box = ({
    image,
    name,
    phone,
    mail,
    domain,
    linkedin,
    twitter,
    connect,
    position
}) => {
    return (
        <>
            <div className=" w-[90%] text-center space-y-0 mx-auto px-2 lg:mt-32 lg:w-[28%] lg:space-y-24  flex items-center justify-end min-h-[40vh]  flex-col relative ">
                {/* <div className="w-full h-[400px] rounded-2xl hover:shadow-xl hover:shadow-black hover:scale-105 transition-all ease-in-out bg-Ccream hoverEffect flex shadow-lg shadow-black items-center justify-end flex-col text-Cblue relative  mt-[100px] lg:mt-0"> */}
                <div className="w-full h-[350px] space-y-4  rounded-2xl bg-Ccream flex items-center justify-end flex-col hover:shadow-xl hover:shadow-black hover:scale-105 transition-all shadow-lg shadow-black ease-in-out pb-5 text-Cblue relative  mt-[100px] lg:mt-0">
                    <Image
                        src={`/images/${image}.jpeg`}
                        // src={`/images/MeetAbhishek.jpg`}
                        className=" rounded-2xl absolute shadow-2xl top-[-100px]"
                        style={{ boxShadow: "0px 2px 5px rgba(0,0,0,.6) " }}
                        width={200}
                        height={200}
                        alt=""
                    />
                    <div className=" flex text-center flex-col">
                        <h3
                            className="text-3xl font-bold"
                            style={{ textShadow: "1px 1px 3px rgba(0,0,0,.4) " }}
                        >
                            {name}
                        </h3>
                        {position && <h3
                            className="text-xl mt-0"
                            style={{ textShadow: "1px 1px 3px rgba(0,0,0,.4) " }}
                        >
                            {position}
                        </h3>}
                        {domain && <h3
                            className="text-md mt-0"
                            style={{ textShadow: "1px 1px 3px rgba(0,0,0,.4) " }}
                        >
                            {domain}
                        </h3>}
                    </div>
                    <div className="min-w-fit mx-auto ">
                        {phone && <a
                            href={`https://wa.me/${phone}`}
                            target="_blank"
                            className="w-[100%] mx-auto text-left flex"
                        >
                            <FaPhoneAlt className="mr-3 animate-jiggle" />
                            +91 {phone}
                        </a>}
                        {mail && <div className="w-[100%] mx-auto text-left text-nowrap flex items-center">
                            <IoMail className="mr-3" />
                            {mail}
                        </div>}
                    </div>
                    {/* links */}
                    {/* <div className="flex space-x-3 text-xl ">
                        <a href={linkedin} target="_blank">
                            {" "}
                            <FaLinkedin />
                        </a>
                    </div> */}
                    <Button link={connect} text="Connect with me" />
                </div>
            </div >
        </>
    )
}

export default Box