import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRandomQuote, fetchTags, fetchTaggedQuote } from './quotesApi';

export const getRandomQuote = createAsyncThunk( 'quotes/getRandomQuote', async () => {
  try {
    const quote = await fetchRandomQuote();
    return quote;
  } catch ( error ) {
    console.error( 'Error fetching random quote:', error );
    throw error;
  }
} );

export const getTags = createAsyncThunk( 'quotes/getTags', async () => {
  try {
    const tags = await fetchTags();
    return tags;
  } catch ( error ) {
    console.error( 'Error fetching tags:', error );
    throw error;
  }
} );

export const getTaggedQuote = createAsyncThunk( 'quotes/getTaggedQuote', async ( tagName ) => {
  try {
    const taggedQuote = await fetchTaggedQuote( tagName );
    return taggedQuote;
  } catch ( error ) {
    console.error( `Error fetching tagged quote for tag ${ tagName }:`, error );
    throw error;
  }
} );

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
  extraReducers: ( builder ) => {
    builder
      .addCase( getRandomQuote.pending, ( state ) => {
        state.loadingQuote = true;
      } )
      .addCase( getRandomQuote.fulfilled, ( state, action ) => {
        state.randomQuote = action.payload;
        state.loadingQuote = false;
      } )
      .addCase( getRandomQuote.rejected, ( state ) => {
        state.loadingQuote = false;
      } )
      .addCase( getTags.pending, ( state ) => {
        state.loadingTags = true;
      } )
      .addCase( getTags.fulfilled, ( state, action ) => {
        state.tags = action.payload;
        state.loadingTags = false;
      } )
      .addCase( getTags.rejected, ( state ) => {
        state.loadingTags = false;
      } )
      .addCase( getTaggedQuote.pending, ( state ) => {
        state.loadingTaggedQuote = true;
      } )
      .addCase( getTaggedQuote.fulfilled, ( state, action ) => {
        state.taggedQuote = action.payload;
        state.loadingTaggedQuote = false;
      } )
      .addCase( getTaggedQuote.rejected, ( state ) => {
        state.loadingTaggedQuote = false;
      } );
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