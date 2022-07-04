import React from 'react';
import './App.css';



function getTitle(title) {
  return title;
}

//component definition

const List = ({ list }) => {
  return (
    <ul style={{listStyle: 'none'}}>

      {list.map((item) => {
        return (            
          <li key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>            
        );
      })}
    </ul>       

  );
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

  const handleChange = event => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>Function returns {getTitle('argument')}</h1>

      <label 
        htmlFor='search'
      >
        Search
      </label>

      <input 
        id='search' 
        type='text' 
        onChange={handleChange} 
      />

      <hr />
      {/* component instance, used like any other html element */}
       <List list={stories}/>
    </div>
  );
}

export default App;
