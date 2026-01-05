import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';
import Skills from '../component/Skills';
import ProjectDetails from './ProjectDetails';


const Home = () => {
    return (
        <div className="bg-black min-h-screen">
           
            <Hero />

            <About></About>
            <Skills></Skills>
            <Project></Project>
        </div>
    );
};

export default Home;