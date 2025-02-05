import type { Route } from "./+types/details"
import { useParams } from "react-router"
import { TradingViewWidget } from "~/components/ui/trading-view-widget"
import { useCoinDetails } from "~/hooks/use-details"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Coin Details" },
        { name: "description", content: "Detailed view of cryptocurrency coin" },
    ]
}

export default function Details() {
    const { coinId } = useParams<{ coinId: string }>()
    const { coinDetails, isLoading, error } = useCoinDetails({ coinId: coinId || "" })

    if (isLoading) return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] w-full">
            <h1 className="text-center text-3xl">Loading...</h1>
        </main>
    )

    if (error) return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] w-full">
            <h1 className="text-center text-3xl text-destructive">{error}</h1>
            <h2 className="text-center text-muted-foreground">try again in couple seconds</h2>
        </main>
    )
    
    if (!coinDetails) return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] w-full">
            <h1 className="text-center text-3xl">Coin not found...</h1>
        </main>
    )

    return (
        <main className="max-w-7xl p-4 mx-auto flex flex-col space-y-4 md:flex-row md:space-x-4">
            <section className="w-full md:w-sm flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <img src={coinDetails.image.large} alt={coinDetails.name} className="w-16 h-16" />
                    <div>
                        <h1 className="text-3xl font-bold">
                            {coinDetails.name} ({coinDetails.symbol.toUpperCase()})
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Market Cap Rank: #{coinDetails.market_cap_rank}
                        </p>
                    </div>
                </div>

                <div className="bg-card p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Price Data</h2>
                    <p>
                        <span className="font-bold">Current Price:</span> $
                        {coinDetails.market_data.current_price.usd}
                    </p>
                    <p>
                        <span className="font-bold">24h Change:</span>{" "}
                        {coinDetails.market_data.price_change_percentage_24h != null ? coinDetails.market_data.price_change_percentage_24h.toFixed(2) : "N/A"}%
                    </p>
                    <p>
                        <span className="font-bold">7d Change:</span>{" "}
                        {coinDetails.market_data.price_change_percentage_7d != null ? coinDetails.market_data.price_change_percentage_7d.toFixed(2) : "N/A"}%
                    </p>
                    <p>
                        <span className="font-bold">Market Cap:</span> $
                        {coinDetails.market_data.market_cap.usd.toLocaleString()}
                    </p>
                </div>

                <div className="bg-card p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
                    <ul className="list-disc list-inside">
                        {coinDetails.links.homepage
                            .filter(Boolean)
                            .map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        {new URL(link).hostname}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
            <section className="bg-card w-full h-fit rounded shadow p-4">
                <h2 className="text-xl font-semibold mb-4">Chart</h2>
                <div className="w-full h-96">
                    <TradingViewWidget symbol={coinDetails.symbol} />
                </div>
                <div className="bg-card p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">About {coinDetails.name}</h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: coinDetails.description.en }}
                        className="prose dark:prose-dark"
                    />
                </div>
            </section>
        </main>
    )
}