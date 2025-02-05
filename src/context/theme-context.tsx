import { createContext, useState, useEffect } from "react"
import type { ThemeRepository } from "~/domain/theme"

interface ThemeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
    repo?: ThemeRepository
}

export const ThemeContext = createContext<ThemeContextType>({
    darkMode: false,
    toggleDarkMode: () => { },
})

function safeGetTheme(repo: ThemeRepository) {
    if (typeof window !== "undefined") {
        return repo.Get()
    }
    return false
}

export function ThemeProvider({ children, repo }: { children: React.ReactNode, repo: ThemeRepository }) {
    const [darkMode, setDarkMode] = useState<boolean>(() => safeGetTheme(repo))

    const toggleDarkMode = () => {
        if (typeof window !== "undefined") {
            repo.Update(!darkMode)
            setDarkMode(!darkMode)
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (darkMode) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode, repo }}>
            {children}
        </ThemeContext.Provider>
    )
}
