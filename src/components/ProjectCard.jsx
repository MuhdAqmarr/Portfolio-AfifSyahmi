import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, category, description, items = [], delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            transition={{ delay: delay, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-full flex flex-col"
        >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan" />

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-xs font-bold tracking-wider uppercase text-brand-blue mb-1 block">{category}</span>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{title}</h3>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="p-2 bg-slate-50 rounded-full text-slate-400 group-hover:text-brand-blue group-hover:bg-blue-50 transition-colors"
                    >
                        <ArrowUpRight size={20} />
                    </motion.div>
                </div>

                <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                    {description}
                </p>

                {items.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                        {items.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
