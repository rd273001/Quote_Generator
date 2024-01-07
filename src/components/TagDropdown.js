import React from 'react';

const TagDropdown = ( { tags, onSelectTag } ) => {
  return (
    <select className='rounded-full cursor-pointer px-14 py-1 text-black items-center hover:opacity-80 active:opacity-50 w-max flex mx-auto my-15' onChange={ ( e ) => onSelectTag( e.target.value ) }>
      <option value='def'>Select Tag</option>
      { tags.map( ( tag ) => (
        <option key={ tag } value={ tag }>
          { tag }
        </option>
      ) ) }
    </select>
  );
};

export default TagDropdown;