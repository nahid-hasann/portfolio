import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';
import Skills from '../component/Skills';


const Home = () => {
    return (
        <div className="bg-black min-h-screen">
           
            <Hero />

            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;