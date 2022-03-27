import React, { useRef } from 'react'
import PropTypes from 'prop-types'
Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onEnter: PropTypes.func,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    value: PropTypes.any
}

Input.defaultProps = {
    type: "text",
    placeholder: "",
    onEnter: null,
    onChange: null,
    value: ""
}

import "./input.scss";


function Input({ placeholder, type, onEnter, onChange, checked, value }) {

    const valueRef = useRef(value)

    function handleEnterKeyup(e) {
        if (e.keyCode !== 13) {
            return;
        }

        if (onEnter) {
            onEnter(valueRef.current)
        }
    }

    function handleInputOnchange(e) {
        valueRef.current = e.target.value
        if (onChange) {
            onChange(e.target.value)
        }
    }
    return (
        type === 'checkbox' || type === 'radio' ?
            (<input
                type={type}
                value={valueRef.current}
                checked={checked}
                onChange={handleInputOnchange}
            />
            ) : (
                <input
                    type={type}
                    className="input"
                    placeholder={placeholder}
                    onChange={handleInputOnchange}
                    onKeyUp={handleEnterKeyup}
                />
            )
    )
}


export default Input
