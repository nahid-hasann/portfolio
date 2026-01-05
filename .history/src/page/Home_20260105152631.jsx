import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';
// ১. এই লাইনে আমরা Hero কম্পোনেন্টটি ইমপোর্ট করছি
// import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="bg-black min-h-screen">
           
            <Hero />

            <About></About>
        </div>
    );
};

export default Home;