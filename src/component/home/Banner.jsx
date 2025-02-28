import React, { useEffect, useState } from "react";
import BannerIntro from "./BannerIntro";
import BannerMenu from "./BannerMenu";
import { useSelector } from "react-redux";
import { div } from "framer-motion/client";

function Banner() {
  const banner = useSelector((state) => state.chnageBanner);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll =  window.innerHeight-200;
      const newOpacity = Math.min(scrollY / maxScroll, 1) 
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className="fixed top-0 left-28 w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${banner?.details?.imageSet?.horizontalPoster?.w1440})`,
        }}
      ></div>
      <div  style={{
       
        background: `rgba(15, 16, 20, ${opacity})`, 
      }} className="flex b ml-28 items-end h-screen justify-between pr-6">
        <BannerIntro details={banner?.details} />
        <BannerMenu />
      </div>
    </div>
  );
}

export default Banner;
