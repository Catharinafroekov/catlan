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
    let levelSize = 5; //5 bands på første niveau af pyramiden
    let remainingBands = [...bands]; // kopi af bands

    while (remainingBands.length > 0) {
        pyramidLevels.push(remainingBands.slice(0, levelSize)); // Tag bands til dette niveau
        remainingBands = remainingBands.slice(levelSize); // Fjerner de bands, der blev brugt på første niveau
        levelSize = Math.max(1, levelSize - 1); // Reducer antal bands pr. niveau
    }

    return (
        <section className="flex flex-col items-center space-y-4 mb-10 mt-10">
            <h1 className="text-darkblue text-center font-bold p-10 text-2xl uppercase">Lineup</h1>
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
