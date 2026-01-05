import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* এই Navbar সব পেজে ফিক্সড থাকবে */}
      <Navbar />

      {/* এই Outlet এর জায়গায় পেজগুলো রেন্ডার হবে */}
      <div className="min-h-screen container mx-auto px-4 py-6">
        <Outlet />
      </div>
    </div>
  );
}

export default App;