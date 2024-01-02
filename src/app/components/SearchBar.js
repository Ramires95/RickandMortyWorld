export function SearchBar({ onTextChange, filterText, onFetchCharacter }) {
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
    </div>
  );
}
