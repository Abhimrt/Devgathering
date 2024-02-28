"use client"

const Modal = ({ setShowModal, ModalContent}) => {
    return (
        <>
            <div className=" w-screen h-screen fixed z-30 top-0 left-0 bg-gray-700 opacity-30"></div>
            <div id="default-modal" tabindex="-1" aria-hidden="true" className="  overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl mx-auto my-auto max-h-full">
                    <div className="relative bg-gray-200 rounded-lg shadow-black shadow-lg">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-2xl font-semibold text-Cblue " style={{ textShadow: "1px 1px 3px rgba(0,0,0,.4) " }}>
                                {ModalContent.name} Details
                            </h3>
                            <button type="button" onClick={()=>setShowModal(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 text-Cblue text-lg md:p-5 space-y-4 py-5 px-8 lg:px-12">
                            <ul className="list-disc">

                            {
                                ModalContent.KnowMore.map((e,i)=>{
                                    return(
                                        <>
                                            <li><span className=" font-bold">{e.split(":")[0]}</span>{e.split(":")[1]?":  "+e.split(":").splice(1,).join(":"):""}</li>
                                        </>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal



// KnowMore: [
//     "InterviewBuddy: Mock Interview.",
//     "Echo3D:One Month free access to pro tier worth $99",
//     ".XYZ: Domain Name for One Year worth ₹165.",
//     "InterviewCake: Full access licences worth $249.",
//     "InterviewBuddy: Discount Vouchers for all.",
//     "Exclusive Swag kits."
//   ]