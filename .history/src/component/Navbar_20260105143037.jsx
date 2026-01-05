import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">My Portfolio</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* Link ট্যাগ ব্যবহার করলে পেজ রিলোড হবে না */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;