import React, { useEffect } from 'react';
import QuoteCard from '../components/QuoteCard';
import TagDropdown from '../components/TagDropdown';
import LoadingIndicator from '../components/LoadingIndicator';

const Home = () => {

  useEffect( () => {
    // Load random quote and tags on component mount
  }, [] );

  // handler for generating a new random quote
  const handleGenerateQuote = () => {
    
  };

  // handler for generating a random quote based on selected tag
  const handleTagSelection = ( tag ) => {
    
  };

  // handler for adding quote to bookmarks
  const handleBookmarkQuote = () => {
    
  };

  return (
    <>
      <QuoteCard content={ 'Quote content is fetched from endpoint.' } author={ 'Author author' } onBookmark={ handleBookmarkQuote } option='add' />

      <TagDropdown tags={ ['Peace', 'Love'] } onSelectTag={ handleTagSelection } />

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