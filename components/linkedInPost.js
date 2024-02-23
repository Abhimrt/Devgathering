"use client"
import Image from "next/image";
import React, { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import KnowMore from "./KnowMore";

function SecondPrize() {
  let postLinks = [
    "https://www.linkedin.com/posts/kartikey-sharma-7195a91b4_genai-mlsa-community-activity-7161085184438669312-ibv3",
    "https://www.linkedin.com/posts/ujjwalsharma26_ai-mietmlsa-aicatalyst-activity-7096490056114184192-vX5R?utm_source=share&utm_medium=member_android",
    "https://www.linkedin.com/posts/kartikey-sharma-7195a91b4_dotnet-csharp-shoutout-activity-7132350684116492288-EIH3?utm_source=share&utm_medium=member_android",
    "https://www.linkedin.com/posts/anmolkumar01_dotnetconf2023-techcommunity-volunteering-activity-7131659664450084864-_Psu?utm_source=share&utm_medium=member_desktop"
  ]
  const [showModal, setShowModal] = useState(false)
  const [ModalContent, setModalContent] = useState("")

  return (
    <>
      <div className="w-full h-full relative flex items-center pt-12 justify-center mb-5 lg:mb-0 ">
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
      <div className="w-[80vw] lg:w-[40vw] bg-Cblue flex mx-auto h-32 my-6 rounded-xl">
        <h2 className=" text-Corange text-center text-4xl sm:text-5xl tracking-[1px] lg:tracking-[5px] mx-auto my-auto content-center flex flex-col align-middle pt-5  font-bold pb-8 z-20 ">
          Prize Pool <span> $1,00,000</span>
        </h2>
      </div>
      <div className="mt-10 px-0 lg:px-20 w-[90vw] gap-10 mx-auto flex items-center justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 lg:mt-32 flex-wrap">
        <Box
          image="first.png"
          name="First Prize"
          total="To be Announced"
          cash="To be Announced"
          instagram=""
          linkedin="https://www.linkedin.com/in/varhimank/"
          twitter=""
          connect="https://www.linkedin.com/in/varhimank/"
        />
        <Box
          image="second.png"
          name="Second Prize"
          total="To be Announced"
          cash="To be Announced"
          instagram=""
          linkedin="https://www.linkedin.com/in/varhimank/"
          twitter=""
          connect="https://www.linkedin.com/in/varhimank/"
        />
        <Box
          image="third.png"
          name="Third Prize"
          total="To be Announced"
          cash="To be Announced"
          instagram=""
          linkedin="https://www.linkedin.com/in/varhimank/"
          twitter=""
          connect="https://www.linkedin.com/in/varhimank/"
        />
      </div>
      <div className="mt-10 px-0 lg:px-20 w-[90vw] gap-10 mx-auto flex items-center justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 lg:mt-32 flex-wrap">
        <Box
          image="girls.jpeg"
          name="All Girls Team"
          total="To be Announced"
          cash="To be Announced"
          instagram=""
          linkedin="https://www.linkedin.com/in/varhimank/"
          twitter=""
          connect="https://www.linkedin.com/in/varhimank/"
        />
        <Box
          image="fresher.jpeg"
          name="All Freshers Team"
          total="To be Announced"
          cash="To be Announced"
          instagram=""
          linkedin="https://www.linkedin.com/in/varhimank/"
          twitter=""
          connect="https://www.linkedin.com/in/varhimank/"
        />
        <Box
          image="participants.jpeg"
          name="All Participants"
          total="To be Announced"
          cash="To be Announced"
          instagram=""
          linkedin="https://www.linkedin.com/in/varhimank/"
          twitter=""
          connect="https://www.linkedin.com/in/varhimank/"
        />
      </div>
      <Modal />
    </>
  );
};

export default SecondPrize;



const Box = ({
  image,
  name,
  total,
  cash,
  instagram,
  linkedin,
  twitter,
  connect,
}) => {
  return (
    <div className="w-[90%] mx-auto lg:w-[28%]  flex items-center justify-end min-h-[20vh]  flex-col relative ">
      <div className="w-full h-[350px] rounded-2xl bg-gray-200 flex shadow-lg shadow-black items-center justify-end flex-col  pb-5 text-Cblue relative  mt-[100px] lg:mt-0">
        <Image
          src={`/images/${image}`}
          className=" rounded-full p-4 transition-transform ease-in-out hover:rotate-180 border-gray-500 border-4 absolute w-[170px] top-[-100px]"
          style={{ boxShadow: "0px 2px 5px rgba(0,0,0,.6) " }}
          width={200}
          height={200}
          alt=""
        />
        <h3
          className="text-3xl -translate-y-10 font-bold"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,.4) " }}
        >
          {name}
        </h3>
        <div className="mb-4">
          <p>Total Prize Worth: ₹{total}</p>
          <p>Cash Prize Worth: ₹{cash}</p>
        </div>
        {/* <KnowMore setModal={setShowModal} text="Know More" /> */}
        <Button text="Know More" />
      </div>
      <div className="w-full h-[2vh] mt-5 rounded-2xl bg-Corange "></div>
    </div>
  );
};