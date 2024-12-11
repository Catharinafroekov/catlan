"use client";
import React, { useState, useEffect } from "react";

const Lineup = () => {
    const [bands, setBands] = useState([]); // State til at gemme bands-data

    // Funktion til at hente data fra API
    useEffect(() => {
        const fetchBands = async () => {
            const response = await fetch("http://localhost:8080/bands?limit=15");
            const data = await response.json();
            setBands(data.slice(0, 15)); // Begræns bands til 15
        };
        fetchBands();
    }, []);

    // Del bands op i niveauer for pyramiden
    const pyramidLevels = [];
    let levelSize = 5; // Start med 5 bands på første niveau
    let remainingBands = [...bands]; // Lav en kopi af bands

    while (remainingBands.length > 0) {
        pyramidLevels.push(remainingBands.slice(0, levelSize)); // Tag bands til dette niveau
        remainingBands = remainingBands.slice(levelSize); // Fjern de bands, der blev brugt
        levelSize = Math.max(1, levelSize - 1); // Reducer antal bands pr. niveau
    }

    return (
        <section className="flex flex-col items-center space-y-4">
            {pyramidLevels.map((level, index) => (
                <div key={index} className="flex justify-center space-x-4">
                    {level.map((band, idx) => (
                        <p key={idx} className="text-lg font-semibold">{band.name}</p>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Lineup;
