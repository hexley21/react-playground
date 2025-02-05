import type { CoinDetails } from "~/domain/details"
import { client } from "./client"

export async function GetDetails(coinId: string): Promise<CoinDetails> {
    return await client.get<CoinDetails>(`coins/${coinId}`, {
        params: {
            localization: "false",
            tickers: "false",
            market_data: "true",
            community_data: "true",
            developer_data: "true",
            sparkline: "false",
        },
    })
}
