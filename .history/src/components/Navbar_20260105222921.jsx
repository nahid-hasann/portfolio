import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
// ১. HashLink ইমপোর্ট করা হলো
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // ২. পাতের আগে /# যুক্ত করা হলো যাতে আইডিতে স্ক্রল করে
    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'About', path: '/#about' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo Area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* লোগোতে ক্লিক করলে টপে যাবে */}
                    <HashLink smooth to="/#home" className="text-2xl font-bold tracking-tighter text-white">
                        NAHID<span className="text-gray-400">.DEV</span>
                    </HashLink>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            {/* ৩. Link এর বদলে HashLink এবং smooth প্রপস ব্যবহার করা হলো */}
                            <HashLink
                                smooth
                                to={link.path}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group"
                            >
                                {link.name}
                                {/* Hover Underline Animation */}
                                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </HashLink>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none text-2xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-6 space-y-4">
                            {navLinks.map((link) => (
                                <HashLink
                                    key={link.name}
                                    smooth
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-400 hover:text-white"
                                >
                                    {link.name}
                                </HashLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;