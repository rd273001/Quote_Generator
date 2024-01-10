import React, { useEffect } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import QuoteCard from '../components/QuoteCard';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookmark, setBookmarks } from '../store/bookmarks/bookmarksSlice'

const Bookmarks = () => {

    const dispatch = useDispatch();
    const { bookmarks } = useSelector( ( state ) => state.bookmarks );

    useEffect( () => {
    // retrieving bookmarks from local storage if stored and updating state
    const storedBookmarks = JSON.parse( localStorage.getItem( 'bookmarks' ) ) || [];
    dispatch( setBookmarks( storedBookmarks ) );
  }, [] );

    // handler for removing a quote from bookmarks
    const handleRemoveBookmark = ( quoteId ) => {
        dispatch( removeBookmark( quoteId ) );
    };

    return (
        <>
            <p className='text-lg sm:text-xl underline text-center my-7'>Bookmarked Quotes</p>
            {
                [...bookmarks].length > 0
                    ? bookmarks.map( ( quote ) => (
                        <div key={ quote._id } className='flex items-center justify-center bg-[#00000011] rounded-md mt-3 px-2'>
                            <QuoteCard content={ quote.content } author={ quote.author } />
                            <span onClick={ () => handleRemoveBookmark( quote._id ) } className='flex items-center text-md sm:text-lg ring-2 rounded cursor-pointer ml-2 sm:ml-5 py-0.5 px-2 sm:px-3 shadow-sm shadow-white active:opacity-30 hover:opacity-60'>
                                <FaTrashCan fill='red' className='mr-1.5' />
                                <p>Delete</p>
                            </span>
                        </div>
                    ) )
                    : <div className='flex items-center justify-center bg-[#00000011] rounded-md my-5'>
                        <p className='text-2xl font-medium m-2'>No Bookmarks to show.</p>
                    </div>
                        
            }
        </>
    );
};

export default Bookmarks;