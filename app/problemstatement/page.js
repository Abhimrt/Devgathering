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
                psno: "PS01",
                text: "How we can solve the problem of commuting from point A to B, through ev hoverboards, personal mobility robots and foldable e-scooter bots, while reducing traffic jams and pollution.",
                desc: ""
            },
            {
                psno: "PS02",
                text: "Innovate any present application using AI/GenAI",
                desc: ""
            },
            {
                psno: "PS03",
                text: "App to promote sustainable living",
                desc: ""
            },
            {
                psno: "PS04",
                text: "AI based automation in DevOps",
                desc: ""
            },
            {
                psno: "PS05",
                text: "It is difficult for organizers to engage with audience at tech events using online polling or quizzing apps due to multiple limitations which include limited audience, limited features or even user interface. How would you solve this? Design an efficient system for organizing engagements between participants with their mobile and laptops. Try to add as many creative options to engage beyond polls as well.",
                desc: ""
            },
            {
                psno: "PS06",
                text: "Colleges have a mandate on the attendance of students and then a minimum of passing marks. But a lot of times students suffer when the right education or mentorship is not available. Design a system which can help students and college management to improve the quality of education and also help the best teaching professors to outshine.",
                desc: ""
            },
            {
                psno: "PS07",
                text: "A lot of times we are attending events which are quite far away from our college. Upon reaching the event we find out that more people from our college have shown up. How could these people coordinate beforehand and pool together?",
                desc: ""
            },
            {
                psno: "PS08",
                text: "Whenever you are purchasing a book, any appliance, laptop, or ordering food from outside, some people have zomato gold or swiggy premium subscriptions How to collectively order",
                desc: ""
            },
            {
                psno: "PS09",
                text: "Often food mess has a fixed menu decided by the contractor. Sometimes the food isn't good, sometimes the menu isn't favorable to most of the students but we have to live with it. Can you build a system where people can collectively create a food menu by probably voting on options and also rate the meals after they have it. This can also be used to regulate the vendor and the money that is given to them.",
                desc: ""
            },
            {
                psno: "PS10",
                text: "College infrastructure reporting system",
                desc: ""
            },
            {
                psno: "PS11",
                text: "Mass bunk planner",
                desc: ""
            },
            {
                psno: "PS12",
                text: "College students keep giving interviews and are selected or rejected at different times. But the questions which get asked don't get shared often. How can we build a system where people can post verified opportunities and also their experience of interviews or rating of how their internship went at a company",
                desc: ""
            },
            {
                psno: "PS13",
                text: "Event poster designer",
                desc: ""
            },
            {
                psno: "PS14",
                text: "Event poster generator like meme generator",
                desc: ""
            },
            {
                psno: "PS15",
                text: "Event photo frame generator like meme generator",
                desc: ""
            },
            {
                psno: "PS16",
                text: "Intra college event tracker for students",
                desc: ""
            },
            {
                psno: "PS17",
                text: "Event photo sharing application which can automatically tag and group all your photos once you mark yourself",
                desc: ""
            },
            {
                psno: "PS18",
                text: "Watch party for watching a movie or a series together",
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
                            <thead className='text-[1px] sm:text-lg font-medium'>
                                <tr>
                                    <td className='text-nowrap'>PS. No.</td>
                                    <td>Problem Statement</td>
                                </tr>
                            </thead>
                            <tbody className='text-slate-700'>
                                {
                                    e.content.map((e1, i1) => (
                                        <tr key={i1} onClick={() => toggle(i, i1)}>
                                            <td>{e1.psno}</td>
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