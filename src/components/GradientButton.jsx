import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function GradientButton({ to, href, children, className = "", ...props }) {
    const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-0 rounded-full shadow-xl group";
    const bgClasses = "absolute inset-0 w-full h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue bg-[length:200%_auto] animate-gradient";

    // Custom animation for the gradient background
    // Ideally handled via tailwind class but style prop is easier for specific bg pos

    const content = (
        <>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue bg-[length:200%_200%] animate-[gradient_3s_ease_infinite] shadow-[0_0_20px_rgba(0,198,255,0.5)] group-hover:shadow-[0_0_30px_rgba(0,198,255,0.8)] transition-shadow duration-300"></span>
            <span className="relative flex items-center gap-2">{children}</span>
        </>
    );

    if (to) {
        return (
            <Link to={to} className={`${baseClasses} ${className}`} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <a href={href} className={`${baseClasses} ${className}`} {...props}>
            {content}
        </a>
    );
}
