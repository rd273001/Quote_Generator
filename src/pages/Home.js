import React, { useEffect, useState } from 'react';
import QuoteCard from '../components/QuoteCard';
import TagDropdown from '../components/TagDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomQuote, getTaggedQuote, getTags } from '../store/quotes/quotesSlice';
import { bookmarkQuote, setBookmarks } from '../store/bookmarks/bookmarksSlice';

const Home = () => {
  const dispatch = useDispatch();
  // destructured props from quotes state
  const { randomQuote, tags, loadingQuote, loadingTags, taggedQuote, loadingTaggedQuote } = useSelector( ( state ) => state.quotes );
  const [tagName, setTagName] = useState( '' );
  const [isBookmarked, setIsBookmarked] = useState( false );
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
    setIsBookmarked( false ); // reset isBookmarked to false when new quote is generated
    dispatch( getRandomQuote() );
  };
  console.log( `Tag Name => ${ tagName }` );

  // handler for generating a random quote based on selected tag
  const handleTagSelection = ( tagName ) => {
    setTagName( tagName );
    dispatch( getTaggedQuote( tagName ) );
  };

  // handler for adding quote to bookmarks
  const handleBookmarkQuote = ( quote ) => {
    const isAlreadyBookmarked = bookmarks.some( ( bookmark ) => bookmark._id === quote._id );
    if ( isAlreadyBookmarked ) {
      // for showing icon with yellow filled color if quote is already saved to bookmarks
      setIsBookmarked( true );
      alert( 'This quote is already in your bookmarks!' );
    } else {
      dispatch( bookmarkQuote( quote ) );
      alert( 'Quote is Bookmarked.' );
    }
  };

  return (
    <>
      <QuoteCard
        content={ tagName === '' ? randomQuote?.content : taggedQuote?.content }
        author={ tagName === '' ? randomQuote?.author : taggedQuote?.author }
        onBookmark={ () => handleBookmarkQuote( tagName === '' ? randomQuote : taggedQuote ) }
        loading={ loadingQuote || loadingTaggedQuote }
        isBookmarked={ isBookmarked }
        option='add'
      />

      <TagDropdown tags={ tags } onSelectTag={ handleTagSelection } loading={ loadingTags } tagName={ tagName } />

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