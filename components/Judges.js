"use client"

import Image from "next/image"
import Box from "./Box"



const judges = [
    {
        name: " ",
        image: " ",
        phone:" ",
        mail:" ",
        instagram:" ",
        linkedin:" ",
        twitter:" ",
        connect:" ",
    }
]

const Judges = ({

}) => {
    return (
        <>
            <section id="Judges" className='flex justify-center items-center flex-col w-screen min-h-[100vh] mb-10 relative overflow-visible '>
                <h2 className='text-Cblue text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold relative flex justify-center overflow-visible items-center my-10' style={{ textShadow: "1px 1px 3px black" }}>
                    Judges
                    <Image src="/images/SponsorsLine.png" className='invert absolute  min-w-[90vw] h-auto -top-10  -z-10' width={1000} height={500} alt="" />
                </h2>
                <p className='text-Ccream text-lg text-center mx-5'>Want to be featured here and be a part of this event and help us. Fill the form given form below</p>
                <a href="https://www.commudle.com/fill-form/2147" target='_blank' className='text-Ccream border-2 border-Ccream px-5 py-2 rounded-xl mt-2 mb-5 hover:bg-Cblue duration-300 text-nowrap' >Become Judge</a>
                <div className='w-screen overflow-hidden  min-h-[40vh] flex justify-center items-center pb-20'>
                    {/* <div className=" lg:mx-12 flex flex-col lg:flex-row min-w-screen min-h-screen flex-wrap space-y-10 lg:space-y-36"> */}
                    <div className="lg:w-[80vw] lg:min-h-[80vh] w-full flex flex-wrap space-y-10 lg:space-x-28 lg:space-y-32 ">
                        <Box image={"MeetAbhishek"} name={"Abhinav Yadav"} />

                    </div>
                </div>
            </section>

        </>
    )
}

export default Judges