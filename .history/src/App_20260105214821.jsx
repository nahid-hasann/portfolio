import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>

      <Navbar />

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;