"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import KnowMore from "./KnowMore";

function PrizePool() {
  const prizes = [
    {
      image: "first.png",
      name: "First Prize",
      Total: "To be Announced",
      Cash: "₹12,000",
      KnowMore: [
        "InterviewBuddy: Mock Interview, discount Vouchers for all.",
        "Echo3D:One Month free access to pro tier worth $99",
        ".XYZ: Domain Name for One Year worth ₹165.",
        "InterviewCake: Full access licences worth $249.",
        "Exclusive Swag kits."
      ]
    },
    {
      image: "second.png",
      name: "Second Prize",
      Total: "To be Announced",
      Cash: "₹8,000",
      KnowMore: [
        "InterviewBuddy: Mock Interview, discount Vouchers for all.",
        "Echo3D:One Month free access to pro tier worth $99",
        ".XYZ: Domain Name for One Year worth ₹165.",
        "InterviewCake: Full access licences worth $249.",
        "Exclusive Swag kits."
      ]
    },
    {
      image: "third.png",
      name: "Third Prize",
      Total: "To be Announced",
      Cash: "₹5,000",
      KnowMore: [
        "InterviewBuddy: Mock Interview, discount Vouchers for all.",
        "Echo3D:One Month free access to pro tier worth $99",
        ".XYZ: Domain Name for One Year worth ₹165.",
        "InterviewCake: Full access licences worth $249.",
        "Exclusive Swag kits."
      ]
    },
    {
      image: "girls.jpeg",
      name: "All Girls Team",
      Total: "To be Announced",
      KnowMore: [
        "Echo3D:One Month free access to pro tier worth $99",
        ".XYZ: Domain Name for One Year worth ₹165.",
        "InterviewCake: Full access licences worth $249.",
        "InterviewBuddy: Discount Vouchers for all.",
        "Exclusive Swag kits."
      ]
    },
    {
      image: "fresher.jpeg",
      name: "All Fresher Team",
      Total: "To be Announced",
      KnowMore: [
        "Echo3D:One Month free access to pro tier worth $99",
        ".XYZ: Domain Name for One Year worth ₹165.",
        "InterviewCake: Full access licences worth $249.",
        "InterviewBuddy: Discount Vouchers for all.",
        "Exclusive Swag kits."
      ]
    },
    {
      image: "participants.jpeg",
      name: "All Paticipants",
      Total: "To be Announced",
      KnowMore: [
        "Echo3D:One Month free access to pro tier worth $99",
        ".XYZ: Domain Name for One Year worth ₹165.",
        "InterviewCake:Full access licences worth $249.",
        "InterviewBuddy: Discount Vouchers for all.",
        "Exclusive Swags."
      ]
    },
    {
      image: "PSPolygon.png",
      name: "Polygon",
      Total: "To be Announced",
      Cash: "$200",
      KnowMore: [
        "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.",
        "Track: Polygon Track",
        "Read about the bounty details and find code templates for Polygon here: https://nsb.dev/polygon-bounty.",
        "Best hack built on Polygon",
        "1 PRIZE, 200 USD"
      ]
    },
    {
      image: "PSEthereum.png",
      name: "ETHIndia",
      Total: "To be Announced",
      Cash: "$100",
      KnowMore: [
        "ETHIndia is empowering the Ethereum Community through its various initiatives including hackathons, fellowships, grants, and more!",
        "Track: Ethereum Track",
        "Select this track if you're building on Ethereum to be eligible for the prizes!",
        "Best hack built on Ethereum",
        "1 PRIZE, 100 USD",


      ]
    },
  ]
  const [showModal, setShowModal] = useState(false)
  const [ModalContent, setModalContent] = useState()

  const handleModal = (e) => {
    console.log(e.target.value)
    setModalContent(prizes[e.target.value])
    setShowModal(true)
  }

  useEffect(() => {
    console.log(ModalContent)

    // return () => {
    //   second
    // }
  }, [ModalContent])



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
        {
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
        }
      </div>
      {showModal && <Modal setShowModal={setShowModal} ModalContent={ModalContent} />}
    </>
  );
};

export default PrizePool;



const Box = ({
  image,
  name,
  total,
  cash,
  index,
  handleModal,
}) => {
  return (
    <div className=" w-[90%] text-center space-y-0 mx-auto lg:w-[28%] lg:space-y-24  flex items-center justify-end min-h-[20vh]  flex-col relative ">
      <div className="w-full h-[350px] rounded-2xl hover:shadow-xl hover:shadow-black hover:scale-105 transition-all ease-in-out bg-gray-200 hoverEffect flex shadow-lg shadow-black items-center justify-end flex-col  pb-5 text-Cblue relative  mt-[100px] lg:mt-0">
        <Image
          src={`/images/${image}`}
          className=" rounded-full p-4 hoverEffectChild  border-gray-500 border-4 overflow-clip h-[170px] absolute w-[170px] top-[-100px]"
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
          {cash && <p>Cash Prize Worth: {cash}</p>}
        </div>
        <KnowMore index={index} handleModal={handleModal} text="Know More" />
        {/* <Button  text="Know More" /> */}
      </div>
      <div className="w-full h-[2vh] mt-5 rounded-2xl bg-Corange "></div>
    </div>
  );
};