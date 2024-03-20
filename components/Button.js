import React from "react";

const Button = ({ link, text, px, py }) => {
  return (
    <a
      href={link}
      className={`drop-shadow-lg font-semibold tracking-widest bg-Cblue px-10 py-2 text-Corange rounded-full `}
      target="_blank"
    >
      {text}
    </a>
  );
};

export default Button;
