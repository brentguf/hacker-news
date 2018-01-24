import React from 'react';
import PropTypes from 'prop-types';

TableItem.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

function TableItem({ onDismiss, item }) {
  return (
    <div className="table-row">
      <span className='table-item' style={{'width': '55%'}}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span className='table-item' style={{'width': '15%'}}>{item.author}</span>
      <span className='table-item' style={{'width': '10%'}}>{item.num_comments}</span>
      <span className='table-item' style={{'width': '10%'}}>{item.points}</span>
      <span className='table-item' style={{'width': '10%'}}>
        <button
          onClick={() => onDismiss(item)}
          className="button button-dismiss">
          Dismiss
        </button>
      </span>
    </div>
  ) 
}

export default TableItem;