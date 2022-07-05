import React from 'react';

//component definition
const List = ({ list }) =>

//passing values from the List component's list object into the Item component
  list.map(item => <Item key={item.objectID} item={item} />);

  const Item = ({ item }) => (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
);

export default List;