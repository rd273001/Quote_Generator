import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiBookmarks } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className='flex justify-between text-white mx-3 sm:mx-10 mb-4'>
      {/* used NavLink for styling active link (Home or Bookmarks) */}
      <NavLink to='/' className={ ( { isActive } ) => `${ isActive ? 'font-bold text-xl sm:text-2xl' : 'text-lg sm:text-xl' } hover:text-red-500` }>Home</NavLink>
      <NavLink to='/bookmarks' className={ ( { isActive } ) => `${ isActive ? 'font-bold text-xl sm:text-2xl' : 'text-lg sm:text-xl' } flex items-center hover:text-red-400` }>
        <p>Bookmarks</p>
        <BiBookmarks className='ml-1.5' />
      </NavLink>
    </nav>
  );
};

export default Navbar;