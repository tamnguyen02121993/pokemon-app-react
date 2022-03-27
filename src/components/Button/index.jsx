import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from "prop-types";
import { ThemeContext } from '../../providers';
import { hexToRGB } from '../../services';
import './button.scss';

Button.propTypes = {
    themeButton: PropTypes.bool,
    onHandleClick: PropTypes.func
}

Button.defaultProps = {
    themeButton: false,
    onHandleClick: null
}

export default function Button({ children, themeButton, onHandleClick }) {

    const themeContext = useContext(ThemeContext)

    useEffect(() => {
        document.documentElement.style.setProperty('--main-color', hexToRGB(themeContext.theme.colors[0]))
        document.documentElement.style.setProperty('--semi-color', hexToRGB(themeContext.theme.colors[0], 0.8))
    }, [])

    function handleClick(e) {
        if (onHandleClick) {
            onHandleClick(e)
        }
    }

    return (
        <button className={clsx(['btn', { 'btn-theme': themeButton }])} onClick={handleClick}>
            {children}
        </button>
    )
}
