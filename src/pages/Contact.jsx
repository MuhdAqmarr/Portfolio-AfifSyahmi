import PageWrapper from '../components/PageWrapper';
import GradientButton from '../components/GradientButton';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <PageWrapper className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Open to opportunities in Halal Science, Research, and Laboratory operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-xl text-brand-blue">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Email</p>
                                        <a href="mailto:afifsyahmiuddin@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-brand-blue transition-colors">
                                            afifsyahmiuddin@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-50 rounded-xl text-brand-cyan">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Phone</p>
                                        <a href="tel:+60182998306" className="text-lg font-semibold text-slate-900 hover:text-brand-blue transition-colors">
                                            +60 18-299 8306
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Location</p>
                                        <p className="text-lg font-semibold text-slate-900">
                                            Nilai, Negeri Sembilan, Malaysia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <GradientButton className="w-full" type="submit">
                                Send Message <Send size={18} />
                            </GradientButton>
                        </form>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
}
