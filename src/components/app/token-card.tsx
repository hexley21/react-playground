import { type Token } from "~/domain/token"
import { Card } from "~/components/ui/card"
import { Link } from "react-router"


export function TokenCard({ token }: { token: Token }) {
    return (
        <Link to={`/coins/${token.id}`}>
            <Card className="my-2 border-border">
                <div className="py-2 px-4 flex items-center space-x-4">
                    <img
                        src={token.image ?? ""}
                        alt={token.name ?? "No image"}
                        className="h-12 w-12 rounded"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold">{token.name ?? "Unknown"}</span>
                        <span className="text-xs text-gray-600">{token.symbol ?? "N/A"}</span>
                    </div>
                    <div className="ml-auto flex flex-row space-x-4 items-end">
                        <span className="font-bold">
                            {token.current_price != null ? `$${token.current_price}` : "N/A"}
                        </span>
                        <span
                            className={
                                (token.price_change_percentage_24h ?? 0) >= 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            }
                        >
                            {token.price_change_percentage_24h != null
                                ? `${token.price_change_percentage_24h.toFixed(2)}%`
                                : "N/A"}
                        </span>
                    </div>
                </div>
            </Card>
        </Link>
    )
}