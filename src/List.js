import React from 'react';

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

export default List;