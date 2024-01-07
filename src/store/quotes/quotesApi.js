export const fetchRandomQuote = async () => {
  const response = await fetch( 'https://api.quotable.io/random' );
  const data = await response.json();
  return data;
};

export const fetchTags = async () => {
  const response = await fetch( 'https://api.quotable.io/tags' );
  const data = await response.json();
  return data;
};

export const fetchTaggedQuote = async ( tag ) => {
  const response = await fetch( `https://api.quotable.io/random?tags=${ tag }` );
  const data = await response.json();
  return data;
};