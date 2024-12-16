"use client";
import React from "react";

const Kurv = ({ cartItems = [] }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="bg-white h-400 w-400 rounded-12 pb-7 pt-7 fixed top-20 right-20 p-4">
      <h3 className="text-black">Kurv</h3>
      {cartItems.length > 0 && (
        <>
          <div>
            v
            {cartItems.map((item, index) => (
              <p key={index} className="text-black">
                {item}
              </p>
            ))}
          </div>
          <div className="mb-4">
            <p className="text-black font-bold mb-2">Billet</p>
            {cartItems.map((item, index) => (
              <p key={`billet-${index}`} className="text-black">
                {item.name} - {item.price} kr.
              </p>
            ))}
          </div>

          <p className="text-black font-bold">Billet</p>
        </>
      )}
    </div>
  );
};

export default Kurv;
