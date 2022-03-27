import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../../assets/images/bg.png"
import './header.scss'

export default function Header() {
    return (
        <div className="container" >
            <div className="header__title" >
                <Link to={"/"} className="header__link" >
                    <img src={bg} />
                </Link >
            </div >
        </div >
    )
}
