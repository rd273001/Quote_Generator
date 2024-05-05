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

  // random quote and tags is fetched when component mounts
  useEffect( () => {
    dispatch( getRandomQuote() );
    dispatch( getTags() );
    // retrieving bookmarks from local storage if stored and updating state
    const storedBookmarks = JSON.parse( localStorage.getItem( 'bookmarks' ) ) || [];
    dispatch( setBookmarks( storedBookmarks ) );
  }, [] );

  useEffect( () => {
    // effect for checking already Bookmarked or not with updated values of randomQuote or taggedQuote
    checkIsBookmarked( tagName === '' ? randomQuote : taggedQuote );
  }, [randomQuote?._id, taggedQuote?._id] );

  // handler for generating a new random quote
  const handleGenerateQuote = () => {
    setTagName( '' );
    dispatch( getRandomQuote() );
    setIsBookmarked( false );   // reset isBookmarked to false when new quote
  };

  // handler for generating a random quote based on selected tag
  const handleTagSelection = async ( tagName ) => {
    setTagName( tagName );
    dispatch( getTaggedQuote( tagName ) );
    setIsBookmarked( false );   // reset isBookmarked to false when new tagged quote is generated if not already bookmarked
  };

  const checkIsBookmarked = ( quote ) => {
    // console.log( 'Quote  =>  ' + JSON.stringify( quote ) );
    const isAlreadyBookmarked = [...bookmarks].some( ( bookmark ) => bookmark._id === quote._id );
    isAlreadyBookmarked ? setIsBookmarked( true ) : setIsBookmarked( false );
    // console.log( 'Already Bookmarked 2 => ' + isAlreadyBookmarked );
    return isAlreadyBookmarked;
  };

  // handler for adding quote to bookmarks
  const handleBookmarkQuote = ( quote ) => {
    setIsBookmarked( true );
    if ( checkIsBookmarked( quote ) ) {
      // for showing icon with yellow filled color if quote is already saved to bookmarks
      alert( 'This quote is already in your bookmarks!' );
    } else {
      setIsBookmarked( true );
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
        className='bg-green-600 rounded-full shadow-md shadow-white cursor-pointer px-10 py-1.5 text-center hover:opacity-80 active:opacity-50 w-max mx-auto mt-6 mb-4'
      >
        Next Quote
      </div>
    </>
  );
};

export default Home;