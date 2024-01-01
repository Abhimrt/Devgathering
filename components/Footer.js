import Image from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="w-screen min-h-[50vh] bg-Cblue text-Ccream relative">
      <>
        <Image src="/images/FooterLeft.png" className="absolute lg:h-full w-full lg:w-auto  " width={300} height={300} alt="" />
        <Image src="/images/FooterRight.png" className="absolute lg:h-full w-1/2 lg:w-auto bottom-0 right-0" width={300} height={300} alt="" />
      </>

      <div className="flex justify-center items-stretch mt-10  flex-col lg:flex-row w-[90vw] mx-auto relative z-10 relative">
        <div className="lg:w-[25%] space-y-2 flex items-center lg:items-start my-5 lg:my-0 justify-start flex-col">
          <h3 className="tracking-wide text-3xl mb-5 ">More Info.</h3>
          <a href="#" className="opacity-70">code of conduct</a>
          <a href="" className="opacity-70">Community guidelines</a>
          <a href="" className="opacity-70">call for sponsors</a>
        </div>
        <div className="lg:w-[35%]  space-y-2 flex items-center justify-start flex-col ">
          <Image src="/images/logo.png" className="" width={250} height={250} alt="" />
          <h2 className="text-5xl text-[#0078D3] font-extrabold " style={{textShadow:"4px 4px 8px rgba(0,0,0,7)"}}>MLSA MIET</h2>
        </div>
        <div className="lg:w-[30%] space-y-2 items-center lg:items-start my-5 lg:my-0 flex  justify-start flex-col pt-10 lg:pt-0 lg:pl-10 ">
          <h3 className="tracking-wide text-3xl mb-5">Contact</h3>
          <a href="" className="flex items-center space-x-3">
          <IoMail />
            <span className="text-Corange underline underline-offset-4">VANI.MITTAL@studentambassadors.com</span>
          </a>
          <a href="" className="flex items-center space-x-3">
          <MdLocationPin />
            <span className="text-Corange underline underline-offset-4">MIET, Meerut</span>
          </a>
          <div className="flex pt-5 lg:absolute bottom-4 text-xl space-x-5">
            <a href=""> <FaDiscord /></a>
            <a href=""> <RiInstagramFill /></a>
            <a href=""><BsLinkedin /></a>
          </div>
        </div>
      </div>
      <div>
        <hr className="w-5/6 mx-auto opacity-30 my-5"/>
        <p className="w-screen text-center opacity-45 mb-5">&copy; MLSA MIET, all right reserved</p>
      </div>
    </section>
  );
};

export default Footer;


/* MLSA MIET */

