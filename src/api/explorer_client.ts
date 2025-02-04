import type { Token } from "~/domain/token";
import { createApiClient } from "~/lib/client";

const client = createApiClient("https://api.coingecko.com/api/v3/")

export type UTXO = {
    address?: string;
    txId: string;
    outputIndex: number;
    script: string;
    satoshis: number;
}

export async function List(page: number): Promise<Token[]> {
    const response = await client.get<Token[]>("coins/markets", {
        params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: "100",
            page: page.toString(),
            sparkline: "false",
        },
    })

    return response
}
