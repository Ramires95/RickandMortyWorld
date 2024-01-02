export async function fetchCharacter(name, page = 1) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`
  );

  const data = await response.json();

  return data.results;
}


export async function fetchRandomCharacter() {

  const id = Math.floor(Math.random() * 826);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  const data = await response.json();
  return data;
}
