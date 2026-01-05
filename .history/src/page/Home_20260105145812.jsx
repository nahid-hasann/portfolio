import React from 'react';
// ১. এই লাইনে আমরা Hero কম্পোনেন্টটি ইমপোর্ট করছি
// import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="bg-black min-h-screen">
            {/* ২. এখানে Hero কম্পোনেন্টটি কল করছি */}
            <Hero />

            {/* পরে আমরা এখানে বাকি সেকশন বসাবো (Skills, Projects etc.) */}
        </div>
    );
};

export default Home;