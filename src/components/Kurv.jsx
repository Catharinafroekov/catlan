"use client";
import React from "react";

const Kurv = ({ cartItems = [] }) => {
  return (
    <div className="bg-white bg-opacity-75 h-400 w-400 rounded-12 pb-7 pt-7 fixed top-20 right-20 p-4">
      <h3 className="text-black">Kurv</h3>
      {cartItems.length > 0 && (
        <>
          <p className="text-black font-bold">Du har valgt:</p>
          <div>
            {cartItems.map((item, index) => (
              <p key={index} className="text-black">
                {item}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Kurv;
