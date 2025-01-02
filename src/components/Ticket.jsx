"use client";
import React, { useState } from "react";
import Button from "./Button";
import Kurv from "./Kurv";

const Ticket = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <Kurv cartItems={cartItems} />

      <div className="bg-white bg-opacity-75 h-400 w-700 rounded-12 pb-7 pt-7 pl-5 ml-20 mb-20 xs:w-200 xs:ml-10 sm:w-400 lg:w-700">
        <h2 className="text-darkblue p-5">FOO-TICKET</h2>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
        <p className="pt-3 pb-3">Price: 799 kr.</p>
        <Button onClick={() => addToCart({ name: "FOO-TICKET", price: 799 })} />
      </div>

      <div className="bg-white bg-opacity-75 h-400 w-700 rounded-12 pb-7 pt-7 pl-5 ml-20 xs:w-200 xs:ml-10 sm:w-400 lg:w-700">
        <h2 className="text-darkblue p-5">VIP-TICKET</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat
          odit laudantium blanditiis nihil at natus.
        </p>
        <p className="pt-3 pb-3">Price: 1299 kr.</p>
        <Button
          className="w-25"
          onClick={() => addToCart({ name: "VIP-TICKET", price: 1299 })}
        />
      </div>
    </div>
  );
};

export default Ticket;
