import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const HeroBenner = () => {
  return (
    <div className="w-full relative text-white text-[20px] max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              onClick={clickHandler}
              className=" absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasPrev) => {
          return (
            <div
              onClick={clickHandler}
              className=" absolute right-[0px] md:right-[0px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg rotate-180" />
            </div>
          );
        }}
      >
        <div>
          <img
            src="./slide-1.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[15px] bg-white font-oswald text-black/[0.9] absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px] font-medium uppercase cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img
            src="./slide-2.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[10px] bg-white font-oswald text-black/[0.9] absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px] font-medium uppercase cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img
            src="./slide-3.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[10px] bg-white font-oswald text-black/[0.9] absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px] font-medium uppercase cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBenner;
