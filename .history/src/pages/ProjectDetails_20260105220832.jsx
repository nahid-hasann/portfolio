import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
    const { id } = useParams(); // URL থেকে ID নেওয়া হচ্ছে
    const project = projects.find((p) => p.id === parseInt(id));

    // পেজ লোড হলে একদম উপরে নিয়ে যাবে
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="text-white text-center py-20">Project not found!</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white py-20 px-6">
            <div className="container mx-auto max-w-4xl">

                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition">
                    <FaArrowLeft /> Back to Home
                </Link>

                {/* Project Title & Image */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-xl shadow-2xl border border-white/10 mb-8"
                    />
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Left Column: Description & Links */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-200">Description</h3>
                            <p className="text-gray-400 leading-relaxed">{project.description}</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-200">Challenges Faced</h3>
                            <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
                        </div>

                        {/* <div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-200">Future Plans</h3>
                            <p className="text-gray-400 leading-relaxed">{project.futurePlans}</p>
                        </div> */}
                    </div>

                    {/* Right Column: Tech Stack & Buttons */}
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 h-fit">
                        <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Technology Used</h3>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-white/10 text-sm px-3 py-1 rounded-full text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                className="btn bg-white text-black hover:bg-gray-200 border-none w-full flex items-center justify-center gap-2"
                            >
                                <FaExternalLinkAlt /> Live Preview
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                className="btn btn-outline text-white hover:bg-white/10 w-full flex items-center justify-center gap-2"
                            >
                                <FaGithub /> View Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;