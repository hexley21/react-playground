import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import { ThemeContext } from "~/context/theme-context";

export function Header() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    return (
        <header className="w-full bg-card border-b border-b-border">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-3">
                <div className="flex items-center justify-start space-x-4">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="logo.svg" alt="Logo" className="h-12 w-12" />
                            <p className="text-2xl font-bold text-card-foreground">
                                PLAYGROUND
                            </p>
                        </Link>
                    </div>
                    <Link className="hidden sm:block" to="/explore">
                        <Button variant="link" className="!cursor-pointer font-bold text-muted-foreground transition-colors hover:text-primary">
                            Explore Cryptocurrencies
                        </Button>
                    </Link>
                </div>
                <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                    {darkMode ? <Sun /> : <Moon />}
                </Button>
            </div>
        </header >
    )
}

