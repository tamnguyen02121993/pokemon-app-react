import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components';
import { ModeContext } from '../../providers';
import { pokemonApi, buildImagePath } from "../../services"
import './detail.scss';

export default function Detail() {
    const { mode } = useContext(ModeContext);
    const [pokemonDetail, setPokemonDetail] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function fetchPokemon() {
            const { height, weight, stats, name } = await pokemonApi.fetchPokemon(id);
            setPokemonDetail({
                height,
                weight,
                stats,
                id,
                name,
                imageUrls: buildImagePath(id)
            })
        }

        fetchPokemon();
    }, [id])

    function handleBackBtnClick() {
        navigate(-1);
    }

    return (
        pokemonDetail ? (<div className="container">
            <div className="card detail">
                <img
                    className="detail__image"
                    src={pokemonDetail.imageUrls[mode]}
                    alt={pokemonDetail.name}
                />
                <div className="detail__content">
                    <div className="detail__info">
                        <span className="detail__field">Name:</span>
                        <span className="detail__value">{pokemonDetail.name}</span>
                    </div>
                    <div className="detail__info">
                        <span className="detail__field">Height:</span>
                        <span className="detail__value">{pokemonDetail.height}</span>
                    </div>
                    <div className="detail__info">
                        <span className="detail__field">Weight:</span>
                        <span className="detail__value">{pokemonDetail.weight}</span>
                    </div>
                    <div v-if="pokemonDetail.stats" className="detail__info">
                        <span className="detail__field">Stats:</span>
                        <span className="detail__value">
                            <ul>
                                {
                                    pokemonDetail.stats.map(s => (
                                        <li key={s.stat.name}>
                                            <span>{s.stat.name}</span>
                                            &#40;
                                            <span>{s.base_stat}</span>
                                            &#41;
                                        </li>
                                    ))
                                }
                            </ul>
                        </span>
                    </div>
                    <Button onHandleClick={handleBackBtnClick} className="detail__btn" theme-button>Back</Button>
                </div>
            </div>
        </div>) : (<div>Loading...</div>)
    )
}
