"use client";
import React from "react";

const Kurv = ({ cartItems = [] }) => {
  // Filtrer billetterne
  const billetItems = cartItems.filter((item) => item.type === "billet");

  // Beregn den samlede pris for camping og billetter
  const totalPrice = cartItems.reduce((acc, item) => {
    // Hvis item har en pris, så læg den til den samlede pris
    if (item.price) acc += item.price;
    return acc;
  }, 0);

  return (
    <div className="bg-white h-400 w-400 rounded-12 pb-7 pt-7 fixed top-20 right-20 p-4">
      <h3 className="text-black">Kurv</h3>

      {cartItems.length > 0 && (
        <>
          <div>
            <p className="text-black font-bold">Camping</p>
            {cartItems.map((item, index) => (
              <p key={index} className="text-black">
                {item.area}
              </p>
            ))}

            {/* Billet Sektion */}
            {billetItems.length > 0 && (
              <div className="mb-4">
                <p className="text-black font-bold mb-2">Billet</p>
                <ul>
                  {billetItems.map((cartItem, index) => (
                    <li key={`billet-${index}`} className="text-black">
                      {cartItem.name} - {cartItem.price} kr.
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Samlet pris */}
          <div className="mt-4 border-t pt-4">
            <p className="text-black font-bold text-lg">
              Samlet pris: {totalPrice} kr
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Kurv;
