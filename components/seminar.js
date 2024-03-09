import Image from "next/image";

let data = [
    {
        image: "MeetAbhishek",
        name: "Abhinav Yadav",
        info: ["info1", "info2", "info3", "info4", "info5"]
    },
    {
        image: "MeetAbhishek",
        name: "Abhinav Yadav",
        info: ["info1", "info2", "info3", "info4", "info5"]
    },
    {
        image: "MeetAbhishek",
        name: "Abhinav Yadav",
        info: ["info1", "info2", "info3", "info4", "info5"]
    },
    {
        image: "MeetAbhishek",
        name: "Abhinav Yadav",
        info: ["info1", "info2", "info3", "info4", "info5"]
    },
    {
        image: "MeetAbhishek",
        name: "Abhinav Yadav",
        info: ["Lorem ipsum dolor sit amet consectetur adipisicing elit.", "info2", "info3", "info4", "info5"]
    },
]



export default function Seminar() {
    return (
        <>
            {data.length>0 &&<>
                <div className="w-full h-full overflow-x-hidden relative flex items-center justify-center mb-5 lg:mb-0 ">
                    <Image
                        src="/images/Participateheading.png"
                        className="absolute bottom-2 cursor-pointer lg:bottom-5 -right-2 lg:right-[20%] min-w-[105vw]  lg:min-w-[50vw] h-auto -z-1"
                        alt=""
                        width={600}
                        height={50}
                    />
                    <h2 className="text-Cblue cursor-pointer text-4xl sm:text-5xl tracking-[1px] lg:tracking-[5px]  font-bold pb-8 z-20 ">
                        Seminars
                    </h2>
                </div>
                <div className=" lg:mx-12 flex flex-col lg:flex-row min-w-screen min-h-screen flex-wrap space-y-10 lg:space-y-36">
                    {
                        data.map((e, i) => {
                            return (
                                <Box image={e.image} name={e.name} info={e.info} />
                            )
                        })
                    }
                </div>
            </>}
        </>
    )
}


const Box = ({
    image,
    name,
    info
}) => {
    return (
        <>
            <div className=" w-[85%] text-center space-y-0 mx-auto lg:w-[28%] lg:space-y-24  flex items-center justify-end min-h-[40vh]  flex-col relative ">
                <div className="w-full h-[400px] rounded-2xl hover:shadow-xl hover:shadow-black hover:scale-105 transition-all ease-in-out bg-Ccream hoverEffect flex shadow-lg shadow-black items-center justify-end flex-col text-Cblue relative  mt-[100px] lg:mt-0">
                    <Image
                        src={`/images/${image}.jpg`}
                        className=" rounded-lg p-4  border-gray-500 border-2 overflow-clip h-[200px] absolute w-[200px] z-10 top-[-100px]"
                        style={{ boxShadow: "0px 2px 5px rgba(0,0,0,.6) " }}
                        width={200}
                        height={200}
                        alt=""
                    />
                    <div className=" w-full flex text-Corange mx-auto h-64 mt-32 mb-0 px-0">
                        <div className="flip-card w-full">
                            <div className="flip-card-inner rounded-lg">
                                <div className="flip-card-front h-full rounded-2xl flex">
                                    <h3 className=" text-4xl text-Corange font-bold mx-auto my-auto">{name}</h3>
                                </div>
                                <div className="flip-card-back text-left rounded-2xl">
                                    <ul className="mt-8 mx-12 text-xl text-Cblue font-bold list-disc">
                                        {info && info.map((e, i) => {
                                            return (
                                                <>
                                                    <li key={i}>{e}</li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}