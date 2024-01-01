import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <section id='partners' className='w-screen overflow-hidden min-h-screen flex justify-center items-center flex-col relative'>
        {/* circles */}
        <>
            {/* big circle */}
            <div className='w-[200px] aspect-square rounded-full absolute -top-24 lg:top-0 right-[25%] lg:right-24 scale-[.7] lg:scale-100 bg-Cblue absolute PartnerTopRight'></div>
            <div className='w-[200px] aspect-square rounded-full absolute top-28 left-0 -rotate-90 hidden lg:block bg-Cblue absolute PartnerTopRight'></div>
            <div className='w-[200px] aspect-square rounded-full absolute bottom-10 lg:bottom-0 -right-[30%] opacity-20 lg:opacity-100 lg:-right-24 rotate-90 scale-[3] lg:scale-95  bg-Cblue absolute PartnerTopRight'></div>
        </>
        <div className='border-4 border-Cblue mt-10 px-8 relative z-10 rounded-full bg-Ccream bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  py-3' >
        <h2 className='text-Ccream text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold' style={{textShadow:"3px 3px 6px black"}} >Partners</h2>
        </div>
        <div className='w-screen h-auto flex justify-center items-center flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 my-10'>
            <Box/>
            <Box/>
        </div>
        <div className='w-screen flex justify-center items-center flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 md:my-10 lg:ml-48'>
            <Box/>
            <Box/>
        </div>
        <div className='w-screen flex justify-center items-center flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 my-10 lg:ml-96'>
            <Box/>
            <Box/>
        </div>
    </section>
  )
}

export default Partners


const Box = () => {
  return (
    <div className='w-[250px] h-[80px] rounded-r-full shadow-lg  bg-Cblue PartnerLogoBox relative flex justify-center items-center'>
                <Image src="/images/PartnerReskill.png" width={200} height={80} alt="" />
            </div>
  )
}
