const BASE_URL = 'https://api.quotable.io';

export const fetchRandomQuote = async () => {
  try {
    const response = await fetch( `${ BASE_URL }/random` );
    if ( !response.ok ) {
      throw new Error( 'Failed to fetch quote' );
    }
    const data = await response.json();
    return data;
  } catch ( error ) {
    console.error( 'Error fetching random quote:', error );
    throw error;
  }
};

export const fetchTags = async () => {
  try {
    const response = await fetch( `${ BASE_URL }/tags` );
    if ( !response.ok ) {
      throw new Error( 'Failed to fetch tags' );
    }
    const data = await response.json();
    return data;
  } catch ( error ) {
    console.error( 'Error fetching tags:', error );
    throw error;
  }
};

export const fetchTaggedQuote = async ( tagName ) => {
  try {
    const response = await fetch( `${ BASE_URL }/random?tags=${ tagName }` );
    if ( !response.ok ) {
      throw new Error( `Failed to fetch tagged quote for tag: ${ tagName }` );
    }
    const data = await response.json();
    return data;
  } catch ( error ) {
    console.error( `Error fetching tagged quote for tag ${ tagName }:`, error );
    throw error;
  }
};