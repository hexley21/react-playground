import { useEffect, useState } from "react"
import { GetDetails } from "~/api/coins/details_client"
import type { CoinDetails } from "~/domain/details"

export const useCoinDetails = ({ coinId }: { coinId: string }) => {
    const [coinDetails, setCoinDetails] = useState<CoinDetails | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCoinDetails = async () => {
            if (!coinId) return
            try {
                setCoinDetails(await GetDetails(coinId))
                setError(null)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch coin details")
                setCoinDetails(null)
            } finally {
                setIsLoading(false)
            }
        }

        fetchCoinDetails()
    }, [coinId])

    return {
        coinDetails,
        isLoading,
        error,
    }
}