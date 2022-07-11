import React, { useState, useEffect, useRef } from 'react';
import List from './List';
//import Search from './Search';
import './App.css';

const initialStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const getAsyncStories = () =>
  new Promise(resolve => 
    setTimeout(
      () => resolve({ data: { stories: initialStories } }),
      2000
    )
  );

//custom hook
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};


const App = () => {
  //lifting state from Search component
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );

  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true)

    getAsyncStories().then(result => {
      setStories(result.data.stories);
      setIsLoading(false);
    })
    .catch(() => setIsError(true));
  }, []);

  //useEffect(() => {
  //  localStorage.setItem('search', setSearchTerm);
  //}, [setSearchTerm]);

  //callback handler to get data back up from the search component
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  //filter returns array with items matching the criteria, need to lowercase to match
  const searchedStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  const handleRemoveStory = item => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID    
    );

    setStories(newStories);
  };

  return (
    <div className="App">
      <h1>Search App</h1>

      {/*<Search search={searchTerm} onSearch={handleSearch} />*/}

      <InputWithLabel 
        id='search'        
        value={searchTerm}  
        isFocused      
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />

      {isError && <p>Something went wrong ...</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (

      // component instance, used like any other html element 
       <List 
          list={searchedStories} 
          onRemoveItem={handleRemoveStory} 
       />
      )}
    </div>
  );
}

//new component
const InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children }) => {

  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input 
        ref={inputRef}
        id={id}
        type={type}
        value={value}        
        onChange={onInputChange}
      />
    </>
  );
};

export default App;
