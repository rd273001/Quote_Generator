import React from 'react';
import { BiBookmarkPlus } from 'react-icons/bi';

const QuoteCard = ( { content, author, onBookmark, option } ) => {
  return (
    <div className={ `container relative w-1/2 rounded-2xl bg-red-500 p-5 ${option === 'add' ? 'mx-auto my-20' : 'my-5'} shadow-md shadow-violet-500` }>
      <p className='mb-10 w-4/5 text-xl'>{ content }</p>
      <p className='text-center'>- { author }</p>
      {
        option === 'add' && <BiBookmarkPlus onClick={ onBookmark } className='absolute bottom-5 right-5 ml-2 cursor-pointer text-white text-xl hover:text-blue-700 active:bg-[#ffffff66]' />
      }
    </div>
  );
};

export default QuoteCard;