import React, { useEffect, useState } from 'react';
import QuoteCard from '../components/QuoteCard';
import TagDropdown from '../components/TagDropdown';
import LoadingIndicator from '../components/LoadingIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomQuote, getTaggedQuote, getTags } from '../store/quotes/quotesSlice';
import { bookmarkQuote, setBookmarks } from '../store/bookmarks/bookmarksSlice';

const Home = () => {
  const dispatch = useDispatch();
  // destructured props from quotes state
  const { randomQuote, tags, loadingQuote, loadingTags, taggedQuote } = useSelector( ( state ) => state.quotes );
  const [tagName, setTagName] = useState( '' );
  const { bookmarks } = useSelector( ( state ) => state.bookmarks );

  useEffect( () => {
    dispatch( getRandomQuote() );
    dispatch( getTags() );
    // retrieving bookmarks from local storage if stored and updating state
    const storedBookmarks = JSON.parse( localStorage.getItem( 'bookmarks' ) ) || [];
    dispatch( setBookmarks( storedBookmarks ) );
  }, [] );

  // handler for generating a new random quote
  const handleGenerateQuote = () => {
    setTagName( '' );
    dispatch( getRandomQuote() );
  };

  // handler for generating a random quote based on selected tag
  const handleTagSelection = ( tagName ) => {
    setTagName( tagName );
    dispatch( getTaggedQuote( tagName ) );
  };

  // handler for adding quote to bookmarks
  const handleBookmarkQuote = ( quote ) => {
    const isAlreadyBookmarked = bookmarks.some( ( bookmark ) => bookmark._id === quote._id );
    if ( isAlreadyBookmarked ) {
      alert( 'This quote is already in your bookmarks!' );
    } else {
      dispatch( bookmarkQuote( quote ) );
      alert( 'Quote is Bookmarked.' );
    }
  };

  return (
    <>
      {
        loadingQuote ? <LoadingIndicator /> : (
          <QuoteCard
            content={ tagName === '' ? randomQuote?.content : taggedQuote?.content }
            author={ tagName === '' ? randomQuote?.author : taggedQuote?.author }
            onBookmark={ () => handleBookmarkQuote( tagName === '' ? randomQuote : taggedQuote ) }
            option='add'
          />
        )
      }

      {
        loadingTags ? <LoadingIndicator /> : (
          <TagDropdown tags={ tags } onSelectTag={ handleTagSelection } />
        )
      }

      <div
        onClick={ handleGenerateQuote }
        className='bg-green-600 rounded-full shadow-md shadow-white cursor-pointer px-10 py-1.5 text-center hover:opacity-80 active:opacity-50 w-max mx-auto mt-10'
      >
        Next Quote
      </div>
    </>
  );
};

export default Home;