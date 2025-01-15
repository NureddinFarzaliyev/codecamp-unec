import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark")

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.querySelector('html').classList.toggle('dark')
    }, [theme])

    useEffect(() => {
        if(theme === 'dark'){
            document.querySelector('html').classList.add('dark')
        }
    }, [])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}