import { httpClient } from "../config";

function extractId(url) {
  const parts = url.split("/");
  return parts[6];
}

export function buildImagePath(id) {
  return {
    dreamWorld: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    home: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
    homeShiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`,
    officialArtwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  };
}

export const pokemonApi = {
  fetchPokemonList: async (offset = 0) => {
    const { results } = await httpClient.get(
      `/pokemon?limit=${import.meta.env.VITE_APP_PAGE_SIZE}&offset=${offset}`
    );
    const computedResult = results.map((x) => {
      const id = extractId(x.url);
      return {
        ...x,
        id,
        imageUrls: buildImagePath(id),
      };
    });
    return computedResult;
  },
  fetchPokemon: async (id) => {
    const data = await httpClient.get(`/pokemon/${id}`);
    return data;
  },
};
