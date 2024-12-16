"use client";
import React from "react";

const Kurv = ({ cartItems = [] }) => {
  const billetItems = cartItems.filter((item) => item.type === "billet");

  return (
    <div className="bg-white h-400 w-400 rounded-12 pb-7 pt-7 fixed top-20 right-20 p-4">
      <h3 className="text-black">Kurv</h3>

      {cartItems.length > 0 && (
        <>
          {/* Camping Sektion */}
          <div>
            <p className="text-black font-bold">Camping</p>
            {cartItems.map(
              (cartItem, index) =>
                cartItem.type === "campingsite" && ( // Filter for camping
                  <p key={index} className="text-black">
                    {cartItem.name} {/* Kun campingpladsens navn, uden pris */}
                  </p>
                )
            )}
          </div>

          {/* Billet Sektion */}
          {billetItems.length > 0 && (
            <div className="mb-4">
              <p className="text-black font-bold mb-2">Billet</p>
              {billetItems.map((cartItem, index) => (
                <p key={`billet-${index}`} className="text-black">
                  {cartItem.name} - {cartItem.price} kr.
                </p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Kurv;
