"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const ScheduleCarousel = () => {
  const [schedule, setSchedule] = useState(null); // State til festivalplan
  const [selectedDay, setSelectedDay] = useState("mon"); // Default dag

  // Hent data fra API
  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch("http://localhost:8080/schedule");
      const data = await response.json();
      setSchedule(data);
    };

    fetchSchedule();
  }, []);

  if (!schedule) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const scenes = Object.keys(schedule); // Fx ["Midgard", "Vanaheim", "Jotunheim"]

  return (
    <div className="p-5">
      {/* Ugedage-vælger */}
      <div className="flex justify-center space-x-4 mb-6">
        {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => (
         <button
         onClick={() => setSelectedDay(day)}
         className="px-4 py-2 rounded-md bg-white text-black focus:bg-lilla focus:text-white"
       >
         {day.toUpperCase()}
       </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
  {scenes.map((scene) => (
    <div key={scene} className="scene">
      <h2 className="text-xl font-bold text-center mb-4 text-black">{scene}</h2>
      <div className="relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          className="w-full"
        >
          {schedule[scene][selectedDay].map((slot, index) => (
            <SwiperSlide key={index}>
              <div className="h-40 flex flex-col justify-center items-center bg-blue-500 text-lilla rounded-lg shadow-md">
                {slot.act === "break" ? (
                  <p className="text-lg italic">Pause ({slot.start} - {slot.end})</p>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold">{slot.act}</h3>
                    <p>
                      {slot.start} - {slot.end}
                    </p>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default ScheduleCarousel;
