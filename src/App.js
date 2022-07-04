import React from 'react';
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

  //callback handler
  const handleSearch = event => {
    console.log(event.target.value)
  };
  

  return (
    <div className="App">
      <h1>Search {getTitle('App')}</h1>

      <Search onSearch={handleSearch} />
      <hr />

      {/* component instance, used like any other html element */}
       <List list={stories}/>
    </div>
  );
}

export default App;
