import React from 'react'
import { Link } from 'react-router-dom'
import './pokemon-item.scss'

export default function PokemonItem({ id, name, mode, imageUrls }) {

    return (
        <div className="card pokemon">
            <div className="pokemon__content">
                <Link to={`detail/${id}`}>
                    <div
                        className="pokemon__image"
                        style={{ backgroundImage: `url(${imageUrls[mode]})` }}
                    ></div>
                </Link>
                <div className="pokemon__info">
                    <Link to={`detail/${id}`}>
                        <h4 className="pokemon__name">{name}</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}
