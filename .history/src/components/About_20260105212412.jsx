import React from 'react';
import { motion } from 'framer-motion';
// ১. এখানে FaMotorcycle আইকনটি যুক্ত করেছি
import { FaCode, FaPaintBrush, FaCoffee, FaMotorcycle } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800/20 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">About <span className="text-gray-500">Me</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: My Journey Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-200">My Programming Journey</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I started my coding journey with a curiosity to understand how websites work.
                            Over time, I mastered the <span className="text-white font-bold">MERN Stack (MongoDB, Express, React, Node.js)</span>.
                            I love solving complex problems and turning ideas into smooth, interactive web applications.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Currently, I am focused on building scalable web apps and learning new technologies like Next.js and TypeScript.
                            My goal is to write clean code and deliver excellent user experiences.
                        </p>
                    </motion.div>

                    {/* Right Side: Cards for Interests/Hobbies */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {/* Card 1: Web Development */}
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition duration-300">
                            <FaCode className="text-3xl text-gray-300 mb-4" />
                            <h4 className="text-xl font-bold mb-2">Development</h4>
                            <p className="text-gray-500 text-sm">Building dynamic and fast web applications.</p>
                        </div>

                        {/* Card 2: Design */}
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition duration-300">
                            <FaPaintBrush className="text-3xl text-gray-300 mb-4" />
                            <h4 className="text-xl font-bold mb-2">Design</h4>
                            <p className="text-gray-500 text-sm">Creating clean and modern user interfaces.</p>
                        </div>

                        {/* Card 3: Coffee & Code (তোমার পছন্দের) */}
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition duration-300">
                            <FaCoffee className="text-3xl text-gray-300 mb-4" />
                            <h4 className="text-xl font-bold mb-2">Coffee & Code</h4>
                            <p className="text-gray-500 text-sm">I love coding while enjoying a fresh cup of coffee.</p>
                        </div>

                        {/* Card 4: Motorbike Riding (তোমার পছন্দের) */}
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition duration-300">
                            <FaMotorcycle className="text-3xl text-gray-300 mb-4" />
                            <h4 className="text-xl font-bold mb-2">Riding</h4>
                            <p className="text-gray-500 text-sm">I love riding my motorbike and exploring new roads.</p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;