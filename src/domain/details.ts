export interface CoinDetails {
    id: string
    name: string
    symbol: string
    description: { en: string }
    market_data: {
        current_price: { [key: string]: number }
        market_cap: { [key: string]: number }
        price_change_percentage_24h?: number
        price_change_percentage_7d?: number
        price_change_percentage_30d?: number
        total_volume: { [key: string]: number }
    }
    links: {
        homepage: string[]
        blockchain_site: string[]
        official_forum_url: string[]
    }
    image: {
        thumb: string
        small: string
        large: string
    }
    genesis_date: string
    market_cap_rank: number
    developer_data: {
        forks: number
        stars: number
        subscribers: number
    }
}