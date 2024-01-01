import About from "@/components/About";
import Faq from "@/components/Faq";
import FlareCursor from "@/components/FlareCursor";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Participate from "@/components/Participate";
import Partners from "@/components/Partners";
import Past from "@/components/Past";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <FlareCursor />
      <Nav />
      <Main />
      <About />
      <Participate />
      <Past/>
      <Partners/>
      <Sponsors/>
      <Faq/>
      <Footer/>
    </>
  );
}
