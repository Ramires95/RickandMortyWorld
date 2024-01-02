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
      className={`mx-5 my-5 ${
        selectedCharacter ? "blur-md pointer-events-none" : ""
      }`}
    >
      <img
        src={character.image}
        alt={character.name}
        title={`Click to view details of ${character.name}`}
        className="rounded-full cursor-pointer border-4 border-green-500"
        style={{ width: "10vw" }}
        onClick={() => openModal(character)}
      />
    </div>
  );

  const renderDetailsModal = () => (
    <div className="fixed text-white " onClick={closeModal}>
      <div className="flex" onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          className="rounded-full mx-5"
        />
        <div className="flex flex-col justify-between bg-black border-4 border-green-500 px-2 text-3xl">
          <button onClick={closeModal} className="text-center hover:bg-white hover:text-black rounded-full">
            Close
          </button>
          <p>Name: {selectedCharacter.name}</p>
          <p>Gender: {selectedCharacter.gender}</p>
          <p>Location: {selectedCharacter.location.name}</p>
          <p>Species: {selectedCharacter.species}</p>
          <p>Status: {selectedCharacter.status}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" flex flex-wrap text-start justify-center">
      {characters && characters.map(renderCharacterCard)}
      {selectedCharacter && renderDetailsModal()}
    </div>
  );
}
