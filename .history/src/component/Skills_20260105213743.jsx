import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";

const Skills = () => {
    // স্কিল ডাটা ক্যাটাগরি অনুযায়ী সাজানো
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 80 },
                { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 85 },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: 90 },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 75 },
                { name: "Express.js", icon: <SiExpress className="text-white" />, level: 70 },
                { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 70 },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 60 },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
                { name: "GitHub", icon: <FaGithub className="text-white" />, level: 90 },
                { name: "VS Code", icon: <FaCode className="text-blue-400" />, level: 95 }, 
                { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: 80 },// FaCode import করতে হবে যদি আলাদা আইকন চাও, অথবা ডিফল্ট রাখো
            ]
        }
    ];

   

    return (
        <section id="skills" className="py-20 bg-black text-white relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My <span className="text-gray-500">Skills</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center border-b border-white/10 pb-2">{category.title}</h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2 text-lg">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <span className="font-medium text-gray-300">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-gray-500 to-white rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Tools এর আইকন মিসিং ফিক্স করার জন্য ইমপোর্ট আপডেট:
// উপরে import লাইনে { FaCode } যোগ করে নিও অথবা নিচের ইমপোর্ট লাইনটি কপি করে নাও:
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode } from "react-icons/fa";

export default Skills;