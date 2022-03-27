import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonListSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})

