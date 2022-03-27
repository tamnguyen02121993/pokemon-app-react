import React, { useContext, useState } from 'react'
import clsx from "clsx";
import { themeData } from "../../services";
import { ThemeContext } from "../../providers";
import './theme.scss';

export default function Theme() {
    const themeContext = useContext(ThemeContext);
    const [isOpening, setIsOpening] = useState(false);
    const [themes, setThemes] = useState(themeData);
    const [themeName, setThemeName] = useState(themeContext.theme.name);
    function handleOpenThemeManage() {
        setIsOpening(!isOpening)
    }

    function handleSelectThemeItem(theme) {
        document.body.style.backgroundImage = theme.background;
        setThemeName(theme.name);
        themeContext.updateThemeData(theme.name);
    }

    return (
        <>
            <div className={clsx(['theme__icon', { 'active': isOpening }])} onClick={() => handleOpenThemeManage()} >
                <ion-icon name="settings-outline" class="icon-36px"></ion-icon>
            </div>
            <div className={clsx(['theme__container', { 'active': isOpening }])}>
                <h4 className="theme__name">{themeName}</h4>
                <div className="theme__content">
                    {
                        themes.map((t) => (
                            <div
                                key={t.name}
                                className={clsx(['theme__item', { 'active': t.name === themeName }])}
                                style={{ backgroundImage: t.background }}
                                onClick={() => handleSelectThemeItem(t)}
                            ></div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
