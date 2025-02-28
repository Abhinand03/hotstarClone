import { motion } from "framer-motion";
import React from "react";
import Button from "../comman/Button";
import { BiPlay } from "react-icons/bi";

function PosterDetails({ item }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-96 pb-10 shadow-2xl   bg-[#0F1014]"
    >
      <img src={item?.imageSet?.horizontalPoster?.w1440} className=" " alt="" />
      <div className="flex justify-between px-4  gap-4 mt-4">
        <Button
          btn2={true}
          className={
            "flex w-full bg-white font-bold gap-3 items-center justify-center py-2 rounded-xl text-center "
          }
        >
          <BiPlay /> Wacth Now
        </Button>
        <Button
          btn2={true}
          className={
            "flex px-4 text-white font-bold gap-3 items-center justify-center py-2 rounded-xl text-center "
          }
        >
          +
        </Button>
      </div>
      <div className="px-4">
        <div className="flex gap-3 my-2 text-white">
          <p>{item?.releaseYear}</p>
          <p>U/A 16+</p>
          <p>2h 28m</p>
          <p>3 Languages</p>
        </div>
        <p className="text-white ">{item?.overview}</p>
      </div>
    </motion.div>
  );
}

export default PosterDetails;
