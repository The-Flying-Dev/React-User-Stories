import React, { useState, useEffect } from 'react';
import List from './List';
import Search from './Search';
import './App.css';


function getTitle(title) {
  return title;
}


const App = () => {

  const stories = [
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

  //lifting state from Search component
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || 'React'
  );

  useEffect(() => {
    localStorage.setItem('search', setSearchTerm);
  }, [setSearchTerm]);
  //callback handler to get data back up from the search component
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  //filter returns array with items matching the criteria, need to lowercase to match
  const searchedStories = stories.filter(story => 
    story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  

  return (
    <div className="App">
      <h1>Search {getTitle('App')}</h1>

      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />

      {/* component instance, used like any other html element */}
       <List list={searchedStories}/>
    </div>
  );
}

export default App;
