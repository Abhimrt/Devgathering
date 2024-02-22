"use client"
import FlareCursor from '@/components/FlareCursor'
import Nav from '@/components/Nav'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const data = [
    {
        title: "Where You Elevate",
        content: [
            {
                psno: "WUE01",
                text: "Hackathons are a crucible for innovation, where ideas are forged into tangible projects under the pressure of time. The feedback from judges not only serves as a beacon for improvement but also shapes the participants' perspectives on their work. However, this valuable feedback can be voluminous and diverse, making it a challenge to analyze effectively. Moreover, unconscious biases in feedback can influence the reception and self-esteem of participants. Your mission, should you choose to accept it, is to develop an automated tool that not only categorizes the sentiment of feedback but also detects potential biases, ensuring a fair and constructive hackathon experience for all.",
                desc: <a href="https://drive.google.com/file/d/1VkS-nSQ7oZIfEtke6OATdS0PHX8UPLEl/view?usp=sharing" target='_blank' className='z-50 relative text-nowrap'>Description Link</a>
            },
        ]
    },
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
        <div className='relative mb-28 w-screen'>
            <Nav />
            {/* <FlareCursor /> */}
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
                <div className='my-10 ' >
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
            <Heading text={"Tracks"} />
            <div className='xl:flex-row flex max-lg:flex-col lg:justify-around mt-8 lg:mx-12'>
                <Pstrack name={"Blockchain"} image={"PSblockchain"}/>
                <Pstrack name={"Web 3.0"} image={"PSWeb3.0"}/>
                <Pstrack name={"Polygon "} image={"PSPolygon"}/> 
                <Pstrack name={"Ethereum "} image={"PSEthereum"}/> 
                <Pstrack name={"Hardware "} image={"PSHardware"}/> 
            </div>
            {/* <a href="" target='_blank' className='mx-auto my-8 absolute left-0 right-0 w-fit p-3  rounded-full text-blue-700 text-2xl'>Benefits of choosing Track</a> */}
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

const Pstrack = ({ name, image }) => {
    return (
        <div className='w-screen p-5 flex items-center justify-center'>
            <div className='rounded-md p-5 bg-Cblue flex items-center justify-center flex-col hover:scale-105 duration-300'>
                <Image width={200} height={200} src={`/images/${image}.png`} alt="" />
                <p className='text-Corange text-xl mt-4 '>{name}</p>
            </div>

        </div>
    )
}

const Heading = ({ text }) => {
    return (
        <div className='relative w-fit'>
            <Image width={350} height={100} className='-z-10 ' src="/images/ProblemHeading.png" alt="" />
            <h2 className='absolute top-[50%] translate-y-[-50%] my-auto justify-center w-full pr-14 text-center capitalize text-2xl z-10 text-Corange font-medium ' >{text}</h2>
        </div>
    )
}