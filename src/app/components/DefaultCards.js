import { useState } from "react";
import { fetchRandomCharacter } from "../api/request";

export default function DefaultCards() {
    const [selectedCharacter, setCharacters] = useState("");

    const fetchRandomChar = async() => {

      const characterData = await fetchRandomCharacter();
      console.log(characterData);

      setCharacters(characterData)
    }

    const handleImageClick = () => {
    fetchRandomChar();
  };
    
    return (
        <>
         <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          className="rounded-full"
        />
        <button onClick={handleImageClick}>press me</button>
        <p>Name: {selectedCharacter.name}</p>
        <p>Gender: {selectedCharacter.gender}</p>
        <p>Location: {selectedCharacter.location.name}</p>
        <p>Species: {selectedCharacter.species}</p>
        <p>Status: {selectedCharacter.status}</p>
        </>
    )
    
};
