import { motion } from 'framer-motion';

export default function KeyStat({ value, label, icon: Icon, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
        >
            <div className="p-3 bg-blue-50 text-brand-blue rounded-xl">
                {Icon && <Icon size={24} />}
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{label}</p>
            </div>
        </motion.div>
    );
}
