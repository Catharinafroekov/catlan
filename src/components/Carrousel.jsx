"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Carousel = () => {
  const swiperRef = useRef(null); // Reference til Swiper-instansen

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Gå til det forrige slide
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Gå til det næste slide
    }
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Gem Swiper-instansen
        }}
      >
        <SwiperSlide>
          <div className="bg-purple-500 h-64 flex items-center justify-center text-white">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-200 h-64 flex items-center justify-center text-white">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-800 h-64 flex items-center justify-center text-white">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Almindelige knapper til navigation */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        <FaArrowCircleLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default Carousel;
