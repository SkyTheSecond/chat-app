import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';


export default function Home() {
    return (
        <>
            <div className="text-neutral-200 w-screen h-screen bg-neutral-950 flex">
                <Sidebar />
                <Main />
            </div>
        </>
    );
}
