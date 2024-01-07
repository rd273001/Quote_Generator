import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import QuoteCard from '../components/QuoteCard';

const Bookmarks = () => {
    
    const handleRemoveBookmark = ( quoteId ) => {
        // Remove a quote from bookmarks
    };

    return (
        <>
            <p className='text-xl underline text-white text-center mx-5 px-5 my-5'>Your Bookmarks</p>
            {
                <div className='flex items-center justify-evenly bg-[#00000011] rounded-md mb-5'>
                    <QuoteCard content={ 'Quote content is fetched from endpoint.' } author={ 'Author author' } />
                    <span onClick={ () => handleRemoveBookmark( 1 ) } className='flex items-center text-lg ring-2 rounded cursor-pointer mx-5 py-0.5 px-3 shadow-sm shadow-white active:opacity-30 hover:opacity-60'>
                        <FaTrashCan fill='red' className='mr-1.5' />
                        <p>Delete</p>
                    </span>
                </div>
            }
        </>
    );
};

export default Bookmarks;