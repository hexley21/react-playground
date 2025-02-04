import { useEffect, useState } from 'react'
import { List } from '~/api/explorer_client'
import type { Token } from '~/domain/token'
import { repo } from '~/local/explore-repo'

const ErrNoTokens = new Error("no tokens")

export function useExplore({ currentPage = 1 }: { currentPage?: number }) {
    const [tokens, setTokens] = useState<Token[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        (async () => {
            const cachedData = repo.Get(currentPage)

            if (cachedData.length) {
                setTokens(cachedData)
                setIsLoading(false)
                return
            }

            try {
                const response = await List(currentPage)

                if (!response.length) {
                    setError(ErrNoTokens.message)
                    return
                }

                repo.Insert(response, currentPage)

                setTokens(response)
                setError(null)
            } catch (err) {
                setError((err as Error).message)
            } finally {
                setIsLoading(false)
            }
        })()
    }, [currentPage])

    return {
        tokens,
        isLoading,
        error,
        currentPage
    }
}
