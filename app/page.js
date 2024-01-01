import About from "@/components/About";
import FlareCursor from "@/components/FlareCursor";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Participate from "@/components/Participate";
import Partners from "@/components/Partners";
import Past from "@/components/Past";

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
      <Footer/>
    </>
  );
}
