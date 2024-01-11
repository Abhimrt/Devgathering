import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[100vh] w-full flex items-center justify-center flex-col bg-Cblue overflow-hidden relative"
    >
      <Image
        src="/images/AboutFingers.png"
        className="absolute top-20 left-[-4%] sm:left-0  w-[40px] sm:w-[50px] h-auto -z-1"
        alt=""
        width={50}
        height={50}
      />
      <Image
        src="/images/AboutLowerWave.png"
        className="absolute bottom-[-10%] left-0 w-[50vw] h-auto hidden sm:block"
        alt=""
        width={700}
        height={500}
      />
      <Image
        src="/images/AboutWaveMobile.png"
        className="absolute bottom-[-6%]  left-[-20%] min-w-[150vw] h-auto block sm:hidden"
        alt=""
        width={700}
        height={500}
      />
      <Image
        src="/images/AboutLowerWave.png"
        className="absolute top-0 sm:top-[-5%] right-0 rotate-180 w-[65vw]  sm:w-[40vw] h-auto"
        alt=""
        width={700}
        height={500}
      />
      <Image
        src="/images/logo.png"
        className="absolute  sm:left-[10%] sm:bottom-[15%] w-[70vw] opacity-20 sm:opacity-100 sm:w-[25vw]"
        alt=""
        width={500}
        height={500}
      />
      <div className="relative w-full min-h-screen text-center py-[30%] lg:py-0">
        <h2 className="text-Ccream text-center text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold pb-8  sm:absolute top-[20%] z-30 w-full">
          About Dev <br className="sm:hidden" /> Gathering
        </h2>
        <div className="text-Ccream space-y-5 w-[90vw]  text-justify sm:w-[45vw] sm:absolute right-[15vw] top-[32%] z-20 mx-auto" style={{ textShadow: "1px 1px 2px black" }}>
          <p>
            MLSA MIET is thrilled to announce "Dev Gathering '24," a cutting-edge
            Hackathon set to take place in March 2024.
          </p>
          <p>
            This event promises to be an exciting platform for tech enthusiasts,
            developers, and innovators to come together and showcase their skills.
            Participants will have the opportunity to tackle real-world
            challenges, collaborate on groundbreaking projects, and push the
            boundaries of technology.
          </p>
          <p>
            Dev Gathering '24 aims to foster a dynamic and creative environment,
            encouraging participants to think outside the box and explore
            innovative solutions. With engaging workshops, expert mentorship, and
            the chance to network with like-minded individuals, this hackathon is
            not just a competition but a celebration of collaboration and
            ingenuity.
          </p>
          <p  >
            Join us for an unforgettable experience where ideas converge, and
            innovation takes center stage. Get ready to unleash your creativity
            and make a lasting impact in the world of technology at Dev Gathering
            '24!
          </p>
        </div>
      </div>
      <Image
        src="/images/AboutCircles.png"
        className="absolute  right-[4%] bottom-[4%] sm:bottom-[5%] w-[25vw] sm:w-[8vw]"
        alt=""
        width={100}
        height={100}
      />
      <Image
        src="/images/AboutCircles.png"
        className="absolute animate-ping  right-[4%] bottom-[4%] sm:bottom-[5%] w-[25vw] sm:w-[8vw]"
        alt=""
        width={100}
        height={100}
      />
    </section>
  );
};

export default About;
