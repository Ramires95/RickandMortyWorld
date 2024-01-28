export function SearchBar({ onTextChange, filterText, onFetchCharacter, fetchRandCharacter }) {
  return (
    <div className=" text-center my-5 text-xl">
      <label>Search Character</label>
      <form onSubmit={onFetchCharacter}>
        <input
          value={filterText}
          placeholder=" Character name"
          onChange={(e) => onTextChange(e.target.value)}
          className=" text-black rounded-lg border-2 border-green-500"
        />
      </form>
      <button onClick={fetchRandCharacter} className=" my-2 border-green-500 border-2 rounded-md bg-white text-black">Random Character</button>
    </div>
  );
}
