import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>

      <Navbar />

      <div className="w-full">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;