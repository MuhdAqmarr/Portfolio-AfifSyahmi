import PageWrapper from '../components/PageWrapper';
import TimelineItem from '../components/TimelineItem';
import { Download } from 'lucide-react';
import GradientButton from '../components/GradientButton';
import SEO from '../components/SEO';

export default function Resume() {
    return (
        <PageWrapper className="pb-20">
            <SEO
                title="Resume"
                description="View Afif Syahmi's professional resume - Education at Universiti Malaya, experience at IFFAH USIM, certifications in Halal Executive and HAFFOT, and technical laboratory skills."
                url="/resume"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-2">
                            My Resume
                        </h1>
                        <p className="text-slate-500">A detailed look at my professional and academic journey.</p>
                    </div>
                    <GradientButton href="/resume.pdf" target="_blank">
                        <Download size={18} /> Download PDF
                    </GradientButton>
                </div>

                {/* Education */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <span className="p-2 bg-blue-50 rounded-lg text-brand-blue">🎓</span> Education
                    </h2>
                    <div className="bg-grey/10 backdrop-blur-sm rounded-2xl p-8 border border-grey/50 shadow-md">
                        <div className="border-slate-200 ml-3">
                            <TimelineItem
                                year="2021 - 2025"
                                title="Bachelor of Islamic Studies and Applied Science (Biology)"
                                subtitle="Universiti Malaya"
                                description="CGPA: 3.77 | First Class Honours"
                            >
                                <div className="mt-2 space-y-2 text-sm">
                                    <p>• Dean’s List: Sem 1, 2, 4, 5, 6, 7</p>
                                    <p>• Key Modules: Cell & Tissue Culture, Applied Microbiology, Animal Biotechnology, Biochemistry, Halal Industry Management</p>
                                </div>
                            </TimelineItem>

                            <TimelineItem
                                year="2020 - 2021"
                                title="Foundation of Islamic Studies and Science"
                                subtitle="Universiti Malaya"
                                description="CGPA: 3.81 | Dean’s List every semester"
                                isLast
                            />
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <span className="p-2 bg-cyan-50 rounded-lg text-brand-cyan">💼</span> Experience
                    </h2>
                    <div className="bg-grey/10 backdrop-blur-sm rounded-2xl p-8 border border-grey/50 shadow-md">
                        <div className="border-slate-200 ml-3">
                            <TimelineItem
                                year="July 2025 - Oct 2025"
                                title="Intern"
                                subtitle="Institute of Fatwa and Halal (IFFAH), USIM"
                                description="Conducted molecular biology analyses including PCR, proximate analysis, and microbiology tests."
                                isLast
                            >
                                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                                    <li>Assisted in major training programmes including Professional Halal Executive Training.</li>
                                    <li>Contributed to the optimization of the HALALTIFY DNA Kit.</li>
                                </ul>
                            </TimelineItem>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <span className="p-2 bg-indigo-50 rounded-lg text-indigo-500">🛠</span> Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-grey/20 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-grey/50">
                            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Laboratory Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Aseptic Techniques (Expert)', 'Cell Culture', 'Gram Staining', 'Conventional PCR', 'qPCR', 'Gel Electrophoresis', 'Spectrophotometer', 'Food Analysis'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/40 text-slate-700 text-sm rounded-lg border border-white/40 hover:bg-white/60 transition-colors">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-grey/20 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-grey/50">
                            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Technical & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Canva (Expert)', 'Scientific Writing', 'Analytical Research', 'Microsoft Office', 'SPSS'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/40 text-slate-700 text-sm rounded-lg border border-white/40 hover:bg-white/60 transition-colors">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <span className="p-2 bg-emerald-50 rounded-lg text-emerald-500">📜</span> Certifications
                    </h2>
                    <div className="bg-grey/10 backdrop-blur-sm rounded-2xl p-8 border border-grey/50 shadow-md">
                        <div className="border-slate-200 ml-3">
                            <TimelineItem
                                year="2025"
                                title="Halal Food Forensics (HAFFOT)"
                                subtitle="USIM"
                                description="Training on DNA extraction, quality verification, detection of porcine DNA via PCR."
                            />
                            <TimelineItem
                                year="2024"
                                title="Halal Executive Certification"
                                subtitle="UMHRC"
                                description="Halal manual & documentation, Quality Assurance, Internal Halal Committee administration."
                                isLast
                            />
                        </div>
                    </div>
                </div>

            </div>
        </PageWrapper>
    );
}
