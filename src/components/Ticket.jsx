"use client";
import React, { useState } from "react";
import Button from "./Button";
import Kurv from "./Kurv";
import Camping from "./Camping";

const Ticket = () => {
  const [cartItems, setCartItems] = useState([]); // Lager til kurv

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Tilføj billet til kurven
    console.log("Tilføjet billet:", item); // Debugging
  };

  return (
    <div>
      {/* Kurv-komponenten */}
      <Kurv cartItems={cartItems} />
      {/* FOO-BILLET */}
      <div className="bg-white bg-opacity-75 h-400 w-700 rounded-12 pb-7 pt-7 pl-5 ml-20">
        <h2 className="text-darkblue p-5">FOO-BILLET</h2>
        <p className="pt-3 pb-3">Pris: 799 kr.</p>
        <Button onClick={() => addToCart({ name: "FOO-BILLET", price: 799 })} />
      </div>

      {/* VIP-BILLET */}
      <div className="mt-10 bg-white bg-opacity-75 h-400 w-700 rounded-12 pb-7 pt-7 pl-5 ml-20">
        <h2 className="text-darkblue p-5">VIP-BILLET</h2>
        <p className="pt-3 pb-3">Pris: 1299 kr.</p>
        <Button
          onClick={() => addToCart({ name: "VIP-BILLET", price: 1299 })}
        />
      </div>
    </div>
  );
};

export default Ticket;
