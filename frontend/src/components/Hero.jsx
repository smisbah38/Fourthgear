import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Importing icons

import hero_img from "../assets/hero_img.png";
import hero_img2 from "../assets/hero_img2.jpg";
import hero_img3 from "../assets/hero_img3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [hero_img, hero_img2, hero_img3];

  useEffect(() => {
    const nextButton = document.querySelector(".swiper-button-next-custom");
    const prevButton = document.querySelector(".swiper-button-prev-custom");
    if (nextButton && prevButton) {
      nextButton.addEventListener("click", () =>
        document.querySelector(".swiper")?.swiper.slideNext()
      );
      prevButton.addEventListener("click", () =>
        document.querySelector(".swiper")?.swiper.slidePrev()
      );
    }
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] z-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom-lg",
          prevEl: ".swiper-button-prev-custom-lg",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="swiper w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background image */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-gray-200">
              <div className="text-center">
                {/* Main Heading */}
                <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed font-extrabold px-4">
                  BUY YOUR DREAM CAR
                </h1>

                <div className="text-center mt-4 md:mt-8">
                  <Link
                    to={"/collection"}
                    className="bg-slate-300 text-black px-12 py-4 font-semibold md:px-12 md:py-4 text-base active:bg-slate-700 rounded-md hover:bg-slate-100 transition-all ease-in-out duration-200"
                  >
                    Visit Our Collections
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows for Large Screens */}
      <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 left-4 z-20">
        <button className="swiper-button-prev-custom-lg cursor-pointer text-white bg-gray-800 bg-opacity-80 p-3 rounded-full text-2xl shadow-lg hover:bg-gray-700 transition-all">
          <FiChevronLeft size={24} />
        </button>
      </div>
      <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 right-4 z-20">
        <button className="swiper-button-next-custom-lg cursor-pointer text-white bg-gray-800 bg-opacity-80 p-3 rounded-full text-2xl shadow-lg hover:bg-gray-700 transition-all">
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Custom Navigation Arrows for Small Screens */}
      <div className="md:hidden absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        <button className="swiper-button-prev-custom cursor-pointer text-white bg-gray-800 bg-opacity-80 p-3 rounded-full text-2xl shadow-lg hover:bg-gray-700 transition-all">
          <FiChevronLeft size={24} />
        </button>
        <button className="swiper-button-next-custom cursor-pointer text-white bg-gray-800 bg-opacity-80 p-3 rounded-full text-2xl shadow-lg hover:bg-gray-700 transition-all">
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
