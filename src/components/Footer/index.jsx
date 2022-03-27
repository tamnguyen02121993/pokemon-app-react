import React, { useState } from 'react'
import { Modal } from "../"
import info from "../../assets/jsons/info.json";
import contact from "../../assets/jsons/contact.json";
import skills from "../../assets/jsons/skills.json";
import avatar from "../../assets/images/avatar.jpg";
import './footer.scss'

export default function Footer() {

    const [isOpenAboutModal, setIsOpenAboutModal] = useState(false);
    const [isOpenContactModal, setIsOpenContactModal] = useState(false);
    function handleOpenModal(type) {
        if (type === 'about') {
            setIsOpenAboutModal(true)
            return;
        }
        setIsOpenContactModal(true)
    }

    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="footer__navigation">
                        <a href={import.meta.env.VITE_APP_API_DOCS} target="_blank" className="navigation__item">API Docs</a>
                        <div className="navigation__item" onClick={() => handleOpenModal('about')}>about me</div>
                        <div className="navigation__item" onClick={() => handleOpenModal('contact')}>contact me</div>
                    </div>
                    <div className="footer__copyright">
                        &copy; Copyright by
                        <a href={import.meta.env.VITE_APP_GITHUB} target="_blank" className="footer__link"> Tam Nguyen</a>
                    </div>
                </div>
            </div>
            <Modal open={isOpenAboutModal} title="About me" onClose={() => setIsOpenAboutModal(false)}>
                <div className="about">
                    <div className="about__avatar">
                        <div className="about__image" style={{ backgroundImage: `url(${avatar})` }} ></div>
                    </div>
                    <div className="about__infos">
                        {
                            info.map(i => (
                                <div
                                    className="about__info"
                                    key={`${i.attribute}-${i.value}`}
                                >
                                    <span className="about__attr" > {i.attribute}:</span>
                                    <span className="about__value">
                                        {
                                            i.attribute === 'Name' ? (<a href={import.meta.env.VITE_APP_GITHUB} target="_blank">{i.value}</a>) : (
                                                i.value
                                            )
                                        }
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Modal>
            <Modal open={isOpenContactModal} title="Contact me" onClose={() => setIsOpenContactModal(false)}>
                <div className="contact">
                    {
                        contact.map(c => (
                            <div
                                className="contact__info"
                                key={`${c.attribute}-${c.value}`}>
                                <span className="contact__attr" >
                                    <ion-icon name={c.ionicicon} class="contact__icon"></ion-icon>
                                    {c.attribute}
                                </span >
                                <span className="contact__value" >
                                    <a href={c.attribute === 'Email' ? `mailto:${c.value}` : c.value}
                                        target="_blank"
                                    >{c.value}</a>
                                </span>
                            </div>
                        ))
                    }

                    <div className="skills" >
                        {
                            skills.map(s => (
                                <a key={`${s.skill}-${s.ionicicon}`}>
                                    <ion-icon name={s.ionicicon} class="icon-48px" title={s.skill}></ion-icon>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </Modal >
        </>
    )
}
