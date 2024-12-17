"use client";
import React from "react";

const CampingBox = ({ cartItems = [], selectedBooking = null }) => {
  return (
    <div className="bg-white w-400 rounded-12  p fixed top-30 right-20">
      {/* Vis valgt campingområde */}
      <h3 className="text-l text-darkblue pl-4">Campingområde</h3>
      {selectedBooking && (
        <div className="pl-4">
          <p className="text-black"> {selectedBooking.area}</p>
        </div>
      )}
    </div>
  );
};

export default CampingBox;
