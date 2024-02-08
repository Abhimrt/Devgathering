import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <section id='Partners' className='w-screen overflow-hidden min-h-screen flex justify-center items-center flex-col relative'>
      {/* circles */}
      <>
        {/* big circle */}
        <div className='w-[200px] aspect-square rounded-full absolute -top-24 lg:top-0 right-[25%] lg:right-24 scale-[.7] lg:scale-100 bg-Cblue PartnerTopRight'></div>
        <div className='w-[200px] aspect-square rounded-full absolute top-28 left-0 -rotate-90 hidden lg:block bg-Cblue PartnerTopRight'></div>
        <div className='w-[200px] aspect-square rounded-full absolute bottom-10 lg:bottom-0 -right-[30%] opacity-20 lg:opacity-100 lg:-right-24 rotate-90 scale-[3] lg:scale-95  bg-Cblue PartnerTopRight'></div>
      </>
      <div className='border-4 border-Cblue my-10 px-8 relative z-10 rounded-full bg-Ccream bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  py-3' >
        <h2 className='text-Ccream text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold' style={{ textShadow: "3px 3px 6px black" }} >Partners</h2>
      </div>
      <>
        <p className='text-Ccream text-lg text-center mx-5'>Want to be featured here and be a part of this event and help us. Fill the form given form below</p>
        <a href="https://abhisheksinghal.notion.site/abhisheksinghal/MLSA-MIET-Dev-Gathering-Call-for-Sponsors-0005e944a676484d96b298479af82617" className='text-Ccream border-2 border-Ccream px-5 py-2 rounded-xl mt-2 mb-5 hover:bg-Cblue duration-300 text-no-wrap' >Become Partner</a>
      </>
      <div className='w-screen  h-auto flex justify-center items-center flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 my-10 lg:scale-125'>
        <Box image="PartnerWUE.png" />
        {/* <Box image="PartnerReskill.png"/>
            <div className='lg:w-48'></div> */}
      </div>
      {/* <div className='w-screen  flex justify-center items-center flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 md:my-10 '>
            <Box image="PartnerReskill.png"/>
            <Box image="PartnerReskill.png"/>
        </div> */}
      <div className='w-screen flex justify-center items-center flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 my-10 lg:scale-125'>
            {/* <div className='hidden'></div> */}
            <div className='lg:w-96 hidden lg:block'></div>
            <Box image="PartnerCommudle.png"/>
            {/* <Box image="PartnerReskill.png"/> */}
        </div>
    </section>
  )
}

export default Partners


const Box = ({ image }) => {
  return (
    <div className='w-[250px] h-[80px] rounded-r-full shadow-lg  bg-Cblue PartnerLogoBox relative flex justify-center items-center'>
      <Image src={`/images/${image}`} width={200} height={80} alt="" />
    </div>
  )
}
