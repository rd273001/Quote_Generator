import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='container h-dvh p-2 w-full text-white bg-gradient-to-r from-[#5E2AB2] to-[#161E6C]'>
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