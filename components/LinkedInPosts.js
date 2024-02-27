"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import KnowMore from "./KnowMore";


// <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7061384727743635456" height="1024" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
const postsList = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7061384727743635456",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7072250182779703296",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7131871013411110914",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7101572121755029504",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7096480376428097536",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7101518549571014656",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7160870915528949760",
]

function LinkedInPosts() {



    return (
        <>
            <div className="w-screen overflow-x-hidden h-full relative flex items-center pt-12 justify-center mb-5 lg:mb-0 ">
                <Image
                    src="/images/Participateheading.png"
                    className="absolute bottom-2 -scale-x-100 lg:bottom-6 left-2 lg:left-[17%] min-w-[105vw]  lg:min-w-[50vw] h-auto -z-1"
                    alt=""
                    width={600}
                    height={50}
                />
                <h2 className="text-Cblue text-center text-4xl sm:text-5xl tracking-[1px] lg:tracking-[5px]  font-bold pb-8 z-20 ">
                    Prizes And Rewards?
                </h2>
            </div>
            <div className="w-[80vw] lg:w-[40vw] shadow-lg shadow-black bg-Cblue flex mx-auto h-32 my-6 rounded-xl">
                <h2 className=" text-Corange text-center text-4xl sm:text-5xl tracking-[1px] lg:tracking-[5px] mx-auto my-auto content-center flex flex-col align-middle pt-5  font-bold pb-8 z-20 ">
                    Prize Pool <span> $1,50,000</span>
                </h2>
            </div>
            <div className="mt-10 px-0 lg:px-20 w-[80vw] gap-10 mx-auto flex items-center justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 lg:mt-32 flex-wrap">
                {/* {
                    prizes.map((e, i) => {
                        return (
                            <Box
                                image={e.image}
                                name={e.name}
                                total={e.Total}
                                cash={e.Cash}
                                index={i}
                                handleModal={handleModal}
                            />
                        )
                    })
                } */}
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7160870915528949760" height="513" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> */}
            </div>
        </>
    );
};

export default LinkedInPosts;



const Box = ({
    image,
    name,
    total,
    cash,
    index,
    handleModal,
}) => {
    return (
        <div className=" w-full text-center space-y-0 mx-auto lg:w-[28%] lg:space-y-24  flex items-center justify-end min-h-[20vh]  flex-col relative ">
            <div className=" w-full h-full shadow-lg shadow-black">
                <iframe className=" rounded-xl" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7160870915528949760" height="513" width="400" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            </div>
        </div>
    );
};