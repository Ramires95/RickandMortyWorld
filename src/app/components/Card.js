import React, { useState } from "react";

export function CharacterCard({ characters }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const renderCharacterCard = (character) => (
    <div
      key={character.id}
      className={`mx-5 my-5 ${selectedCharacter ? "blur-md" : ""}`}
    >
      <img
        src={character.image}
        alt={character.name}
        title={`Click to view details of ${character.name}`} // Tooltip message
        className="rounded-full cursor-pointer border-4 border-green-500"
        style={{ width: "10vw" }}
        onClick={() => openModal(character)}
      />
    </div>
  );

  const renderDetailsModal = () => (
    <div
      className="fixed bg-white text-black border-green-500 border-4"
      onClick={closeModal}
    >
      <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="text-end px-2">
          X
        </button>   
        <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          className="rounded-full"
        />
        <p>Name: {selectedCharacter.name}</p>
        <p>Gender: {selectedCharacter.gender}</p>
        <p>Location: {selectedCharacter.location.name}</p>
        <p>Species: {selectedCharacter.species}</p>
        <p>Status: {selectedCharacter.status}</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap text-center justify-center">
      {characters && characters.map(renderCharacterCard)}
      {selectedCharacter && renderDetailsModal()}
    </div>
  );
}
