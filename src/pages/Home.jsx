import { motion } from 'framer-motion';
import GradientButton from '../components/GradientButton';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import KeyStat from '../components/KeyStat';
import SEO from '../components/SEO';
import { ArrowRight, FlaskConical, Award, BookOpen, GraduationCap, Send, Dna } from 'lucide-react';

const featuredProjects = [
    {
        title: "HALALTIFY DNA Kit",
        category: "Halal Innovation",
        description: "Optimized a DNA education kit bridging lab techniques with classroom learning. Enhanced workflow and documentation for efficient halal science education.",
        items: ["Lab Optimization", "EdTech", "Documentation"],
        link: "/projects"
    },
    {
        title: "GST Expression Study",
        category: "Scientific Research",
        description: "Analyzed stage-specific GST expression patterns in insects to evaluate pesticide resistance pathways, contributing to safer pest management strategies.",
        items: ["Molecular Biology", "Data Analysis", "Research"],
        link: "/projects"
    }
];

export default function Home() {
    return (
        <PageWrapper>
            <SEO
                title="Home"
                description="Portfolio of Afif Syahmi - First Class Honours graduate in Applied Biology with expertise in Halal Science, Molecular Biology, and Research Innovation. Available for hire."
                url="/"
            />
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-[10%] w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
                </div>

                <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left space-y-8 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold tracking-wider uppercase mb-6">
                                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                                Available for Hire
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                                Hi, I'm <br />
                                <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                                    Afif Syahmi.
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Applied Biology × Halal Science × Research &amp; Innovation
                            </p>
                            <p className="mt-6 text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg">
                                First Class Honours graduate passionate about integrating biological sciences with ethical industry solutions to create impactful technologies.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <GradientButton to="/projects">
                                View My Work <ArrowRight size={18} />
                            </GradientButton>
                            <GradientButton to="/contact">
                                Contact Me
                            </GradientButton>
                        </motion.div>
                    </div>

                    {/* Floating Visuals */}
                    <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center">
                        {/* Central Image */}
                        <motion.div
                            className="w-80 h-96 rounded-3xl bg-gradient-to-tr from-slate-100 to-white shadow-2xl relative z-10 flex items-center justify-center border-4 border-white overflow-hidden"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img
                                src="/hero-image.png"
                                alt="Afif Syahmi"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent mix-blend-overlay" />
                        </motion.div>

                        {/* Orbiting Elements */}
                        <motion.div
                            className="absolute top-1/4 right-0 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-float"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
                            transition={{ delay: 0.5, duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="p-2 bg-blue-50 rounded-lg text-brand-blue">
                                <FlaskConical size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase">Expertise</p>
                                <p className="font-bold text-slate-900">Molecular Biology</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-1/4 left-0 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
                            transition={{ delay: 0.8, duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="p-2 bg-cyan-50 rounded-lg text-brand-cyan">
                                <Dna size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase">Focus</p>
                                <p className="font-bold text-slate-900">Halal Forensics</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <KeyStat icon={GraduationCap} value="3.77" label="CGPA (First Class)" delay={0.1} />
                        <KeyStat icon={Award} value="7x" label="Dean's List Awards" delay={0.2} />
                        <KeyStat icon={FlaskConical} value="2+" label="Research Projects" delay={0.3} />
                        <KeyStat icon={BookOpen} value="10+" label="Technical Skills" delay={0.4} />
                    </div>
                </div>
            </section>

            {/* --- SELECTED WORKS --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Selected Work"
                        subtitle="Highlights from my academic research and industry internship, focusing on Halal Science and Molecular Biology."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} delay={index * 0.2} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <GradientButton to="/projects">
                            View All Projects
                        </GradientButton>
                    </div>
                </div>
            </section>

            {/* --- EXPERTISE GRID --- */}
            <section className="py-24 bg-white/60 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Core Competencies"
                        subtitle="My technical toolkit combines laboratory precision with digital proficiency."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            "Molecular Biology", "Halal Analysis", "PCR & qPCR", "Gel Electrophoresis",
                            "Scientific Writing", "Data Analysis", "Microbiology", "Project Management"
                        ].map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-4 rounded-xl bg-white/80 border border-slate-100 flex items-center justify-center text-center font-medium text-slate-700 hover:bg-white hover:text-brand-blue hover:border-blue-100 hover:shadow-lg transition-all cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-cyan" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Collaborate?</h2>
                            <p className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                                I am currently open to opportunities in laboratory operations, halal science, and research roles. Let's discuss how I can contribute to your team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <GradientButton to="/contact" className="!bg-none !bg-white/20 !backdrop-blur-sm border !border-white/30 !text-white hover:!bg-white/30 !shadow-2xl">
                                    Get In Touch <Send size={18} />
                                </GradientButton>
                                <GradientButton href="mailto:afifsyahmiuddin@gmail.com" className="!bg-none !bg-transparent !border-white !border-2 !text-white hover:!bg-white/10">
                                    Email Me Directly
                                </GradientButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
