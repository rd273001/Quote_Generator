import React from 'react';
import { BiSolidBookmarkPlus } from 'react-icons/bi';
import LoadingIndicator from './LoadingIndicator';

const QuoteCard = React.memo( ( { content, author, onBookmark, option, loading, isBookmarked } ) => {
  // console.log( 'Already Bookmarked => ' + isBookmarked );
  return (
    <div className={ `relative w-full sm:w-3/4 md:w-2/3 rounded-2xl bg-red-500 p-5 mx-auto ${ option === 'add' ? 'sm:mt-[8%] mt-[17%] mb-[15%] sm:mb-[6%]' : 'my-5 mx-2' } shadow-md shadow-violet-500` }>
      {
        // showing loading indicator inside Card
        loading ? <LoadingIndicator /> : (
          <>
            <div className='mx-auto mb-10 w-full md:w-3/4 text-md sm:text-xl'>{ content }</div>
            <p className='text-center text-sm sm:text-lg font-light'>- { author }</p>
          </>
        ) }
      {
        // styled add bookmark to be at border of card having half out of card to look eye catching
        option === 'add' && <BiSolidBookmarkPlus
          onClick={ onBookmark }
          className={ `cursor-pointer absolute bottom-[-0.63rem] right-3 text-2xl sm:text-3xl ${ isBookmarked ? 'fill-yellow-500' : 'fill-white hover:fill-yellow-400' } active:fill-yellow-500` }
        />
      }
    </div>
  );
} );

export default QuoteCard;