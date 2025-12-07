import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-brand-cyan/30">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
}
