import React, { useState } from "react";
import { motion } from "framer-motion";
import PosterDetails from "./PosterDetails";

function VerticalPosters({ item }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-44">

    <div
      className=""
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
      >
      {toggle ? (
        
        <div className="z-10  absolute">

        
          <PosterDetails item={item}/>
        </div>
      ) : (
        <img
        src={item?.imageSet?.verticalPoster?.w720}
        className="w-96 "
        alt=""
        
        />
      )}
      </div>
    </div>
  );
}

export default VerticalPosters;
