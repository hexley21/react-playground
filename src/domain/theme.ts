export type Theme = boolean

export interface ThemeRepository {
    Get(): Theme
    Update(theme: Theme): void
}
