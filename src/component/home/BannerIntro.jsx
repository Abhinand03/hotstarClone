import { div, tr } from "framer-motion/client";
import React from "react";
import Button from "../comman/Button";
import { FaPlay, FaPlus } from "react-icons/fa";

function BannerIntro({ details }) {
  return (
    <div className="h-full  bg-gradient-to-r from-[#0F1014] to-transparent text-white pl-4 ">
      <div className="flex flex-col justify-end h-full relative bottom-10">
        <p className="text-5xl font-bold">{details?.title}</p>
        <div className="flex gap-3 my-6">
          <p>{details?.releaseYear}</p>
          <p>U/A 16+</p>
          <p>2h 28m</p>
          <p>3 Languages</p>
        </div>
        <div className="w-96 ">
          <p className="text-lg text-gray-400  text-justify ">{details?.overview}</p>
        </div>
        <div className="flex gap-2 my-6">
          {details?.genres?.map((item) => (
            <>
              <p>{item?.name}</p>
              <p>|</p>
            </>
          ))}
          
        </div>
        <div className="flex">
          <Button className="bg-amber-600 px-24 rounded-2xl py-3 text-xl flex items-center gap-5 ">
            {" "}
            <FaPlay /> Watch Now
          </Button>
          <Button
            btn2={true}
            className="px-6 text-2xl ml-4 py-2 rounded-xl hover:bg-[#ffffff80]"
          >
            <FaPlus />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerIntro;
