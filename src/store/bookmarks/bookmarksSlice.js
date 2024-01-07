import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice( {
  name: 'bookmarks',
  initialState: {
    bookmarks: [],
  },
  reducers: {
    bookmarkQuote ( state, action ) {
      state.bookmarks.push( action.payload );
    },
    removeBookmark ( state, action ) {
      state.bookmarks = state.bookmarks.filter( ( quote ) => quote._id !== action.payload );
    },
  },
} );

export const { bookmarkQuote, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;