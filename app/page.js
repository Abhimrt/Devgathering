import About from "@/components/About";
import EventSchedule from "@/components/EventSchedule";
import Faq from "@/components/Faq";
import FlareCursor from "@/components/FlareCursor";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Participate from "@/components/Participate";
import Partners from "@/components/Partners";
import Past from "@/components/Past";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <FlareCursor />
      <Nav />
      <Main />
      <About />
      <Participate />
      <EventSchedule />
      <Past />
      <Partners />
      <Sponsors />
      <Faq />
      <Team />
      <Footer />
    </>
  );
}
