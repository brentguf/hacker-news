import React, { Component } from 'react';
import TableItem from './TableItem';
import PropTypes from 'prop-types';

class Table extends Component {

  render() {
    const { stories, onDismiss, onSort } = this.props;

    return (
      <div className="table" >
        <div className="table-header">
          <span onClick={() => onSort('title')} style={{ 'width': '55%' }}>Title</span>
          <span onClick={() => onSort('author')} style={{ 'width': '15%' }}>Author</span>
          <span onClick={() => onSort('num_comments')} style={{ 'width': '10%' }}>Comments</span>
          <span onClick={() => onSort('points')} style={{ 'width': '10%' }}>Points</span>
          <span style={{ 'width': '10%' }}>Archive</span>
        </div>
        {
          stories
            .map(item => (
              <TableItem
                key={item.objectID}
                item={item}
                onDismiss={onDismiss}
              />))
        }
      </div>
    );
  }
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