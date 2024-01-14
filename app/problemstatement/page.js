"use client"
import FlareCursor from '@/components/FlareCursor'
import Nav from '@/components/Nav'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const data = [
    {
        title: "",
        content: [
            {
                text: "How we can solve the problem of commuting from point A to B, through ev hoverboards, personal mobility robots and foldable e-scooter bots, while reducing traffic jams and pollution.",
                desc: ""
            },
            {
                text: "Innovate any present application using AI/GenAI",
                desc: ""
            },
            {
                text: "App to promote sustainable living",
                desc: ""
            },
            {
                text: "AI based automation in DevOps",
                desc: ""
            },
        ]
    },

]

const page = () => {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const showPannel = useRef("")

    const toggle = (i, i1) => {
        if (i != -1) {
            console.log(data[i].content[i1].desc)
            if (data[i].content[i1].desc == "") return;
            setSubIndex(i)
            setIndex(i1)
        }
        console.log(i, i1)

        showPannel.current.classList.toggle("hidden")
    }

    return (
        <div className='relative'>
            <Nav />
            <FlareCursor />
            <section className='flex justify-center items-center flex-col my-10 mt-28 lg:mt-40'>
                <h1 className='cursor-pointer  text-3xl lg:text-4xl font-semibold tracking-widest'>{"{"}Problem
                    <span className=' cursor-pointer bg-Cblue text-Corange px-1 py-2'>Statement{"}"}</span>



                </h1>
                <div className='w-screen '>
                    <ProblemContainer problemData={data} toggle={toggle} />
                </div>
            </section>
            {/* work on click */}
            <div ref={showPannel} className="hidden w-screen h-screen  bg-Ccream bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 fixed top-0 z-40 flex justify-center items-center lg:pt-[110px] overflow-auto" >
                <div className="w-screen h-screen fixed top-0 " onClick={() => toggle(-1)}></div>
                <div className='my-10' >
                    <Heading text={data[subIndex].title} />
                    <table className='w-[90%] lg:w-[80%]  mx-auto pstable shadow-lg my-5 text-sm lg:text-lg ' >
                        <thead className=' font-medium'>
                            <tr>
                                <td>S.No.</td>
                                <td>Problem Statement</td>
                            </tr>
                        </thead>
                        <tbody className='text-slate-700'>
                            <tr>
                                <td>1</td>
                                <td className='overflow-auto '>{data[subIndex].content[index].desc} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default page
const ProblemContainer = ({ problemData, toggle }) => {
    return (
        <>
            {
                problemData.map((e, i) => (
                    <div className='my-10' key={i}>
                        <Heading text={e.title} />
                        <table className='w-[90%] lg:w-[80%] mx-auto pstable shadow-lg my-5 text-xl' >
                            <thead className='text-lg font-medium'>
                                <tr>
                                    <td>S.No.</td>
                                    <td>Problem Statement</td>
                                </tr>
                            </thead>
                            <tbody className='text-slate-700'>
                                {
                                    e.content.map((e1, i1) => (
                                        <tr key={i1} onClick={() => toggle(i, i1)}>
                                            <td>{i1 + 1}</td>
                                            <td>{e1.text} {e1.desc != "" && <span className='cursor-pointer text-blue-700'>Read More..</span>}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ))
            }
        </>
    )
}

const Heading = ({ text }) => {
    return (
        <div className='relative'>
            <Image width={300} height={100} className='-z-10 ' src="/images/ProblemHeading.png" alt="" />
            <h2 className='absolute top-[50%] translate-y-[-50%] left-5 capitalize text-2xl z-10 text-Corange font-medium ' >{text}</h2>
        </div>
    )
}