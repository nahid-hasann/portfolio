import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white relative">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Get in <span className="text-gray-500">Touch</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-200">Let's Talk About Your Project</h3>
                        <p className="text-gray-400">
                            Whether you have a question, want to start a new project, or just want to connect, feel free to send me a message.
                        </p>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl text-white">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="text-lg font-semibold">+880 1XXXXXXXXX</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl text-white">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="text-lg font-semibold">your.email@example.com</p>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl text-green-500">
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">WhatsApp</p>
                                    <a href="https://wa.me/8801XXXXXXXXX" target="_blank" className="text-lg font-semibold hover:text-green-400 transition">
                                        +880 1XXXXXXXXX
                                    </a>
                                </div>
                            </div>

                            {/* Location (Optional) */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl text-white">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-lg font-semibold">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea rows="4" placeholder="Write your message here..." className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition"></textarea>
                            </div>
                            <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;