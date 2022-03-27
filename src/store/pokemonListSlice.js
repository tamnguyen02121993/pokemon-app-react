import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { convertArrToObject } from "./utils"
import { pokemonApi } from "../services"

export const fetchPokemonList = createAsyncThunk('pokemon/fetchPokemonList', async () => {
    const data = await pokemonApi.fetchPokemonList();
    return data;
})

export const fetchMorePokemon = createAsyncThunk('pokemon/fetchMorePokemon', async (pokemonCount) => {
    const data = await pokemonApi.fetchPokemonList(pokemonCount);
    return data;
})

const initialState = {
    pokemons: {},
    search: "",
}

export const pokemonListSlice = createSlice({
    name: "pokemonList",
    initialState,
    reducers: {
        updateSearch(state, action) {
            state.search = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
            state.pokemons = convertArrToObject(action.payload, "id");
        });

        builder.addCase(fetchMorePokemon.fulfilled, (state, action) => {
            state.pokemons = { ...state.pokemons, ...convertArrToObject(action.payload, "id") }
        })
    }
})

export default pokemonListSlice.reducer;

export const { updateSearch } = pokemonListSlice.actions;

export const pokemonListSelector = (state) => Object.values(state.pokemon.pokemons);

export const filteredPokemonListSelector = (state) => {
    if (state.pokemon.search === "") {
        return Object.values(state.pokemon.pokemons);
    }
    return Object.values(state.pokemon.pokemons).filter((x) => x.name.includes(state.pokemon.search));
};