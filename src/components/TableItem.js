import React from 'react';
import PropTypes from 'prop-types';

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
        <button
          onClick={() => onDismiss(item)}
          className="button-inline">
          Dismiss
        </button>
      </span>
    </div>
  ) 
}

TableItem.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
}

export default TableItem;