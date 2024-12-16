"use client";
import React, { useEffect, useState } from "react";
import Formel from "@/components/Formel";
import { useTimer } from "react-timer-hook";

// Timer component
function MyTimer({ expiryTimestamp, onExpire }) {
  const { seconds, minutes } = useTimer({ expiryTimestamp, onExpire });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Reservation Timer</h2>
      <div style={{ fontSize: "50px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

function FormPage() {
  const [reservationId, setReservationId] = useState(null);
  const [timerExpiry, setTimerExpiry] = useState(null);

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const reservationId = urlParams.get("reservationId");
    const expiryTime = urlParams.get("expiryTime");

    if (reservationId && expiryTime) {
      setReservationId(reservationId);
      setTimerExpiry(new Date(expiryTime)); // Set the timer expiry time
    }
  }, []);

  const handleConfirmReservation = async () => {
    try {
      const response = await fetch("http://localhost:8080/fullfill-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: reservationId }),
      });
      const data = await response.json();
      alert("Reservation confirmed!");
    } catch (error) {
      console.error("Failed to confirm reservation:", error);
    }
  };

  return (
    <div>
      {timerExpiry && (
        <>
          {/* Only render the timer if expiry time exists */}
          <MyTimer expiryTimestamp={timerExpiry} onExpire={() => alert("Reservation expired!")} />
          <Formel />
          <button onClick={handleConfirmReservation}>Confirm</button>
        </>
      )}
    </div>
  );
}

export default FormPage;
