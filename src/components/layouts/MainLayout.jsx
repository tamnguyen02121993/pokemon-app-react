import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeContext, ModeContext } from '../../providers'
import { Header, Footer, Theme } from "../"
import { themeData } from "../../services";

export default function MainLayout() {
    const [theme, setTheme] = useState(themeData[0])
    const [mode, setMode] = useState('home')

    useEffect(() => {
        document.body.style.backgroundColor = `unset`;
        document.body.style.backgroundImage = theme.background;
    }, []);

    function updateThemeData(themeName) {
        setTheme(themeData.find(x => x.name === themeName))
    }

    function updateImageMode(imageMode) {
        setMode(imageMode)
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            updateThemeData
        }}>
            <ModeContext.Provider value={{
                mode, updateImageMode
            }}>
                <Header />
                <Outlet />
                <Footer />
                <Theme />
            </ModeContext.Provider>
        </ThemeContext.Provider>
    )
}
