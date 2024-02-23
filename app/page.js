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
import PrizePool from "@/components/prizepool";
import SecondPrize from "@/components/linkedInPost";

export default function Home() {

  const portal = [
    "Sponsors",
    "Partners",
    "Judges",
    "Mentors",
    "Community",
    "Evangelist"
  ]

  const [show, setshow] = useState("Sponsors")

  return (
    <>
      <Loader />
      {/* <FlareCursor /> */}
      <Nav />
      <Main />
      <About />
      <Participate />
      <SecondPrize/>
      <EventSchedule />
      <Past />
      <MultipleButton portal={portal} setshow={setshow} />
      {
        (show == "Sponsors") ? <Sponsors /> :
          (show == "Partners") ? <Partners /> :
            (show == "Judges") ? <JoinMember content={joinMem.judge} /> :
              (show == "Mentors") ? <JoinMember content={joinMem.mentors} /> :
                (show == "Community") ? <JoinMember content={joinMem.community} /> :
                  <JoinMember content={joinMem.evangelist} />
      }
      <Faq />
      <Team />
      <Footer />
    </>
  );
}
