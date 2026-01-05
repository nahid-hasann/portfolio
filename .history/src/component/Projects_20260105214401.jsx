import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
// আমাদের তৈরি করা ডাটা ইমপোর্ট করছি
// import { Projects } from '../data/projects';
import moduleName from 'module';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Latest <span className="text-gray-500">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            whileHover={{ y: -10 }} // কার্ড হোভার করলে একটু উপরে উঠবে
                            className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* View Details Button */}
                                <Link
                                    to={`/project/${project.id}`}
                                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition"
                                >
                                    View Details <FaArrowRight className="text-sm" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;