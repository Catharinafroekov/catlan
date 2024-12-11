"use client";
import React, { useState, useEffect } from "react";
import "swiper/css";

const Carrousel = () => {
  const [schedule, setSchedule] = useState(null); // State til festivalplan
  const [selectedDay, setSelectedDay] = useState("mon"); // Default dag

  // Hent data fra API
  useEffect(() => {

    const fetchSchedule = async () => {
      const response = await fetch("http://localhost:8080/schedule");

    const Bands = async () => {
      const response = await fetch("http://localhost:8080/booking");kurv-mm
      const data = await response.json();
      setSchedule(data);
    };

    fetchSchedule();
  }, []);

  if (!schedule) {
    return <p>Loading...</p>; // Tilføj en loader, hvis data ikke er hentet endnu
  }

  const scenes = Object.keys(schedule); // Fx ["Midgard", "Vanaheim", "Jotunheim"]

  // Funktion til at vise slots
  const renderSlot = (slot) => {
    if (slot.act === "break") {
      return (
        <p className="text-lg italic">
          Pause ({slot.start} - {slot.end})
        </p>
      );
    } else {
      return (
        <>
          <h3 className="text-2xl font-bold">{slot.act}</h3>
          <p>
            {slot.start} - {slot.end}
          </p>
        </>
      );
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-darkblue text-center font-bold p-10 text-3xl">Program</h1>

      {/* Ugedage-vælger */}
      <div className="flex justify-center space-x-4 mb-6 ">
        {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className="px-4 py-2 rounded-md  text-black focus:bg-lilla focus:text-white bg-white bg-opacity-75"
          >
            {day.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6 ">
        {scenes.map((scene) => (
          <div key={scene} className="scene ">
            <h2 className="text-xl font-bold text-center mb-4 text-darkblue">
              {scene}
            </h2>
            <div className="carousel-container flex overflow-x-auto space-x-4">
              {/* Render slots som almindelige elementer */}
              {schedule[scene][selectedDay].map((slot, index) => (
                <div
                  key={index}
                  className="h-40 flex-shrink-0 w-64 flex flex-col justify-center items-center bg-blue-500 text-lilla rounded-lg shadow-md bg-white bg-opacity-75"
                >
                  {renderSlot(slot)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
