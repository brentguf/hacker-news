import React, { Component } from 'react';
import TableItem from './TableItem';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';

class Table extends Component {

  state = {
    sortingOption: 'points',
    shouldReverse: true
  }

  setSortingOption = (sortingOption) => {
    this.setState(prevState => {
      return {
        sortingOption,
        shouldReverse: !prevState.shouldReverse
      };
    });
  }

  sortStories = (stories) => {
    const { sortingOption, shouldReverse } = this.state;

    if (shouldReverse) { 
      return sortBy(stories, sortingOption).reverse(); 
    };

    return sortBy(stories, sortingOption);
  }

  render() {
    const { stories, onDismiss } = this.props;

    return (
      <div className="table" >
        <div className="table-header">
          <span onClick={() => this.setSortingOption('title')} style={{ 'width': '55%' }}>Title</span>
          <span onClick={() => this.setSortingOption('author')} style={{ 'width': '15%' }}>Author</span>
          <span onClick={() => this.setSortingOption('num_comments')} style={{ 'width': '10%' }}>Comments</span>
          <span onClick={() => this.setSortingOption('points')} style={{ 'width': '10%' }}>Points</span>
          <span style={{ 'width': '10%' }}>Archive</span>
        </div>
        {
          this.sortStories(stories)
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