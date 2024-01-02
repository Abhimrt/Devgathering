import Image from 'next/image'
import React from 'react'

const Sponsors = () => {
  return (
    <section id='sponsors' className='flex justify-center items-center flex-col w-screen min-h-[100vh] relative overflow-visible '>
        <h2 className='text-Cblue text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold relative flex justify-center overflow-visible items-center my-10' style={{textShadow:"1px 1px 3px black"}}>
        <Image src="/images/SponsorsLine.png" className='absolute  min-w-[90vw] h-auto -top-10  -z-10' width={1000} height={500} alt="" />
            <div className='text-right w-[80px] lg:w-[100px] min-h-[80px] lg:min-h-[100px]  pr-0 rounded-full bg-Cblue absolute -z-1  left-[-35px]'></div>
            <span className=' text-Corange relative z-1'>Sp</span>onsors
        </h2>
        <p className='text-Ccream text-lg text-center mx-5'>Want to be featured here and be a part of this event and help us. Fill the form given form below</p>
        <a href="https://abhisheksinghal.notion.site/abhisheksinghal/MLSA-MIET-Dev-Gathering-Call-for-Sponsors-0005e944a676484d96b298479af82617" target='_blank' className='text-Ccream border-2 border-Ccream px-5 py-2 rounded-xl mt-2 mb-5 hover:bg-Cblue duration-300 text-nowrap' >Sponsor Us</a>
        <div className='w-screen overflow-hidden bg-Cblue min-h-[40vh] flex items-center'>
        <div className='sponsorScroll  overflow-x-auto  flex   px-12 lg:pl-24 space-x-14'>
              <h3 className='text-Ccream text-center text-3xl w-screen ' >Declare soon...</h3>
                {/* <Box image="logo" name="1 MLSA "/>
                <Box image="logo" name="2 MLSA MIET"/>
                <Box image="logo" name="3 MLSA MIET"/>
                <Box image="logo" name="4 MLSA MIET"/>
                <Box image="logo" name="5 MLSA MIET"/>
                <Box image="logo" name="MLSA MIET"/>
                <Box image="logo" name="MLSA MIET"/>
                <Box image="logo" name="MLSA "/> */}
        </div>
        </div>
    </section>
  )
}

export default Sponsors

const Box = ({image, name}) => {
  return (
    <div className=' w-auto space-y-8 flex justify-center items-center flex-col h-[40vh]' >
                    <div className='h-[22vh] aspect-square bg-Corange rounded-xl overflow-hidden rotate-12 hover:rotate-0 duration-150 grid place-content-center relative ' >
                        <Image src={`/images/${image}.png`} className='w-[80%] opacity-20 animate-ping-slow mx-auto absolute -rotate-12 hover:rotate-0 duration-300' width={400} height={400} alt="" />
                        <Image src={`/images/${image}.png`} className='w-[80%]  mx-auto -rotate-12 hover:rotate-0 duration-300' width={400} height={400} alt="" />
                    </div>
                    <h3 className='h-[5vh] w-full bg-Corange grid place-content-center rounded-xl' >{name}</h3>
                </div>
  )
}
