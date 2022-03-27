import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredPokemonListSelector, fetchPokemonList, fetchMorePokemon, updateSearch, pokemonListSelector } from "../../store/pokemonListSlice"
import { PokemonItem, Input, Button } from "../"
import { ModeContext } from '../../providers'
import "./pokemon-list.scss"

export default function PokemonList() {
    const [modes, setModes] = useState([
        {
            value: 'home',
            text: 'Home'
        },
        {
            value: 'homeShiny',
            text: 'Home Shiny'
        },
        {
            value: 'dreamWorld',
            text: 'Dream world'
        },
        {
            value: 'officialArtwork',
            text: 'Official Artwork'
        }
    ])
    const { mode, updateImageMode
    } = useContext(ModeContext)
    const dispatch = useDispatch();
    const pokemonList = useSelector(pokemonListSelector);
    const filteredPokemonList = useSelector(filteredPokemonListSelector);

    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchPokemonList())
        }

        fetchData();
    }, [])


    function handleSearchPokemon(searchKeyword) {
        dispatch(updateSearch(searchKeyword));
    }

    function handleUpdateImageMode(imageMode) {
        updateImageMode(imageMode)
    }

    async function handleLoadMorePokemon() {
        await dispatch(fetchMorePokemon(pokemonList.length))
    }
    return (
        <>
            <div className="container" >
                <div className="search" >
                    <Input placeholder="Enter your pokemon name" onEnter={handleSearchPokemon} />
                    <div className="mode">
                        {
                            modes.map(m => (
                                <span key={m.value}>
                                    <Input
                                        type="radio"
                                        name="mode"
                                        value={m.value}
                                        checked={mode === m.value}
                                        onChange={handleUpdateImageMode}
                                    />
                                    <span>{m.text}</span>
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className="pokemon-list">
                    {
                        filteredPokemonList.map(pokemon => {
                            return (
                                <PokemonItem
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    id={pokemon.id}
                                    imageUrls={pokemon.imageUrls}
                                    mode={mode}
                                ></PokemonItem>
                            )
                        })
                    }

                </div>
                <div className="load-more">
                    <Button onClick="handleLoadMorePokemon" onHandleClick={handleLoadMorePokemon}>Load more</Button>
                </div>
            </div>
        </>
    )
}
