import React from 'react'
import { useNavigate } from 'react-router-dom';
import pokeball from "../../assets/images/pokeball.png";
import './not-found.scss';
export default function NotFound() {
    document.body.style.backgroundColor = '#FFF';
    document.body.style.backgroundImage = 'unset';
    const navigate = useNavigate();
    return (
        <div className="error_container">
            <div className="error">
                <div className="four-number">4</div>
                <img className="pokeball" src={pokeball} alt="pokeball" />
                <div className="four-number">4</div>
            </div>
            <div className="error-text">
                <h4 className="error-primary">Uh-oh!</h4>
                <p className="error-semi">You look lost on your journey!</p>
                <button className="go-home-btn" onClick={() => navigate('/')}>Go back to Home</button>
            </div>
        </div >
    )
}
