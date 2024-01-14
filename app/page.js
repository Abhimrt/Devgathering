"use client"
import About from "@/components/About";
import EventSchedule from "@/components/EventSchedule";
import Faq from "@/components/Faq";
import FlareCursor from "@/components/FlareCursor";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import MultipleButton from "@/components/MultipleButton";
import Nav from "@/components/Nav";
import Participate from "@/components/Participate";
import Partners from "@/components/Partners";
import Past from "@/components/Past";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import { useState } from "react";

export default function Home() {

  const portal = [
    "Partners",
    "Sponsors",
    // "Judges",
    // "Mentors",
    // "Community",
    // "Evangelist"
  ]

  const [show, setshow] = useState("Partners")

  return (
    <>
      <FlareCursor />
      <Nav />
      <Main />
      <About />
      <Participate />
      <EventSchedule />
      <Past />
      <MultipleButton portal={portal} setshow={setshow} />
      {
        (show == "Partners") ? <Partners /> : <Sponsors />
      }
      <Faq />
      <Team />
      <Footer />
    </>
  );
}
