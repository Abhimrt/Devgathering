import Image from "next/image";
import React from "react";

const data = [
  {
    img: 'First',
    heading: "50 Lakhs+",
    para: ["Prize Poll 50 Lakh+, cash Prize 25,000+", " with Certificate of Participation and", "Amazing swags"]
  },
  {
    img: 'Second',
    heading: "Get Inspired",
    para: [" Code with 500+ developers and ", " designers to build solutions to real- ", " world problems"]
  },
  {
    img: 'Third',
    heading: "Internship Opportunity",
    para: [" Opportunity to secure a  ", " paid internship ", "awaits you! "]
  },
]

const Participate = () => {
  return (
    <section
      id="participate"
      className="w-full min-h-screen flex items-center justify-center flex-col pt-16 pb-10 lg:pb-0"
    >
      {/* heading */}
      <div className="w-full relative flex items-center justify-center mb-5 lg:mb-0 ">
        <Image
          src="/images/Participateheading.png"
          className="absolute bottom-2 cursor-pointer lg:bottom-5 -right-2 lg:right-[20%] min-w-[105vw]  lg:min-w-[50vw] h-auto -z-1"
          alt=""
          width={600}
          height={50}
        />
        <h2 className="text-Cblue cursor-pointer text-4xl sm:text-5xl tracking-[1px] lg:tracking-[5px]  font-bold pb-8 z-20 ">
          Why Participate?
        </h2>
      </div>

      <div className=" w-[85vw] mx-auto flex items-stretch justify-center flex-col lg:flex-row  lg:space-x-10 space-y-16 lg:space-y-0 ">
        {
          data.map((e, i) => (
            <div className="border-2 border-Cblue rounded-2xl flex items-center justify-stretch flex-col w-full lg:w-1/3 relative shadow-md " key={i}>
              <Image
                src={`/images/Participate${e.img}.png`}
                className="w-full h-auto"
                width={400}
                height={400}
                alt=""
              />
              <div className="flex items-start justify-center w-full flex-col  ">
                <h3
                  className="text-white text-center text-5xl w-full"
                  style={{ textShadow: "2px 2px 3px rgba(0,0,0,.8)" }}
                >
                  {e.heading}
                </h3>
                <hr className="w-[60%] mx-auto h-2 bg-Cblue border-0 rounded-full mt-3 mb-1 " />
                <p className="text-center w-full font-semibold text-lg mb-5 text-Cblue px-5 text-nowrap">
                  {e.para.map((e1, i) => (
                    <>{e1}<br /></>
                  ))}
                </p>
                <hr className="w-[100%] mx-auto h-6 bg-Cblue border-0 rounded-full mt-3 mb-1 absolute -bottom-10 drop-shadow-lg" />
              </div>
            </div>
          ))
        }


      </div>
    </section>
  );
};

export default Participate;
