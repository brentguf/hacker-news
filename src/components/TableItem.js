import React from 'react';
import Button from './Button';

const TableItem = ({ onDismiss, item }) => {
  return (
    <div key={item.objectID} className="table-row">
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <Button
          onClick={() => onDismiss(item)}
          item={item}
          className="button-inline">
          Dismiss
        </Button>
      </span>
    </div>
  ) 
}

export default TableItem;