import React from "react";

function Button({ children, className, onClick,btn2 }) {
  return (
    <button
      onClick={onClick}
      className={`${btn2 ?`bg-[#cdd2d64e]`:`px-4 py-2 text-white font-bold rounded-md bg-gradient-to-r from-[#1184EE] via-[#1184EE] via-40% to-[#D9076D] to-100%`} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
