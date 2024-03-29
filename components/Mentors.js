"use client"

import Image from "next/image"
import Box from "./Box"



const mentor = [
    {
        image: "MeetRohan",
        name: "Rohan Kumar",
        domain: "Web Dev, App Dev ",
        position: "Full Stack Developer - MIDAS ",
        connect: "https://www.linkedin.com/in/rohan-kumar-a65a87175/ ",
    },
    {
        image: "MeetSudhir",
        name: "Sudhir Meena",
        domain: "Web Dev, CyberSecurity, AIML & DS ",
        position: "Lead SWE - Persistent Systems ",
        connect: "https://www.linkedin.com/in/sudhir-meena-b29982b7/ ",
    },
    {
        image: "MeetHarshita",
        name: "Harshita ",
        domain: "Web Development",
        position: "Alpha MLSA",
        connect: "https://www.linkedin.com/in/harshita-gupta-03b6b125b/",
    },
    {
        image: "MeetChanchal",
        name: "Chanchal Kuntal",
        domain: "Web Dev, AIML, DS",
        position: "Banasthali",
        connect: "https://www.linkedin.com/in/chanchal-kuntal-6b5506251/",
    },
    {
        image: "MeetManan",
        name: "Manan Bedi",
        domain: "Web Dev, AIML, DS ",
        position: "Business Analyst - Paytm ",
        connect: "https://www.linkedin.com/in/manan-bedi2908 ",
    },
    {
        image: "MeetAbhinav",
        name: "Abhinav Rai",
        domain: "Web Dev, App Dev, CyberSecurity, Web3, Blockchain, AIML, DS, IoT ",
        position: "SWE Aakash Edu. Services ",
        connect: "https://www.linkedin.com/in/abhinav-rai-6a7119154/ ",
    },
    {
        image: "MeetAbhishekM",
        name: "Abhishek Mishra",
        domain: "Web Development ",
        position: "SWE Builder.ai ",
        connect: "https://www.linkedin.com/in/abhishek-mishra-ror ",
    },
    {
        image: "MeetAbdal",
        name: "Abdal Lalit",
        domain: "App Dev, AIML & DS ",
        position: "Product Analyst - BharatPe ",
        connect: "https://www.linkedin.com/in/abdal-lalit/ ",
    },
    {
        image: "MeetAnup",
        name: "Anup",
        domain: "Web Dev, App Dev, Web3, Blockchain, AIML & DS ",
        position: "Solution Architect - NashTech ",
        connect: "https://www.linkedin.com/in/anupg-learn4tarakki/ ",
    },
    {
        "name": "Shivam Goyal",
        "domain": "Web Dev, Web3, Blockchain",
        "position": "Software Developer @JungleeGames",
        "connect": "https://www.linkedin.com/in/shivamgoyall/",
        "image": "MeetShivam"
    },
    {
        "name": "Ekanksh Mittal",
        "domain": "Web Dev, App Dev",
        "position": "Product Owner - Grappus",
        "connect": "https://www.linkedin.com/in/ekansh-mittal/",
        "image": "MeetEkanksh"
    },
    {
        "name": "Manav Gupta",
        "domain": "AIML & DS",
        "position": "LLM Engineer at Yogleads",
        "connect": "https://www.linkedin.com/in/--manav-gupta--/",
        "image": "MeetManav"
    },
    {
        "name": "Madhur Agrawal",
        "domain": "Cloud, AIML",
        "position": "MLSA Core Team",
        "connect": "https://www.linkedin.com/in/madhuragl",
        "image": "MeetMadhur"
    },
    {
        "name": "Abhishek Singhal",
        "domain": "Augmented Reality, NextJs, ThreeJs",
        "position": "Full Stack Developer",
        "connect": "https://abhisheksinghal.in",
        "image": "MeetAbhishek"
    },
    {
        "name": "Aman Chopra",
        "domain": "Web Development",
        "position": "DevRel - LambdaTest",
        "connect": "https://www.linkedin.com/in/iam-aman-chopra/",
        "image": "MeetAman"
    },
    {
        "name": "Bharat Varshney",
        "domain": "Web Dev, IoT",
        "position": "Sr. Tech Consultant - Aarete Technosoft",
        "connect": "https://www.linkedin.com/in/bharatvarshney/",
        "image": "MeetBharat"
    },
    {
        "name": "Harsh Raj",
        "domain": "Web Dev, App Dev",
        "position": "GL Bajaj ITM",
        "connect": "https://www.linkedin.com/in/harshraj2717/",
        "image": "MeetHarshR"
    },
    {
        "name": "Hitesh Garg",
        "domain": "App Development",
        "position": "Product Manager - QuickBlox",
        "connect": "https://www.linkedin.com/in/hiteshgarg285/",
        "image": "MeetHitesh"
    },
    {
        "name": "Purvesh Gupta",
        "domain": "Web Dev, Web3, Blockchain, AIML & DS",
        "position": "Intern - CryptoWaley",
        "connect": "https://www.linkedin.com/in/purvesh-gupta-736b95256/",
        "image": "MeetPurvesh"
    },
    {
        "name": "Rohit Yadav",
        "domain": "App Dev, AIML & DS",
        "position": "Incoming Data Analyst - LatentView Analytics",
        "connect": "https://www.linkedin.com/in/rty2423",
        "image": "MeetRohit"
    },
    {
        "name": "Somya Maheshwari",
        "domain": "App Development",
        "position": "MLSA Core Team",
        "connect": "https://www.linkedin.com/in/somya-maheshwari-0b5305243/",
        "image": "MeetSomya"
    },
    {
        "name": "Abhinav Yadav",
        "domain": "Web Development, CyberSecurity",
        "position": "CXI Mentor",
        "connect": "https://www.linkedin.com/in/yabhi1205/",
        "image": "MeetAbhinavY"
    },
    {
        "name": "Manas Chopra",
        "domain": "App Dev, AIML & DS",
        "position": "MSIT",
        "connect": "https://www.linkedin.com/in/themanas95826",
        "image": "MeetManas"
    },
    
    {
        "name": "Tushar Sharma",
        "domain": "Web Development",
        "position": "MLSA Core Team",
        "connect": "https://www.linkedin.com/in/tusharsh1803/",
        "image": "MeetTushar"
    }
]

const Mentors = ({

}) => {
    return (
        <>
            <section id="Mentors" className='flex justify-center items-center flex-col w-screen min-h-[100vh] mb-10 relative overflow-visible '>
                <h2 className='text-Cblue text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold relative flex justify-center overflow-visible items-center my-10' style={{ textShadow: "1px 1px 3px black" }}>
                    Mentors
                    <Image src="/images/SponsorsLine.png" className='invert absolute  min-w-[90vw] h-auto -top-10  -z-10' width={1000} height={500} alt="" />
                </h2>
                {/* <p className='text-Ccream text-lg text-center mx-5'>Want to be featured here and be a part of this event and help us. Fill the form given form below</p>
                <a href="https://www.commudle.com/fill-form/2147" target='_blank' className='text-Ccream border-2 border-Ccream px-5 py-2 rounded-xl mt-2 mb-5 hover:bg-Cblue duration-300 text-nowrap' >Become Mentors</a> */}
                <div className='w-screen overflow-hidden  min-h-[40vh] flex justify-center items-center pb-20'>
                    {/* <div className=" lg:mx-12 flex flex-col lg:flex-row min-w-screen min-h-screen flex-wrap space-y-10 lg:space-y-36"> */}
                    <div className="lg:w-[80vw] lg:min-h-[80vh] w-full flex flex-wrap gap-20  ">
                        {
                            mentor.map((ele, i) => {
                                return (
                                    <>
                                        <Box image={ele.image} domain={ele.domain} position={ele.position} name={ele.name} connect={ele.connect} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mentors