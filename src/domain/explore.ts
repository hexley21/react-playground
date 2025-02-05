import type { Token } from "./token"

export interface ExploreRepository {
    Get(page: number): Token[]
    Insert(tokens: Token[], page: number): void
}
