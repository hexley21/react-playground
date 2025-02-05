import type { Token } from "~/domain/token"
import { client } from "./client"

export async function ListTokens(page: number): Promise<Token[]> {
    return await client.get<Token[]>("coins/markets", {
        params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: "100",
            page: page.toString(),
            sparkline: "false",
        },
    })
}
