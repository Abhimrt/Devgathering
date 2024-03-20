import Image from 'next/image'
import React from 'react'
import Partners from './Partners'

const Sponsors = () => {
  return (
    <section id='Sponsors' className='flex justify-center items-center flex-col w-screen min-h-[100vh] mb-10 relative overflow-visible '>
      <Partners />
      <h2 className='text-Cblue text-3xl mt-10 lg:mt-20 cursor-pointer sm:text-5xl tracking-[5px] font-bold relative flex justify-center overflow-visible items-center my-10' style={{ textShadow: "1px 1px 3px black" }}>
        <span className='text-Corange z-10 relative'>Sp</span> onsors
        <Image src="/images/SponsorsLine.png" className='absolute  min-w-[90vw] h-auto -top-10  -z-10' width={1000} height={500} alt="" />
        <div className='text-right w-[80px] lg:w-[100px] min-h-[80px] lg:min-h-[100px]  pr-0 rounded-full bg-Cblue absolute -z-1  left-[-35px]'></div>
      </h2>
      {/* <p className='text-Ccream text-lg text-center mx-5'>Want to be featured here and be a part of this event and help us. Fill the form given form below</p>
      <a href="https://abhisheksinghal.notion.site/abhisheksinghal/MLSA-MIET-Dev-Gathering-Call-for-Sponsors-0005e944a676484d96b298479af82617" target='_blank' className='text-Ccream border-2 border-Ccream px-5 py-2 rounded-xl mt-2 mb-5 hover:bg-Cblue duration-300 text-nowrap' >Sponsor Us</a> */}


      {/* // Gold Sponsors */}

      <h3 className=' text-2xl rounded-full pb-2 pt-3 mt-8 mb-12 lg:mb-0 px-10 shadow-sm bg-Cblue text-Corange'>Gold Sponsors</h3>
      <div className='w-screen overflow-hidden mt-10  min-h-[40vh] flex justify-center items-center'>
        <div className='sponsorScroll  overflow-x-auto  flex justify-center items-center flex-wrap px-12 lg:pl-24 gap-8  lg:gap-14'>
          {/* <h3 className='text-Ccream text-center text-3xl w-screen ' >Declare soon...</h3> */}
          <Box1 image="sponsorsDevfolio" name="DEVFOLIO" />
          <Box1 image="sponsorsPolygon" name="POLYGON" />
          <Box1 image="sponsorsETH" name="ETHINDIA" />
          <Box1 image="sponsorsGithub" name="Github" />
          <Box1 image="sponsorsMiet" name="Github" />
          <Box1 image="sponsorsVirtual" name="Virtual Protocol" />
        </div>
      </div>

      {/* // Bronze Sponsors */}

      <h3 className=' text-2xl rounded-full pb-2 pt-3 mt-8 px-10 shadow-sm bg-Cblue text-Corange'>Bronze Sponsor</h3>
      <div className='w-screen overflow-hidden  min-h-[40vh] flex justify-center items-center'>
        <div className='sponsorScroll  overflow-x-auto  flex justify-center items-center flex-wrap px-12 lg:pl-24 sm:gap-10  lg:gap-20'>
          {/* <h3 className='text-Ccream text-center text-3xl w-screen ' >Declare soon...</h3> */}
          <Box image="SponsorTekshila" name="Tekshila AI" />

        </div>
      </div>


      {/* // In Track Sponsors */}

      <h3 className=' text-2xl rounded-full pb-2 pt-3 mt-8 px-10 shadow-sm bg-Cblue text-Corange'>Track Sponsors</h3>
      <div className='w-screen overflow-hidden  min-h-[40vh] flex justify-center items-center'>
        <div className='sponsorScroll  overflow-x-auto  flex justify-center items-center flex-wrap px-12 lg:pl-24 sm:gap-10  lg:gap-20'>
          {/* <h3 className='text-Ccream text-center text-3xl w-screen ' >Declare soon...</h3> */}
          <Box image="sponsorsQuillAudits" name="Quill Audits" />
          <Box image="trackTezos" name="Tezos" />
          <Box image="trackVirtual" name="Virtual Protocol" />
          <Box image="sponsorsDcornerr" name="Dcornerr" />
        </div>
      </div>


      {/* // In Kind Sponsors */}

      <h3 className=' text-2xl rounded-full pb-2 pt-3 mt-8 px-10 shadow-sm bg-Cblue text-Corange'>In Kind</h3>
      <div className='w-screen overflow-hidden  min-h-[40vh] flex justify-center items-center'>
        <div className='sponsorScroll  overflow-x-auto  flex justify-center items-center flex-wrap px-12 lg:pl-24 sm:gap-10  lg:gap-20'>
          {/* <h3 className='text-Ccream text-center text-3xl w-screen ' >Declare soon...</h3> */}
          <Box image="sponsorsXYZ" name=".XYZ" />
          <Box image="sponsorsECHO" name="Echo3d" />
          <Box image="sponsorsIC" name="Interview Cake" />
          <Box image="sponsorsInterviewBuddy" name="Interview Buddy" />
          <Box image="sponsorsDcornerr" name="Dcornerr" />

        </div>
      </div>

    </section>
  )
}

export default Sponsors

const Box = ({ image, name }) => {
  return (
    <div className=' w-auto space-y-8 flex justify-center items-center flex-col h-[40vh] ' >
      <div className='h-[22vh] aspect-square shadow-2xl rounded-xl overflow-hidden rotate-12 hover:rotate-0 duration-150 grid place-content-center relative ' >
        {/* <Image src={`/images/${image}.png`} className='w-[80%] opacity-20 animate-ping-slow mx-auto absolute -rotate-12 hover:rotate-0 duration-300' width={400} height={400} alt={`${name} LOGO`} /> */}
        <Image src={`/images/${image}.png`} className='w-[80%]  mx-auto -rotate-12 hover:rotate-0 duration-300' width={400} height={400} alt={`${name} LOGO`} />
      </div>
      <h3 className='h-[5vh] w-full shadow-xl grid place-content-center rounded-xl text-xl' >{name}</h3>
    </div>
  )
}
const Box1 = ({ image, name }) => {
  return (
    <div className=' w-auto space-y-8 flex justify-center items-center flex-col ' >
      <div className=' overflow-hidden duration-150 grid place-content-center relative ' >
        {/* <Image src={`/images/${image}.png`} className='w-[90%] opacity-20 animate-ping-slow mx-auto absolute -rotate-12 duration-300' width={400} height={400} alt={`${name} LOGO`} /> */}
        <Image src={`/images/${image}.png`} className=' shadow-md  mx-auto duration-300' width={300} height={400} alt={`${name} LOGO`} />
      </div>
      {/* <h3 className='h-[5vh] w-full shadow-xl grid place-content-center rounded-xl text-xl' >{name}</h3> */}
    </div>
  )
}
