import type { ThemeRepository, Theme } from "~/domain/theme"

const storageKey = "is_dark"

export class LocalStorageThemeRepository implements ThemeRepository {
    Get(): Theme {
        return localStorage.getItem(storageKey) === "true"
    }
    Update(theme: Theme): void {
        localStorage.setItem(storageKey, JSON.stringify(theme))
    }
}
