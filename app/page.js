"use client"
import About from "@/components/About";
import EventSchedule from "@/components/EventSchedule";
import Faq from "@/components/Faq";
// import FlareCursor from "@/components/FlareCursor";
import Footer from "@/components/Footer";
import JoinMember from "@/components/JoinMemeber";
import Main from "@/components/Main";
import MultipleButton from "@/components/MultipleButton";
import Nav from "@/components/Nav";
import Participate from "@/components/Participate";
import Partners from "@/components/Partners";
import Past from "@/components/Past";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import { useEffect, useState } from "react";
import { joinMem } from "@/data/JoinMembers"
import Loader from "@/components/Loader";
import PrizePool from "@/components/PrizePool";
import LinkedInPosts from "@/components/LinkedInPosts";
import Seminar from "@/components/seminar";
import Judges from "@/components/Judges";
import Mentors from "@/components/Mentors";

export default function Home() {

  const portal = [
    "Sponsors & Partners",
    "Judges",
    "Mentors",
    "Community",
    "Evangelist"
  ]

  const [show, setshow] = useState("Sponsors & Partners")

  return (
    <>
      <Loader />
      {/* <FlareCursor /> */}
      <Nav />
      <Main />
      <About />
      <Participate />
      <PrizePool />
      <MultipleButton portal={portal} setshow={setshow} />
      {
        (show == "Sponsors & Partners") ? <Sponsors /> :
          // (show == "Partners") ? <Partners /> :
          // (show == "Judges") ? <JoinMember content={joinMem.judge} /> :
          (show == "Judges") ? <Judges/> :
          // (show == "Mentors") ? <JoinMember content={joinMem.mentors} /> :
          (show == "Mentors") ? <Mentors/> :
              (show == "Community") ? <JoinMember content={joinMem.community} /> :
                <JoinMember content={joinMem.evangelist} />
      }
      <EventSchedule />
      {/* <Seminar/> */}
      <Past />
      <LinkedInPosts />
      <Faq />
      <Team />
      <Footer />
    </>
  );
}
