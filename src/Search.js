import React from 'react';


const Search = ({ search, onSearch }) => { 

  return (
    <>
      <label htmlFor='search'>Search</label>
      <input 
        id='search' 
        type='text' 
        onChange={onSearch} 
        value={search}
      />
    </>
  );
};

export default Search;