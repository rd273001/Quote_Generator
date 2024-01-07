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
      state.bookmarks = state.bookmarks.filter( ( quote ) => quote._id !== action.payload );
      localStorage.setItem( 'bookmarks', JSON.stringify( state.bookmarks ) );
    },
    // add reducers as needed
  },
} );

export const { bookmarkQuote, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;