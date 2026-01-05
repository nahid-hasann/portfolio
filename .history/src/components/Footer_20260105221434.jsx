import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-8 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                <div className="mb-4 md:mb-0">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} <span className="text-white font-bold">Nahid Hasan</span>. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/nahid-hasann" className="hover:text-white transition text-xl"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mh-nahid-webdev/" className="hover:text-white transition text-xl"><FaLinkedin /></a>
                    <a href="https://www.facebook.com/mh.na.hi.d.554448/" className="hover:text-white transition text-xl"><FaFacebook /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;