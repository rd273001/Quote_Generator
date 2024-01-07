import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './quotes/quotesSlice';
import bookmarksReducer from './bookmarks/bookmarksSlice';

export const store = configureStore( {
   reducer: {
      quotes: quotesReducer,
      bookmarks: bookmarksReducer,
      // Add other reducers as required
   },
} );

export default store;