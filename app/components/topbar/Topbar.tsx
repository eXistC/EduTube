async function Topbar({ children }: {
    children: React.ReactNode;
}) {
    return(
        <div className="h-full">
            <main className="lg:pt-10 h-full"> {/*Remove it in future*/}
                {children}
            </main>
        </div>
    )
}

export default Topbar;