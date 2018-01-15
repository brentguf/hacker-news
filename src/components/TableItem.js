import React from 'react';
import PropTypes from 'prop-types';

const TableItem = ({ onDismiss, item }) => {
  return (
    <div className="table-row">
      <span style={{'width': '55%'}}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{'width': '15%'}}>{item.author}</span>
      <span style={{'width': '10%'}}>{item.num_comments}</span>
      <span style={{'width': '10%'}}>{item.points}</span>
      <span style={{'width': '10%'}}>
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
  item: PropTypes.object.isRequired
}

export default TableItem;