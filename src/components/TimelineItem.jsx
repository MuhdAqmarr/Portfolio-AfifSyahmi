export default function TimelineItem({ year, title, subtitle, description, children, isLast = false }) {
    return (
        <div className="relative flex gap-8 pb-12 group">
            {/* Line connecting items */}
            {!isLast && (
                <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-slate-200 group-hover:bg-gradient-to-b group-hover:from-brand-blue group-hover:to-brand-cyan transition-colors duration-500" />
            )}

            {/* Dot */}
            <div className="relative flex-none">
                <div className="w-6 h-6 rounded-full border-2 border-brand-blue bg-white group-hover:bg-brand-blue transition-colors duration-300 shadow-[0_0_10px_rgba(0,114,255,0.3)] z-10" />
            </div>

            {/* Content */}
            <div className="flex-1 -mt-1 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                    <span className="text-sm font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full">{year}</span>
                </div>

                {subtitle && <h4 className="text-lg font-medium text-slate-700 mb-2">{subtitle}</h4>}

                {description && (
                    <p className="text-slate-600 leading-relaxed mb-3">{description}</p>
                )}

                {children && (
                    <div className="text-slate-600 leading-relaxed">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
