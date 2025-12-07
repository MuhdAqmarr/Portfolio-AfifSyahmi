import { motion } from 'framer-motion';

export default function FloatingCard({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            className={`relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 ${className}`}
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            {children}
        </motion.div>
    );
}
