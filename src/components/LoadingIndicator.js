import React from 'react';
import { RiLoader4Line } from 'react-icons/ri';

const LoadingIndicator = () => {
  return (
    <div className='flex justify-center'>
      <RiLoader4Line className='m-4 text-5xl text-[#ffffff88] animate-spin' />
    </div>
  );
};

export default LoadingIndicator;