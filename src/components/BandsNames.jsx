"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";


const BandsLineup = () => {
    const [bands, setBands] = useState([]); // State til at gemme bands-data

    // Funktion til at hente data fra API
    useEffect(() => {
      const Bands = async () => {
        const response = await fetch("http://localhost:8080/bands?limit=1");
        const data = await response.json();
        setBands(data);
      };
      Bands();
    }, []);

    return (
        <section className="p-4 flex justify-center">
          {bands.length > 0 ? (
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
              {bands.map((band, index) => (
                <div key={index} className="text-center bg-white max-w-60 flex flex-col justify-center">
                  <Image
                    className="m-2 mx-auto"
                    src={band.logo.includes("https") ? band.logo : `/img/${band.logo}`}
                    width={220}
                    height={220}
                    alt={band.logo}
                  />
               <p className="text-lilla p-2 mb-2">{band.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      );}
  

export default BandsLineup;
