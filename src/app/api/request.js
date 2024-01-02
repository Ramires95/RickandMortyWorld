export async function fetchCharacter(name, page = 1) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`
  );

  const data = await response.json();

  return data.results;
}

