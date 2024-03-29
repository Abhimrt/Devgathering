import Image from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center py-5 flex-col bg-Cblue ">
        <h2 className="text-Corange text-5xl my-4 ">How to Reach?</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.723069059679!2d77.64079351289759!3d28.97241387451972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c668fdea4d87f%3A0x8795def814a486e7!2sMeerut%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1711036614256!5m2!1sen!2sin" className="w-[90%] h-[70vh] shadow-lg rounded-md border-4 border-Corange" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <section
        id="footer"
        className="w-screen min-h-auto bg-Cblue text-Ccream relative "
        style={{ boxShadow: "0px -3px 25px rgba(0,0,0,.8)" }}
      >
        <>
          <Image
            src="/images/FooterLeft.png"
            className="absolute lg:h-full w-full lg:w-auto  "
            width={300}
            height={300}
            alt=""
          />
          <Image
            src="/images/FooterRight.png"
            className="absolute lg:h-full w-1/2 lg:w-auto bottom-0 right-0"
            width={300}
            height={300}
            alt=""
          />
        </>

        <div className="flex justify-center items-stretch mt-10  flex-col lg:flex-row w-[90vw] mx-auto relative z-10 relative">
          <div className="lg:w-[30%] space-y-2 flex items-center lg:items-start my-5 lg:my-0 justify-start flex-col">
            <h3 className="tracking-wide text-3xl  mb-3 lg:mb-5 ">More Info.</h3>
            <a target="_blank" href="https://drive.google.com/file/d/1f6d9D1iABjeDPSuXWwf8K04WIx6_iYWw/view?usp=drive_link" className="opacity-70">
              Code of conduct
            </a>
            <a
              target="_blank"
              href="https://abhisheksinghal.notion.site/abhisheksinghal/MLSA-MIET-Dev-Gathering-Call-for-Sponsors-0005e944a676484d96b298479af82617"
              className="opacity-70"
            >
              Call for Sponsors
            </a>
            <a target="_blank" href="https://www.commudle.com/fill-form/2150" className="opacity-70">
              Call for Community Partners
            </a>
          </div>
          <div className="lg:w-[30%]  space-y-2 flex items-center justify-start flex-col ">
            <Image
              src="/images/logo.png"
              className="w-[35vw] lg:w-auto h-auto"
              width={250}
              height={250}
              alt=""
            />
            <h2
              className="text-3xl lg:text-5xl text-[#0078D3] font-extrabold "
              style={{ textShadow: "4px 4px 8px rgba(0,0,0,7)" }}
            >
              MLSA MIET
            </h2>
          </div>
          <div className="lg:w-[30%] space-y-2 items-center lg:items-start  lg:my-0 flex  justify-start flex-col pt-5 lg:pt-0 lg:pl-10 ">
            <h3 className="tracking-wide text-3xl mb-3 lg:mb-5">Contact</h3>
            <div className="flex items-center space-x-3">
              <IoMail />
              <span className="text-Corange underline underline-offset-4">
                support@mietmlsa.xyz
              </span>
            </div>
            <a
              href="https://maps.app.goo.gl/njwjy3TAHm8Szbnd7"
              target="_black"
              className="flex items-center space-x-3"
            >
              <MdLocationPin />
              <span className="text-Corange underline underline-offset-4">
                MIET, Meerut
              </span>
            </a>
            <div className="flex pt-5 lg:absolute bottom-4 text-xl space-x-5">
              <a
                target="_blank"
                href="https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology"
              >
                {" "}
                <Image
                  src="/images/CommudleLogo.webp"
                  width={30}
                  height={50}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/mlsamiet/">
                {" "}
                <RiInstagramFill />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/mlsa-miet/"
              >
                <BsLinkedin />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/MlsaMiet"
              >
                <BsTwitterX />
              </a>
            </div>
          </div>
        </div>
        <div>
          <hr className="w-5/6 mx-auto opacity-30 my-5" />
          <p className="w-screen text-center opacity-45 mb-5">
            &copy; MLSA MIET, all right reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;

/* MLSA MIET */
