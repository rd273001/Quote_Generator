import { createSlice } from '@reduxjs/toolkit';

const quotesSlice = createSlice( {
  name: 'quotes',
  initialState: {
    randomQuote: null,
    tags: [],
    taggedQuote: null,
    loadingQuote: false,
    loadingTags: false,
    loadingTaggedQuote: false,
  },
  reducers: {
    loadRandomQuoteStart ( state ) {
      state.loadingQuote = true;
    },
    loadRandomQuoteSuccess ( state, action ) {
      state.randomQuote = action.payload;
      state.loadingQuote = false;
    },
    loadTagsStart ( state ) {
      state.loadingTags = true;
    },
    loadTagsSuccess ( state, action ) {
      state.tags = action.payload;
      state.loadingTags = false;
    },
    loadTaggedQuoteStart ( state ) {
      state.loadingTaggedQuote = true;
    },
    loadTaggedQuoteSuccess ( state, action ) {
      state.taggedQuote = action.payload;
      state.loadingTaggedQuote = false;
    },
  },
} );

export const {
  loadRandomQuoteStart,
  loadRandomQuoteSuccess,
  loadTagsStart,
  loadTagsSuccess,
  loadTaggedQuoteStart,
  loadTaggedQuoteSuccess,
} = quotesSlice.actions;

export default quotesSlice.reducer;