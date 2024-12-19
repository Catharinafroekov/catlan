"use client";
import React from "react";

const CampingCard = ({ area, available, addToCart }) => {
  return (
    <div
      onClick={() => addToCart({ area, available })}
      className="bg-white bg-opacity-75 hover:text-darkblue xs:m-3 sm:m-10 p-10 h-100 w-200 rounded-12 pb-7 pt-7"
    >
      <h2 className="text-xl font-bold">{area}</h2>
      <p>{available} Available</p>
    </div>
  );
};

export default CampingCard;
