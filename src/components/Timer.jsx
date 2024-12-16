"use client";
import React, { useState } from "react";
import Link from "next/link";

function Reservation() {
  const [reservationId, setReservationId] = useState(null);
  const [timerExpiry, setTimerExpiry] = useState(null);

  const handleReserveSpot = async () => {
    try {
      const response = await fetch("http://localhost:8080/reserve-spot", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ area: "Alfheim", amount: 3 }),
      });
      const data = await response.json();
      if (data.id) {
        setReservationId(data.id);

        // Start a 5-minute timer
        const expiryTime = new Date();
        expiryTime.setSeconds(expiryTime.getSeconds() + 300);
        setTimerExpiry(expiryTime);
      }
    } catch (error) {
      console.error("Failed to reserve spot:", error);
    }
  };

  return (
    <div>
      <button onClick={handleReserveSpot} className="bg-red-600">
        Gå til betaling
      </button>

      {/* Navigate to form page with reservationId and expiryTime */}
      {reservationId && timerExpiry && (
        <Link
          href={{
            pathname: "/form",
            query: {
              reservationId: reservationId,
              expiryTime: timerExpiry.toISOString(),
            },
          }}
        >
          <button className="bg-green-600 mt-5">
            Gå til formular
          </button>
        </Link>
      )}
    </div>
  );
}

export default Reservation;
