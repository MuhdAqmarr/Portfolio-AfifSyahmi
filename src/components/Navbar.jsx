import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-5xl z-50 bg-white/10 backdrop-blur-md border border-slate-200/50 shadow-md rounded-full transition-all duration-300">
            <div className="px-6 sm:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-4 group">
                        <img
                            src="/logo-removebg.png"
                            alt="Logo"
                            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                            Afif Syahmi
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-sm font-medium transition-colors hover:text-brand-blue ${location.pathname === item.path ? 'text-brand-blue' : 'text-slate-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-brand-blue focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl overflow-hidden md:hidden"
                >
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.path
                                    ? 'text-brand-blue bg-blue-50'
                                    : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
