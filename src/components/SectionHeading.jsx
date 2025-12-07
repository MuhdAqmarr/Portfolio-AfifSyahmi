import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const mxClass = align === 'left' ? 'mr-auto' : align === 'right' ? 'ml-auto' : 'mx-auto';

    return (
        <div className={`mb-12 ${alignClass}`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-4"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`text-slate-600 max-w-2xl text-lg ${mxClass}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
