import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/SEO';

const projects = [
    {
        title: "HALALTIFY DNA Kit Optimization",
        category: "Halal Science",
        description: "Contributed to enhancing a halal DNA education kit bridging laboratory techniques and student learning. Improved workflow, documentation, and interpretation guidelines for educational use.",
        items: ["Lab Protocol Optimization", "Documentation", "Educational Tech"],
        link: "#"
    },
    {
        title: "GST Expression Research Study",
        category: "Academic Research",
        description: "Studied enzyme expression in insects across life stages. Demonstrated stage-specific GST expression patterns and evaluated responses to pesticide exposure, contributing to modern pesticide development insights.",
        items: ["Molecular Biology", "Data Analysis", "Pesticide Resistance"],
        link: "#"
    },
    {
        title: "Mini Farm Science Education",
        category: "Volunteer Project",
        description: "Educated visitors about animal species, biology concepts, and sustainable farm practices at UM Mini Farm. Ensured farm animals were cared for and safe for interaction.",
        items: ["Public Engagement", "Science Comm", "Sustainability"],
        link: "#"
    },
    {
        title: "Autism Awareness Seminar",
        category: "Leadership",
        description: "Directed program operations and protocol under MITA Academic Week. Coordinated logistics and ensured smooth execution of the 'Let’s Understand, Avoid Speculation' seminar.",
        items: ["Event Management", "Leadership", "Social Impact"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <PageWrapper className="pb-20">
            <SEO
                title="Projects"
                description="Explore Afif Syahmi's research projects in Halal Science, Molecular Biology, and community engagement including HALALTIFY DNA Kit and GST Expression Research."
                url="/projects"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-6">
                        Projects & Research
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Highlighting my work in scientific research, halal innovation, and community engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
