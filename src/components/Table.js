import React from 'react';
import TableItem from './TableItem';
import PropTypes from 'prop-types';

const Table = ( { onDismiss, stories } ) => {
  return (
    <div className="table">
      <div className="table-header">
        <span style={{ 'width': '55%'}}>Title</span>
        <span style={{ 'width': '15%'}}>Author</span>
        <span style={{ 'width': '10%'}}>Comments</span>
        <span style={{ 'width': '10%'}}>Points</span>
        <span style={{ 'width': '10%'}}>Archive</span>
      </div>
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

Table.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    author: PropTypes.string,
    url: PropTypes.string,
    num_comments: PropTypes.number,
    point: PropTypes.number
  })).isRequired,
  onDismiss: PropTypes.func.isRequired,
}

export default Table;