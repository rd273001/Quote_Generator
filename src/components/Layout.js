import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen p-3 text-white bg-gradient-to-r from-[#5E2AB2] to-[#161E6C]'>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
      
    </div>
  );
};

export default Layout;