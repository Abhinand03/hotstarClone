import React from "react";
import Banner from "../component/home/Banner";
import VerticalPosters from "../component/home/VerticalPosters";
import { movie } from "../component/home/movies";
import { SwiperSlide, Swiper } from "swiper/react";

function Home() {
  return (
    <div className="relative">
      <Banner />
      <div className="relat z-1 py-5 bg-[#0F1014] ml-28">

        <div>
          <p className="font-bold text-2xl text-white">Latest Release</p>
          <div className="flex gap-4 scrollbar-hide   overflow-x-scroll ">
            {movie?.map((item) => (
              <div className="shrink-0">
                <VerticalPosters item={item} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl text-white">Latest Release</p>
          <div className="flex gap-9 scrollbar-hide   overflow-x-scroll ">
            {movie?.map((item) => (
              <div className="shrink-0">
                <VerticalPosters item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* <VerticalPosters />
        <VerticalPosters />
        <VerticalPosters /> */}
      </div>
    </div>
  );
}

export default Home;
