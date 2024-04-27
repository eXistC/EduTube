import Topbar from '../components/topbar/Topbar';

export default async function HomeLayout({
    children
}: {
    children: React.ReactNode;
}){
    return(
        <Topbar>
            <div className="h-full">
                {children}
            </div>
        </Topbar>
    )
}