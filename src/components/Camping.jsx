"use client";
import React, { useState, useEffect } from "react";
import CampingCard from "./CampingCard";
import CampingBox from "./CampingBox";

const Camping = () => {
  const [bookings, setBookings] = useState([]);

  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:8080/available-spots");
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  const addToCart = (booking) => {
    setSelectedBooking(booking);
    setCartItems((prevItems) => [
      ...prevItems,
      { ...booking, type: "camping" },
    ]);
  };

  return (
    <section className="p-10">
      <div className="flex flex-wrap">
        {bookings.map((booking, index) => (
          <CampingCard
            key={index}
            area={booking.area}
            available={booking.available}
            addToCart={addToCart}
          />
        ))}
      </div>

      <CampingBox className="p-20 " selectedBooking={selectedBooking} />
    </section>
  );
};

export default Camping;
