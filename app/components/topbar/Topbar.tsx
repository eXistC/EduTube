import HomeTopbar from "./HomeTopbar";

async function Topbar({ children }: {
    children: React.ReactNode;
}) {
    return(
        <div className="h-full">
            <HomeTopbar />
            <main className="h-full"> {/*Remove it in future*/}
                {children}
            </main>
        </div>
    )
}

export default Topbar;