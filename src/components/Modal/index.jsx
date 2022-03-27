import clsx from 'clsx'
import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from "prop-types";

import './modal.scss'

Modal.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool,
    showFooter: PropTypes.bool,
    onClose: PropTypes.func
}

Modal.defaultProps = {
    title: "",
    open: false,
    showFooter: false,
    onClose: null
}

export default function Modal({ children, title, open, showFooter, onClose }) {
    function handleCloseBtnClick() {
        if (onClose) {
            onClose();
        }
    }
    return createPortal((<div className={clsx(['modal', { 'active': open }])}>
        <div className="modal__overlay"></div>
        <div className="modal__dialog">
            <div className="modal__header">
                <h2 className="modal__title">{title}</h2>
                <button className="modal__close-btn" onClick={handleCloseBtnClick}>
                    <ion-icon name="close-outline" class="icon-24px"></ion-icon>
                </button>
            </div>
            <div className="modal__content">
                {children}
            </div>
            {
                showFooter && <div className="modal__footer"></div>
            }
        </div >
    </div >), document.querySelector('body'))
}
