export function getPockemon(namePock) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${namePock}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getPockemonList(namePock) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
