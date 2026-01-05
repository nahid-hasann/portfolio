import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';


const Home = () => {
    return (
        <div className="bg-black min-h-screen">
           
            <Hero />

            <About></About>
            
        </div>
    );
};

export default Home;