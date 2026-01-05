import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // ১. overflow-x-hidden এবং min-h-screen যোগ করা হলো
    <div className="bg-black text-white min-h-screen flex flex-col overflow-x-hidden">

      <Navbar />

      <div className="w-full flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;