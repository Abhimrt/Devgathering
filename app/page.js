"use client"
import About from "@/components/About";
import EventSchedule from "@/components/EventSchedule";
import Faq from "@/components/Faq";
import FlareCursor from "@/components/FlareCursor";
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

export default function Home() {

  const portal = [
    "Partners",
    "Sponsors",
    "Judges",
    "Mentors",
    "Community",
    "Evangelist"
  ]

  const [show, setshow] = useState("Partners")

  return (
    <>
      <Loader />
      <FlareCursor />
      <Nav />
      <Main />
      <About />
      <Participate />
      <EventSchedule />
      <Past />
      <MultipleButton portal={portal} setshow={setshow} />
      {
        (show == "Partners") ? <Partners /> :
          (show == "Sponsors") ? <Sponsors /> :
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
