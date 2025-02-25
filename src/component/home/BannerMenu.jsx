import React from "react";
import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import { div } from "framer-motion/client";
import { Navigation } from "swiper/modules"; // Import Navigation module
import { useDispatch } from "react-redux";
import { chngeBanner } from "../../redux/Slice/bannerSlice";
import { movie } from "./movies";



function BannerMenu() {
    const dispach= useDispatch()
    
    const handleBanner=(item)=>{
        dispach(chngeBanner(item))
    }
    return (
    <div className="w-[500px] mb-32">
      <Swiper spaceBetween={10} slidesPerView={4} vloop={true}>
        {movie.map((item, index) => (
          <SwiperSlide key={index}>
            <img
            onClick={()=>handleBanner(item)}
              src={item?.imageSet?.horizontalPoster?.w1440}
              className="w-44 opacity-80 h-10 cursor-pointer hover:opacity-100 transition-transform transform hover:scale-125"
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerMenu;
