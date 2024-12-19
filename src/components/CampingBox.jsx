"use client";
import React from "react";

const CampingBox = ({ selectedBooking = null }) => {
  return (
    <div className="bg-white w-400 rounded-12 fixed top-30 right-20 xs:w-200 md:w-400 xs:right-7  md:right-20">
      <h3 className="text-l text-darkblue pl-4">Camping area</h3>
      {selectedBooking && (
        <div className="pl-4">
          <p className="text-black"> {selectedBooking.area}</p>
        </div>
      )}
    </div>
  );
};

export default CampingBox;
