import React from "react";

const KnowMore = ({link,text, setModal,px,py}) => {
  return (
    <button
      onClick={()=>{setModal(true)}}
      className={`drop-shadow-lg font-semibold tracking-widest bg-Cblue px-10 py-2 text-Corange rounded-full `}
    >
      {text}
    </button>
  );
};

export default KnowMore;
