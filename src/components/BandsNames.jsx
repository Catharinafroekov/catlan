"use client"
import React, { useState, useEffect } from "react";

const BandsName = () => {
    const [bands, setBands] = useState([]); // State til at gemme bands-data

    // Funktion til at hente data fra API
    useEffect(() => {
      const Bands = async () => {
        const response = await fetch("http://localhost:8080/bands");
        const data = await response.json();
        setBands(data);
      };
      Bands();
    }, []);

    return (
      <section>
        {/* Kortlæg bands og vis hvert navn */}
        {bands.length > 0 ? (
          bands.map((band, index) => (
            <p key={index}>{band.name}</p>  // Vist hvert band's navn
          ))
        ) : (
          <p>Loading...</p>  // Vis besked, hvis bands er tom
        )}
      </section>
    );
}

export default BandsName;
