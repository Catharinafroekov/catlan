"use client";
import React, { useState } from "react";
import Button from "./Button";
import Kurv from "./Kurv";

const Ticket = () => {
  const [cartItems, setCartItems] = useState([]); // Lager til kurv

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Tilføj vare til kurv
  };

  return (
    <div>
      <div className="bg-white bg-opacity-75 h-400 w-700 rounded-12 pb-7 pt-7 pl-5 ml-20">
        <h2 className="text-darkblue p-5">FOO-BILLET</h2>
        <ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, corrupti
          rem laboriosam deleniti laudantium hic quis vitae, eius quam explicabo
          labore.
        </ul>
        <p className="pt-3 pb-3">Pris: 799 kr.</p>

        {/* Kald addToCart når knappen trykkes */}
        <Button onClick={() => addToCart({ name: "FOO-BILLET", price: 799 })} />

        {/* Send cartItems som props til Kurv komponenten */}
        <Kurv cartItems={cartItems} />
      </div>
      <div className="mt-10 bg-white bg-opacity-75 h-400 w-700 rounded-12 pb-7 pt-7 pl-5 ml-20">
        <h2 className="text-darkblue p-5">VIP-BILLET</h2>
        <ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, corrupti
          rem laboriosam deleniti laudantium hic quis vitae, eius quam explicabo
          labore.
        </ul>
        <p className="pt-3 pb-3">Pris: 1299 kr.</p>

        {/* Kald addToCart når knappen trykkes */}
        <Button
          onClick={() => addToCart({ name: "VIP-BILLET", price: 1299 })}
        />

        {/* Send cartItems som props til Kurv komponenten */}
        <Kurv cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Ticket;
