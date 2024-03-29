import Image from 'next/image'
import React from 'react'

const Data = [
    {
        title: "Event Registration Start",
        date: "11/01/2024",
    },
    {
        title: "Problem Statement Live",
        subTitle: "On Website",
        date: "15/01/2024",
    },
    {
        title: "Submission Start",
        subTitle: "Online",
        date: "20/02/2024",
        para: "The submission involved presenting innovative ideas via PowerPoint presentations for the designated problem statements."
    },
    {
        title: "Event Registration Ends",
        date: "15/03/2024",
    },
    {
        title: "Submission Ends",
        date: "15/03/2024",
    },
    {
        title: "Shortlisted Teams Announced",
        subTitle: "Online",
        date: "15/03/2024",
    },
    {
        title: "RSVP Confirmation",
        subTitle: "Mail",
        date: "15/03/2024 - 23/03/2023",
    },
    {
        title: "Final Teams Announced",
        subTitle: "Online",
        date: "25/03/2024",
    },
    {
        title: "Hackathon Day",
        subTitle: "Offline",
        date: "30/03/2024",
        link: "a"
    },
]

const EventSchedule = () => {
    return (
        <section className='relative' id='event'>
            <img src="/images/EventSemicircle.png" alt="" width={200} height={200} className='absolute hidden lg:block top-10 animate-wiggle' />
            <div id="timeline" className='my-10 mx-auto grid place-items-center'>
                <div className="text-3xl lg:text-7xl my-5 text-nowrap text-center cursor-pointer bg-Cblue text-Corange w-fit mx-auto px-8 rounded-full py-4" style={{ textShadow: " 1px 1px 3px var(--Cblue)" }} >Event Schedule</div>
                <div className="timelineContent">
                    {
                        Data.map((e, i) => {
                            return (
                                <div className="timelineTextBox" key={i}>
                                    <div className="border"></div>
                                    <h2>{e.title} </h2>
                                    {e.subTitle && <div className="position">{e.subTitle}</div>}
                                    <div className="date">{e.date}</div>
                                    {e.para && <p>{e.para}</p>}
                                    {e.link && <a href="https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/events/mlsa-miet-dev-gathering-2024/agenda" className='text-2xl text-blue-500 relative z-50' target='_blank'>Event Agenda</a>}
                                </div>
                            )
                        })
                    }
                </div>

            </div></section>
    )
}

export default EventSchedule