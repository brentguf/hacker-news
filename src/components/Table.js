import React from 'react';
import TableItem from './TableItem';

const Table = ( { onDismiss, stories } ) => {
  return (
    <div className="table">
      { 
        stories
          .map(item => (
          <TableItem
            onDismiss={onDismiss}
            key={item.objectID}
            item={item} 
          />))
      }
    </div>
  );
}

export default Table;