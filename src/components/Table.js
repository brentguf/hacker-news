import React from 'react';
import TableItem from './TableItem';

const Table = ( { onDismiss, result } ) => {
  return (
    <div className="table">
      { 
        result
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