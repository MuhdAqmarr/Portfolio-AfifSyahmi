import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

export default function GradientButton({ to, href, children, className = "", type, disabled, ...props }) {
    const baseClasses = `relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-0 rounded-full shadow-xl group ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    // Animation props
    const animationProps = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 10 }
    };

    const content = (
        <>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue bg-[length:200%_200%] animate-[gradient_3s_ease_infinite] shadow-[0_0_20px_rgba(0,198,255,0.5)] group-hover:shadow-[0_0_30px_rgba(0,198,255,0.8)] transition-shadow duration-300"></span>
            <span className="relative flex items-center gap-2">{children}</span>
        </>
    );

    if (to) {
        return (
            <MotionLink to={to} className={`${baseClasses} ${className}`} {...animationProps} {...props}>
                {content}
            </MotionLink>
        );
    }

    if (type) {
        return (
            <motion.button type={type} disabled={disabled} className={`${baseClasses} ${className}`} {...animationProps} {...props}>
                {content}
            </motion.button>
        );
    }

    return (
        <motion.a href={href} className={`${baseClasses} ${className}`} {...animationProps} {...props}>
            {content}
        </motion.a>
    );
}
