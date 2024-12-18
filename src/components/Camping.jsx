"use client";
import React, { useState, useEffect } from "react";
import CampingCard from "./CampingCard";
import CampingBox from "./CampingBox";
import Kurv from "./Kurv";

const Camping = () => {
  const [bookings, setBookings] = useState([]); // Lagrer campingpladser
  const [cartItems, setCartItems] = useState([]); // Lagrer items i kurven
  const [selectedBooking, setSelectedBooking] = useState(null); // Håndterer valgt campingområde

  // Hent campingpladserne (bookings) fra API
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:8080/available-spots");
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  // Funktion til at tilføje campingplads til kurven (kun én ad gangen)
  const addToCart = (booking) => {
    setSelectedBooking(booking); // Sætter den valgte campingplads
    setCartItems((prevItems) => [
      ...prevItems,
      { ...booking, type: "camping" }, // Tilføjer campingområdet som item
    ]);
  };

  return (
    <section className="p-10 grid grid-cols-2">
      <div className="flex justify-self-end flex-wrap">
        {bookings.map((booking, index) => (
          <CampingCard
            key={index}
            area={booking.area}
            available={booking.available}
            addToCart={addToCart} // Sender addToCart funktionen som prop
          />
        ))}
      </div>

      {/* Kurv komponenten med cartItems og selectedBooking som props */}
      <CampingBox className="p-20 " selectedBooking={selectedBooking} />
    </section>
  );
};

export default Camping;
