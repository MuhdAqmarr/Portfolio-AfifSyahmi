import PageWrapper from '../components/PageWrapper';
import GradientButton from '../components/GradientButton';
import SEO from '../components/SEO';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_czfd9bj';
const EMAILJS_TEMPLATE_ID = 'template_k6nwtij';
const EMAILJS_PUBLIC_KEY = 'rA91Ol8lAVOa0HrnY';

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    // Validation rules
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                if (value.trim().length > 50) return 'Name must be less than 50 characters';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return '';
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Validate on change if field has been touched
        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const validateForm = () => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message)
        };
        setErrors(newErrors);
        setTouched({ name: true, email: true, message: true });
        return !newErrors.name && !newErrors.email && !newErrors.message;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        if (!validateForm()) {
            return;
        }

        setStatus({ loading: true, success: false, error: null });

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );

            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', message: '' });
            setTouched({ name: false, email: false, message: false });
            setErrors({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                loading: false,
                success: false,
                error: 'Failed to send message. Please try again later.'
            });
        }
    };

    return (
        <PageWrapper className="pb-20">
            <SEO
                title="Contact"
                description="Get in touch with Afif Syahmi for opportunities in Halal Science, Research, and Laboratory operations. Available for hire in Malaysia."
                url="/contact"
            />
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
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-xl text-brand-blue">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Email</p>
                                        <a href="mailto:afifsyahmiuddin@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-brand-blue transition-colors break-all">
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
                        className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-slate-100"
                    >
                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            {/* Success Message */}
                            {status.success && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
                                >
                                    <CheckCircle size={20} />
                                    <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {status.error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                                >
                                    <AlertCircle size={20} />
                                    <span className="font-medium">{status.error}</span>
                                </motion.div>
                            )}

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={status.loading}
                                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.name && touched.name ? 'border-red-400 bg-red-50/50' : 'border-transparent'
                                        }`}
                                    placeholder="Your Name"
                                />
                                {errors.name && touched.name && (
                                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                                        <AlertCircle size={14} />
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={status.loading}
                                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.email && touched.email ? 'border-red-400 bg-red-50/50' : 'border-transparent'
                                        }`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && touched.email && (
                                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                                        <AlertCircle size={14} />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={status.loading}
                                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.message && touched.message ? 'border-red-400 bg-red-50/50' : 'border-transparent'
                                        }`}
                                    placeholder="Your message..."
                                />
                                {errors.message && touched.message && (
                                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                                        <AlertCircle size={14} />
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <GradientButton
                                className="w-full"
                                type="submit"
                                disabled={status.loading}
                            >
                                {status.loading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </GradientButton>
                        </form>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
}
