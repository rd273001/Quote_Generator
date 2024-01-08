import React from 'react';
import LoadingIndicator from './LoadingIndicator';

const TagDropdown = React.memo( ( { tags, onSelectTag, loading, tagName } ) => {
  return (
    <>
      {
        loading ? <LoadingIndicator /> :
          <select
            value={ tagName }
            onChange={ ( e ) => {
              console.log( `Tag Name Selected  =>  ${ e.target.value }` );
              onSelectTag( e.target.value );
            } }
            className='rounded-full cursor-pointer px-14 py-1 text-black items-center hover:opacity-80 active:opacity-50 w-max flex mx-auto my-15'
          >
            <option value='' disabled>Select Tag</option>
            { tags.map( ( tag ) => (
              <option key={ tag._id } value={ tag.name }>
                { tag.name }
              </option>
            ) ) }
          </select>
      }
    </>
  );
} );

export default TagDropdown;