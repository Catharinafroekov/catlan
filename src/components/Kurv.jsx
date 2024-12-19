"use client";
import React from "react";
import Timer from "@/components/Timer";

const Kurv = ({ cartItems = [] }) => {
  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + (item.price || 0), 0)
    : 0;

  const fee = 99;

  const totalWithFee = totalPrice + fee;

  return (
    <div className="bg-white w-400 xs:w-200 md:w-400 rounded-12 pb-10 pt-2 p-4 fixed top-20 xs:right-7 md:right-20">
      <h3 className="text-xl text-darkblue pb-20">Cart</h3>
      <p className="text-darkblue">Tickets</p>

      {cartItems.length > 0 && (
        <div>
          {cartItems.map((item, index) => (
            <p key={index} className="text-black">
              {item.name} - {item.price} kr.
            </p>
          ))}
        </div>
      )}

      <div className="mt-4 border-t pt-4">
        <p className="text-black text-bold">Gebyr: 99 kr.</p>
        <p className="text-black font-bold text-lg mb-5">
          Samlet pris: {totalWithFee} kr.
        </p>
      </div>
      <Timer />
    </div>
  );
};

export default Kurv;
