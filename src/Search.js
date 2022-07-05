import React from 'react';


const Search = props => {
  
{/* 
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
    props.onSearch(event); //to send data back to the app component to be shared among other components
  };
*/}

  return (
    <div>

      <label htmlFor='search'>Search</label>
      <input id='search' type='text' onChange={props.onSearch} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>

    </div>
  );
};

export default Search;