import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
// import ProjectDetails from './ProjectDetails';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


const Home = () => {
    return (
        <div className="bg-black min-h-screen">

            <Hero />
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;