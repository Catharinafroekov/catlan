"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Komponent til at håndtere genre-filtrering
const Filtrering = ({ tags, onSelectTag }) => {
  return (
    <div className="mt-5 ml-5">
      {/* Dropdown for at vælge genre */}
      <select
        name="genre"
        id="genre-select"
        onChange={(e) => onSelectTag(e.target.value)} // Opdaterer valgt genre
        className="bg-lilla rounded-15 p-2 cursor-pointer hover:bg-lilla text-background"
      >
        <option value="">All bands</option>
        {/* Gennemgår alle tags (genrer) og laver en option for hver genre */}
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

const BandsLineup = () => {
  const [bands, setBands] = useState([]); // State til at holde alle bands
  const [selectedGenre, setSelectedGenre] = useState(""); // State til at holde valgt genre
  const [filteredBands, setFilteredBands] = useState([]); // State til at holde de filtrerede bands
  const [tags, setTags] = useState([]); // State til at holde genrer (tags)
  const [searchQuery, setSearchQuery] = useState(""); // State til at holde søgeord (til bandnavn)

  // useEffect hook til at hente data når komponenten bliver mountet
  useEffect(() => {
    const fetchBands = async () => {
      // Henter banddata fra en ekstern API
      const response = await fetch("https://freezing-humble-sauroposeidon.glitch.me/bands");
      const data = await response.json();
      setBands(data); // Sætter de hentede bands i state
      setFilteredBands(sortBands(data)); // Sorterer og sætter de filtrerede bands

      // Finder unikke genrer ved at mappe bandernes genre og fjerne dubletter
      const uniqueGenres = [...new Set(data.map((band) => band.genre))];
      setTags(uniqueGenres); // Sætter de unikke genrer i state
    };
    fetchBands(); // Kalder funktionen for at hente bands
  }, []); // Kører kun én gang, når komponenten mountes

  // useEffect hook til at filtrere bands, når genre eller søgning ændres
  useEffect(() => {
    let filtered = bands;

    // Filtrerer baseret på valgt genre
    if (selectedGenre) {
      filtered = filtered.filter((band) => band.genre === selectedGenre);
    }

    // Filtrerer baseret på søgeord (bandnavn)
    if (searchQuery) {
      filtered = filtered.filter((band) =>
        band.name.toLowerCase().includes(searchQuery.toLowerCase()) // Ignorerer store og små bogstaver
      );
    }

    // Opdaterer de filtrerede bands, efter at de er blevet sorteret
    setFilteredBands(sortBands(filtered));
  }, [selectedGenre, bands, searchQuery]); // Kører når genre, bands eller søgeord ændres

  // Funktion til at sortere bands alfabetisk
  const sortBands = (bands) => {
    return [...bands].sort((a, b) => a.name.localeCompare(b.name)); // Sorterer bandene alfabetisk efter navn
  };

  return (
    <div>
      {/* Kald Filtrering-komponenten for at vise genre-dropdown */}
      <Filtrering tags={tags} onSelectTag={setSelectedGenre} />

      {/* Søgefelt til at filtrere bands efter navn */}
      <div className="mt-5 ml-5">
        <input
          type="text"
          placeholder="Search for a band" // Pladsholdertekst
          value={searchQuery} // Værdi af input er bundet til searchQuery
          onChange={(e) => setSearchQuery(e.target.value)} // Opdaterer searchQuery ved brugerinput
          className="bg-lilla rounded-15 p-2 cursor-pointer hover:bg-lilla text-background"
        />
      </div>

      <section className="p-4 flex justify-center">
        {filteredBands.length > 0 ? (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
            {/* Gennemgår de filtrerede bands og viser dem */}
            {filteredBands.map((band, index) => (
              <div key={index} className="bg-white text-center flex flex-col justify-between min-h-[240px] max-w-[220px]">
                {/* Viser logo for hvert band */}
                <Image
                  className="m-2 mx-auto"
                  src={band.logo.includes("https") ? band.logo : `/img/${band.logo}`}
                  width={220}
                  height={220}
                  alt={band.name}
                />
                {/* Viser bandnavn */}
                <p className="text-black p-2 mb-2 h-10 flex items-center justify-center">{band.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p> // Vist, hvis der ikke er nogen bands at vise
        )}
      </section>
    </div>
  );
};

export default BandsLineup;
