import type { Route } from "./+types/explore";
import { useExplore } from "~/hooks/use-explore";
import { useSearchParams } from "react-router";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "~/components/ui/pagination"
import { TokenCard } from "~/components/app/token-card";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "explore" },
        { name: "description", content: "Explore tokens" },
    ];
}

export default function Explore() {
    const [searchParams] = useSearchParams();
    const pageParam = searchParams.get("page");
    const page = pageParam && !isNaN(parseInt(pageParam, 10))
        ? parseInt(pageParam, 10)
        : 1;
    const { tokens, isLoading, error, currentPage } = useExplore({ currentPage: page });

    return (
        <main className="max-w-[1200px] p-4 mx-auto">
            {isLoading && (
                <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
                    <h1 className="text-center text-3xl">Loading...</h1>
                </div>
            )}

            {error && (
                <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
                    <h1 className="text-center text-3xl text-destructive">{error}</h1>
                    <h2 className="text-center text-muted-foreground">try again in couple seconds</h2>
                </div>
            )}
            {!isLoading && !error && (
                <>
                    {tokens.map(token => (
                        <TokenCard token={token} />
                    ))}

                    <Pagination>
                        <PaginationContent>
                            {currentPage > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious href={`?page=${currentPage - 1}`} />
                                </PaginationItem>
                            )}

                            {currentPage > 3 && (
                                <>
                                    <PaginationItem>
                                        <PaginationLink href={`?page=1`}>
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                </>
                            )}

                            {Array.from({ length: 5 }, (_, index) => {
                                const pageNum = currentPage - 2 + index;
                                if (pageNum < 1) return null;
                                return (
                                    <PaginationItem key={pageNum}>
                                        <PaginationLink
                                            href={`?page=${pageNum}`}
                                            isActive={pageNum === currentPage}
                                        >
                                            {pageNum}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}

                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationNext href={`?page=${currentPage + 1}`} />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </>
            )}
        </main>
    );
}