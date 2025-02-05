import type { ExploreRepository } from "~/domain/explore"
import type { Token } from "~/domain/token"

const storageKey = "tokenList"

class SessionStorageExploreRepository implements ExploreRepository {
    Get(page: number): Token[] {
        let tokens: Token[] = []

        const cachedData = sessionStorage.getItem(`${storageKey}-${page}`)

        if (cachedData) {
            tokens = JSON.parse(cachedData)
        }

        return tokens
    }
    Insert(tokens: Token[], page: number): void {
        localStorage.setItem(storageKey, JSON.stringify(tokens))

        sessionStorage.setItem(`${storageKey}-${page}`, JSON.stringify(tokens))
    }
}

export const repo: ExploreRepository = new SessionStorageExploreRepository()
