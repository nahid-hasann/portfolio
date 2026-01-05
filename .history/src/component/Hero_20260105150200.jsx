import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";

const Hero = () => {
    
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center pt-20 overflow-hidden relative">

           
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">

                {/* Left Side: Text Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="text-center md:text-left"
                >
                    <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-2 tracking-widest uppercase">
                        Welcome to my world
                    </motion.p>

                    <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Nahid Hasan
                        </span>
                    </motion.h1>

                    <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
                        MERN Stack Developer
                    </motion.h2>

                    <motion.p variants={fadeUp} className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                        I craft high-performance websites with stunning designs. Expert in React, Node.js, and modern web technologies.
                    </motion.p>

                  
                    <motion.div variants={fadeUp} className="flex gap-6 justify-center md:justify-start mb-8">
                        {[
                            { icon: <FaGithub />, link: "https://github.com" },
                            { icon: <FaLinkedin />, link: "https://linkedin.com" },
                            { icon: <FaFacebook />, link: "https://facebook.com" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                className="text-2xl text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>

                    
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center gap-2"
                        >
                            <FaDownload /> Download Resume
                        </a>
                        <a
                            href="/contact"
                            className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    {/* Image Container with Floating Animation */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }} // এই লাইনটা ছবিকে ভাসাবে
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-80 h-80 md:w-96 md:h-96"
                    >
                        {/* Image Border/Glow */}
                        <div className="absolute inset-0 border-2 border-white/20 rounded-full transform rotate-6 scale-105" />

                        {/* Main Image */}
                        <img
                            src="https://placehold.co/500x500/1a1a1a/ffffff?text=Your+Photo"
                            alt="Nahid Profile"
                            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-black grayscale hover:grayscale-0 transition duration-500"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;