"use client";
import Formel from "@/components/Formel";
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp, onExpire }) {
  const {
    seconds,
    minutes,
    start,
  } = useTimer({ expiryTimestamp, onExpire });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Reservation Timer</h2>
      <div style={{ fontSize: "50px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

function Reservation() {
  const [step, setStep] = useState(1);
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

        // Proceed to the next step
        setStep(2);
      }
    } catch (error) {
      console.error("Failed to reserve spot:", error);
    }
  };

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
      {step === 1 && (
        <div>
          <button onClick={handleReserveSpot} className="bg-red-600">Reserver biletter</button>
        </div>
      )}

      {step === 2 && timerExpiry && (
        <div>
          <MyTimer
            expiryTimestamp={timerExpiry}
            onExpire={() => alert("Reservation expired!")}
          />
          <Formel/>
          <button onClick={handleConfirmReservation}>Confirm</button>
        </div>
      )}
    </div>
  );
}

export default Reservation;
