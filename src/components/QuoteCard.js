import React from 'react';
import { BiBookmarkPlus, BiSolidBookmarkPlus } from 'react-icons/bi';

const QuoteCard = ( { content, author, onBookmark, option } ) => {
  return (
    <div className={ `relative w-5/6 sm:w-2/3 md:w-1/2 rounded-2xl bg-red-500 p-5 ${option === 'add' ? 'mx-auto my-20' : 'my-5'} shadow-md shadow-violet-500` }>
      <div className='mx-auto mb-10 w-full md:w-3/4 text-xl'>{ content }</div>
      <p className='text-center'>- { author }</p>
      {
        // styled add bookmark to little 
        option === 'add' && <BiSolidBookmarkPlus onClick={ onBookmark } className='cursor-pointer fill-white absolute bottom-[-0.63rem] right-3 text-2xl sm:text-3xl hover:fill-yellow-400 active:fill-yellow-500' />
      }
    </div>
  );
};

export default QuoteCard;