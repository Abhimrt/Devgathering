import Image from 'next/image'
import React from 'react'

const JoinMember = ({ content }) => {
    return (
        <section id={`${content.title}`} className='flex justify-center items-center flex-col w-screen min-h-[100vh] mb-10 relative overflow-visible '>
            <h2 className='text-Cblue text-3xl cursor-pointer sm:text-5xl tracking-[5px] font-bold relative flex justify-center overflow-visible items-center my-10' style={{ textShadow: "1px 1px 3px black" }}>
                {content.title}
                <Image src="/images/SponsorsLine.png" className='invert absolute  min-w-[90vw] h-auto -top-10  -z-10' width={1000} height={500} alt="" />
            </h2>
            <p className='text-Ccream text-lg text-center mx-5'>Want to be featured here and be a part of this event and help us. Fill the form given form below</p>
            <a href={content.link} target='_blank' className='text-Ccream border-2 border-Ccream px-5 py-2 rounded-xl mt-2 mb-5 hover:bg-Cblue duration-300 text-nowrap' >{content.linkTitle}</a>
            <div className='w-screen overflow-hidden  min-h-[40vh] flex justify-center items-center'>
                <div className='sponsorScroll  overflow-x-auto  flex justify-center items-center flex-wrap px-12 lg:pl-24 sm:gap-10  lg:gap-14'>
                    {
                        (content.Member.length == 0) ?
                            <h3 className='text-Cblue text-center text-3xl w-screen ' >Declare soon...</h3> :
                            content.Member.map((e, i) => (
                                <Box image={e.image} name={e.name} key={i} />
                            ))
                    }

                </div>
            </div>
        </section>
    )
}

export default JoinMember

const Box = ({ image, name }) => {
    return (
        <div className=' w-auto space-y-8 flex justify-center items-center flex-col h-[40vh]' >
            <div className='h-[22vh] aspect-square shadow-xl rounded-xl overflow-hidden  grid place-content-center relative ' >
                <Image src={`/images/${image}`} className='w-[100%] opacity-20 animate-ping-slow mx-auto absolute ' width={400} height={400} alt="" />
                <Image src={`/images/${image}`} className='w-[100%]  mx-auto' width={400} height={400} alt="" />
            </div>
            <h3 className='h-[5vh] w-full shadow-xl grid place-content-center rounded-xl text-xl' >{name}</h3>
        </div>
    )
}
