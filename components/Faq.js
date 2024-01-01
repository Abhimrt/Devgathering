"use client";
import Image from "next/image";
import React, { useState } from "react";


const items = [
  {
    Question: "I’ve submitted wrong details in the registration form, how can I correct them?",
    Answer: "All corrections can be handled at the time of physical registrations, nothing needs to be done as of now.",
  },
  {
    Question: "I cannot attend the event for some reason, can someone attend it in my place?",
    Answer: "Yes, as long as the following conditions are met: The replacement attendee meets the eligibility criteria. A mail has been written to VANI.MITTAL@studentambassadors.com</a> in before the event, stating the change.",
  },
  {
    Question: "Can I cancel my registration?",
    Answer: "Cancellations will be handled on a case-to-case basis. Drop an email to VANI.MITTAL@studentambassadors.com in stating your reason for cancellation.",
  },
  {
    Question: "Do I need to pay money to register for the Hackathon?",
    Answer: "No, it's completely free!",
  },
  {
    Question: "Do I need to be in Meerut to take part in the Hackathon?",
    Answer: "Yes. It is an onsite hackathon.",
  },
  {
    Question: "What is the AI usage policy?",
    Answer: "AI tools are allowed. However, they must explicily mentioned wherever used in the codebase and cited in the final presentation.",
  },
  {
    Question: "Do I need to have any specific qualification to be a participant for the Hackathon?",
    Answer: "Yes, you must be a student from any University/College in India.",
  },
  {
    Question: "Do I need to be a student?",
    Answer: "Yes, you must be a student from any University/College in India.",
  },
  {
    Question: "What kind of solution will be accepted?",
    Answer: "Both technology based (software) as well as non-tech (hardware) based solutions will be accepted.",
  },
  {
    Question: "Is it an individual or team event?",
    Answer: "Students cannot participate individually. The maximum strength of a team can be 5 members and The minimum strength of a team can be 3 members. Every team member needs to fulfil the eligibility criteria. Teams must be formed before registration.",
  },
  {
    Question: "Can we form our own teams, or will we be allotted to a particular team?",
    Answer: "Participants are free to form their own teams. However, you must form your team before registration.",
  },
  {
    Question: "Can a college have multiple teams?",
    Answer: "Yes. There is no restriction on the number of teams from a college.",
  },
  {
    Question: "Can the participants of a team be from different colleges?",
    Answer: "Yes. There is no restriction here.",
  },
  {
    Question: "How detailed should be the presentation?",
    Answer: "You will be asked to present your idea to the judges in-person. Please work accordingly.",
  },
  {
    Question: "What is prototype code?",
    Answer: "It is basically a working code of the solution you are providing. It might not be fully prepared with all the functionalities, maybe just with the few main ones.",
  },
  {
    Question: "Since there is no specific technology mentioned, are there any restrictions on using number of pre-built libraries?",
    Answer: "There is no restriction to use any language, technology stack, or libraries. You can use any of them to create the web/mobile application. However, if you wish to use AI tools you must explicitly mention them in your presentation and submission.",
  },
  {
    Question: "Who will own the IP(Intellectual Property) Rights to the product that I have built?",
    Answer: "For the most part, the developer/developers of the web/mobile application will have all rights and own the IP of the product, unless specified otherwise by the problem statement. However, all code needs to be in public domain (open source) so that it can be evaluated by the judges.",
  },
{
    Question: "Where can I get to know about the event details?",
    Answer: "All details regarding the event are available on this website. Announcements will be made on through email.",
  },
{
    Question: "Whom can I contact for queries?",
    Answer: "For any questions or queries, drop us an email at VANI.MITTAL@studentambassadors.com",
  },
{
    Question: "What is the format of the hackathon?",
    Answer: "You have to select a problem statement based on your priority and availability. After this, you will need to make a midsubmission of your solution in a ppt/pdf form and later present your final solution to a panel of judges.",
  },
{
    Question: "Will the problem statement be given on the spot?",
    Answer: "The problem statements are already declared. Traverse to the problem statements page to find them.",
  },
]

// const items = [
//   {
//     Question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta laboriosam unde illo sapiente quas et, fuga quod dolor cumque eaque exercitationem maxime consequuntur quasi, aliquam vitae sunt necessitatibus harum.",
//     Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta laboriosam unde illo sapiente quas et, fuga quod dolor cumque eaque exercitationem maxime consequuntur quasi, aliquam vitae sunt necessitatibus harum.",
//   },
//   {
//     Question: "Section 2",
//     Answer: "Pellentesque ac ligula in tellus feugiat tincidunt.",
//   },
//   {
//     Question: "Section 3",
//     Answer: "Fusce aliquam euismod sem id commodo.",
//   },
//   {
//     Question: "Section 3",
//     Answer: "Fusce aliquam euismod sem id commodo.",
//   },
  
// ];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section id="faqs" className="w-screen min-h-screen">
      <div>
        
        <Image
          src="/images/FaqHeading.png"
          className="min-w-[120vw] lg:min-w-[70%] h-auto cursor-pointer"
          alt=""
          width={900}
          height={200}
        />
        {items.map((item, index) => (
          <div key={index} className="mb-2 w-[90vw] mx-auto ">
            <div
              className="flex justify-between items-center p-3 bg-Cblue text-Ccream cursor-pointer rounded-xl drop-shadow-xl"
              onClick={() => handleClick(index)}
            >
              <span className={`text-md font ${activeIndex === index?"opacity-100":"opacity-70"}`}>{item.Question}</span>
              <span className="text-Ccream">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="text-md w-[95%] lg:w-[98%] mx-auto p-3 bg-Cblack-50 text-Cblue rounded-b-xl border-2 border-Cblue drop-shadow-xl border-t-0 relative -top-2 ">
                {item.Answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
