import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <img
                            src="/logo-removebg.png"
                            alt="Logo"
                            className="h-24 w-auto object-contain"
                        />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Afif Syahmi</h3>
                            <p className="mt-2 text-sm text-slate-500 max-w-xs">
                                Applied Biology graduate passionate about Halal Science & Innovation.
                            </p>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/afif-syahmi-aminuddin-6573142b7/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:afifsyahmiuddin@gmail.com" className="text-slate-400 hover:text-brand-blue transition">
                            <span className="sr-only">Email</span>
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Afif Syahmi. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <span className="flex items-center"><MapPin size={16} className="mr-1" /> Nilai, Malaysia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
