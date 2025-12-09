import { motion } from 'framer-motion';
import GradientButton from '../components/GradientButton';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { Home, FlaskConical } from 'lucide-react';

export default function NotFound() {
    return (
        <PageWrapper className="flex items-center justify-center min-h-[70vh]">
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Return to Afif Syahmi's portfolio."
            />
            <div className="text-center px-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block mb-10"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10 w-40 h-40 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl mx-auto"
                    >
                        <FlaskConical size={80} className="text-brand-cyan" />
                    </motion.div>

                    {/* Floating bubbles */}
                    <motion.div
                        animate={{ y: [0, -40], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute top-0 right-0 w-6 h-6 bg-brand-blue/40 rounded-full"
                    />
                    <motion.div
                        animate={{ y: [0, -30], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                        className="absolute top-10 -left-4 w-4 h-4 bg-brand-cyan/40 rounded-full"
                    />

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/10 blur-xl rounded-[100%]" />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan mb-4 font-mono">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                        Experimental Error!
                    </h2>
                    <p className="text-slate-600 mb-10 max-w-md mx-auto">
                        Oops! It seems this atomic particle has wandered off the grid. The page you're looking for doesn't exist in this dimension.
                    </p>

                    <GradientButton to="/">
                        <Home size={18} /> Return to Lab
                    </GradientButton>
                </motion.div>
            </div>
        </PageWrapper>
    );
}
