import React from "react";

const KnowMore = ({index,text, handleModal,px,py}) => {
  return (
    <button
    value={index}
      onClick={handleModal}
      className={`drop-shadow-lg font-semibold tracking-widest bg-Cblue px-10 py-2 text-Corange rounded-full `}
    >
      {text}
    </button>
  );
};

export default KnowMore;
