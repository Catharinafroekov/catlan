"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";


const BandsLineup = () => {
    const [bands, setBands] = useState([]); // State til at gemme bands-data

    // Funktion til at hente data fra API
    useEffect(() => {
      const Bands = async () => {
        const response = await fetch("http://localhost:8080/bands?limit=15");
        const data = await response.json();
        setBands(data);
      };
      Bands();
    }, []);

    return (
        <section className="p-4">
          {bands.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {bands.map((band, index) => (
                <div key={index} className="text-center">
                  <Image
                    className="mb-4"
                    src={"http://localhost:8080/bands"}
                    width={250}
                    height={350}
                    alt={band.logo}
                  />
                  <p className="bg-gray-100 p-2 rounded shadow">{band.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      );}
  

export default BandsLineup;
