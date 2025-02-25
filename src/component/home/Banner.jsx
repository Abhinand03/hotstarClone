import React from "react";
import BannerIntro from "./BannerIntro";
import BannerMenu from "./BannerMenu";
import { useSelector } from "react-redux";

function Banner() {
  const banner = useSelector((state) => state.chnageBanner);
  console.log(banner);

  return (
    <div className="relative pl-28 ">
      <div
        className="w-[100%] h-screen bg-cover  bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner?.details?.imageSet?.horizontalPoster?.w1440})` }}
      >
        <div className="flex items-end  justify-between pr-6 h-full">
          <BannerIntro details={banner?.details} />
          <BannerMenu />
        </div>
      </div>
    </div>
  );
}

export default Banner;
