import React from 'react';
import TableItem from './TableItem';

const isSearched = (searchTerm) => {
  return item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

const Table = ( { result, searchTerm } ) => {
  return (
    <div className="table">
      { 
        result
          .filter(isSearched(searchTerm))
          .map(item => <TableItem 
            key={item.objectID}
            item={item} />)
      }
    </div>
  );
}

export default Table;