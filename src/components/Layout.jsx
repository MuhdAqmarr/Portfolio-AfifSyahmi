import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundAnimation from './BackgroundAnimation';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen bg-transparent font-sans selection:bg-brand-cyan/30 relative">
            <BackgroundAnimation />
            <Navbar />
            <main className={`flex-grow ${!isHome ? 'pt-20' : ''} relative z-10`}>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
}
