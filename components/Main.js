import React from 'react'
import Image from "next/image";

const Main = () => {
  return (
    <section id='main' className='h-[100dvh] overflow-hidden relative flex justify-center items-center flex-col space-y-10'>
        <Image src="/images/mainMeshLeft.png" alt="" className='h-screen w-auto absolute top-0 left-0' width={1920}  height={1000}/>
        <Image src="/images/mainMeshRight.png" alt="" className='h-screen w-auto absolute top-0 right-0' width={1920}  height={1000}/>
        <Image src="/images/mainsection.png" alt="" className='z-[-1] h-auto w-screen absolute top-0' width={1920}  height={1000}/>

        <h2 className='text-Cblue drop-shadow-md font-medium uppercase tracking-widest text-lg'  >First ever hackathon of mlsa miet</h2>
        <h1 className='text-white uppercase tracking-widest text-7xl font-extrabold '>Dev Gathering '24</h1>
        <h2 className='text-Cblue capitalize tracking-widest'>32 Hours Offline Hackathon March 15 to March 17</h2>

    </section>
  )
}

export default Main