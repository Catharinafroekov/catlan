"use client";
import { useState, useEffect } from "react";

const Camping = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const Bookings = async () => {
      const response = await fetch("http://localhost:8080/available-spots");
      const data = await response.json();
      setBookings(data);
    };
    Bookings(); // Call the function here
  }, [1]); // Add an empty dependency array to run only on mount, er det nødvendig

  return (
    <section className="bg-white bg-opacity-75 h-400 w-400 rounded-12 pb-7 pt-7">
      {bookings.map((booking, index) => (
        <div className="p" key={index}>
          <h2 className="text-xl font-bold">{booking.area}</h2>
          <p>{booking.available} Available</p>
        </div>
      ))}
    </section>
  );
};

export default Camping;
