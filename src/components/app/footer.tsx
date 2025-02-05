import { siteConfig } from "~/config/site"

export function Footer() {
    return (
        <footer className="w-full bg-card border-t border-t-border">
            <div className="max-w-7xl mx-auto flex items-center justify-start space-x-4 py-3 px-3">
                <span className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by {siteConfig.author}. The source code is available on{" "}
                    <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
                        GitHub
                    </a>
                    .
                </span>
            </div>
        </footer>
    )
}