"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Image from "next/image";

const Carousel = () => {
  const [bands, setBands] = useState([]); // State til at gemme bands-data

  // Funktion til at hente data fra API
  useEffect(() => {
    const Bands = async () => {
      const response = await fetch("http://localhost:8080/bands");
      const data = await response.json();
      setBands(data); // Gem dataen i state
    };

  },);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        {bands.map((band) => (
          <SwiperSlide key={band.name}>
            <div className="bg-purple-500 h-64 flex flex-col items-center justify-center text-white">
              <h2 className="text-xl font-bold">{band.name}</h2>
              <p>{band.genre}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slidePrev()} // Direkte adgang til swiper-metoder
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        <FaArrowCircleLeft />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()} // Direkte adgang til swiper-metoder
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default Carousel;
