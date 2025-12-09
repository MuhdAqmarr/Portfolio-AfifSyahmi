import PageWrapper from '../components/PageWrapper';
import FloatingCard from '../components/FloatingCard';

export default function About() {
    return (
        <PageWrapper className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-6">
                        About Me
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        I am a graduate in Applied Biology with Islamic Studies (Biology) from
                        <img
                            src="/UM-Logo.png"
                            alt="UM Logo"
                            className="h-6 w-auto inline-block mx-2 align-middle"
                        />
                        <b>Universiti of Malaya</b>, aiming to bridge the gap between scientific innovation and ethical principles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FloatingCard delay={0.1}>
                        <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                            <span className="text-2xl">🎓</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Academic Background</h3>
                        <p className="text-slate-600 leading-relaxed">
                            First Class Honours from Universiti Malaya with a CGPA of 3.77. My studies integrated core biological sciences with Islamic jurisprudence, focusing on Halal Industry Management and Consumerism.
                        </p>
                    </FloatingCard>

                    <FloatingCard delay={0.2}>
                        <div className="h-12 w-12 bg-cyan-50 rounded-xl flex items-center justify-center text-brand-cyan mb-6">
                            <span className="text-2xl">🔬</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Scientific Expertise</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Skilled in molecular techniques including PCR, Gel Electrophoresis, and Spectrophotometry. Experience in Halal authentication and food analysis through hands-on laboratory work at IFFAH.
                        </p>
                    </FloatingCard>

                    <FloatingCard delay={0.3}>
                        <div className="h-12 w-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 mb-6">
                            <span className="text-2xl">🌱</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Passions</h3>
                        <p className="text-slate-600 leading-relaxed">
                            I enjoy working at the intersection of science and Islamic ethics. My goal is to contribute to halal safety, biotechnology, and sustainable scientific solutions for the community.
                        </p>
                    </FloatingCard>
                </div>

                {/* Fun Facts / Additional Interest Section */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Beyond The Lab</h2>
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-wrap gap-4 justify-center">
                        {['Track & Field Athlete', 'Public Science Engagement', 'Hand-drawn Biological Diagrams', 'Volunteerism', 'Leadership'].map((item, index) => (
                            <span key={index} className="px-6 py-3 bg-slate-50 text-slate-700 rounded-full text-sm font-medium hover:bg-brand-blue hover:text-white transition-colors duration-300 cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
