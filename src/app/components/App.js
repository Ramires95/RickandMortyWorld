"use client";
import React, { useState } from "react";
import { fetchCharacter, fetchRandomCharacter } from "../api/request";
import { SearchBar } from "./SearchBar";
import { CharacterCard } from "./Card";

export default function App() {
  const [filterText, setFilterText] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleTextChange = (text) => {

    if(text === filterText) {
      return
    }
    setFilterText(text)

  }

  const fetchRandCharacter = async() => {
    try {
      const characterData = await fetchRandomCharacter();
      setCharacters([characterData])
    } catch (error) {
      console.log("Error fetching character data", error);
    }
  }

  const fetchAllCharacters = async (name, page = 1) => {
    try {
      const characterData = await fetchCharacter(name, page);

      if (characterData.length > 0) {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...characterData,
        ]);
        await fetchAllCharacters(name, page + 1);
      }
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  const handleFetchCharacter = async (e) => {
    e.preventDefault();

    if (filterText.trim() !== "") {
      setCharacters([]);
      await fetchAllCharacters(filterText);
    }
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onTextChange={handleTextChange}
        onFetchCharacter={handleFetchCharacter}
        fetchRandCharacter={fetchRandCharacter}
      />
      <CharacterCard characters={characters} />
    </div>
  );
}
