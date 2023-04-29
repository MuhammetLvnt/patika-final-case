import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-600 rounded-md flex flex-col justify-center items-center p-8 font-bruno mt-10">
      <div className="flex justify-center items-center space-x-3 text-[#00FF00]">
        <FaRegCopyright />
        <p className="md:text-lg text-sm font-light leading-relaxed tracking-wide">
          Muhammet Levent
        </p>
      </div>
      <div>
        <p className="md:text-lg text-sm font-light leading-relaxed tracking-wide">
          fmss bilişim front-end practicum
        </p>
      </div>
    </footer>
  );
}

export default Footer;
