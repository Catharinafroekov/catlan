"use client";
import React, { useState, useEffect } from "react";
import CampingCard from "./CampingCard";
import Kurv from "./Kurv";

const Camping = () => {
  const [bookings, setBookings] = useState([]); // Lagrer campingpladser
  const [cartItems, setCartItems] = useState([]); // Lagrer items i kurven

  // Hent campingpladserne (bookings) fra API
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:8080/available-spots");
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  // Funktion til at tilføje campingplads til kurven
  const addToCart = (area) => {
    setCartItems([area]);
  };

  return (
    <section className="p-10">
      <div className="flex flex-wrap">
        {bookings.map((booking, index) => (
          <CampingCard
            key={index}
            area={booking.area}
            available={booking.available}
            addToCart={addToCart} // Sender addToCart funktionen som prop
          />
        ))}
      </div>
      <Kurv cartItems={cartItems} /> {/* Viser de valgte campingpladser */}
    </section>
  );
};

export default Camping;
