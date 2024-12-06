"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <div className="bg-lilla h-64 flex items-center justify-center text-white">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-purple-500 h-64 flex items-center justify-center text-white">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-purple-200 h-64 flex items-center justify-center text-white">
          Slide 3
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
