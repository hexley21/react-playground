export function MainLayout({ children }: { children: React.ReactNode }) {
    return <main className="max-w-[1200px] pt-16 p-4 container mx-auto">
        {children}
    </main>
}