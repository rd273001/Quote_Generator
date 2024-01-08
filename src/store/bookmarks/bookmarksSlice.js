import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice( {
  name: 'bookmarks',
  initialState: {
    bookmarks: [],
  },
  reducers: {
    bookmarkQuote ( state, action ) {
      state.bookmarks.push( action.payload );
      localStorage.setItem( 'bookmarks', JSON.stringify( state.bookmarks ) );
    },
    removeBookmark ( state, action ) {
      // removing the bookmark through iterating through it and checking with _id & updating local storage to reflect deletion
      state.bookmarks = state.bookmarks.filter( ( quote ) => quote._id !== action.payload );
      localStorage.setItem( 'bookmarks', JSON.stringify( state.bookmarks ) );
    },
    setBookmarks ( state, action ) {
      state.bookmarks = action.payload;
    },
    // add reducers as needed
  },
} );

export const { bookmarkQuote, removeBookmark, setBookmarks } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;