import React, { Component } from 'react';
import TableItem from './TableItem';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';

class Table extends Component {

  state = {
    sortingOption: 'points',
    sortingType: 'alphanumeric',
    shouldReverse: true
  }

  setSortingOption = (sortingOption, sortingType) => {
    // if sorting option is the same => reverse
    // if sorting option is different, check sorting type
    // if sorting type is numeric => reverse
    // if sorting type is alphanumeric => don't reverse
    let shouldReverse;
    
    this.setState(prevState => {
      if (prevState.sortingOption !== sortingOption) {
        shouldReverse = sortingType === 'numeric' ? true : false; 
      } else {
        shouldReverse = !prevState.shouldReverse;
      }
      
      return {
        sortingOption,
        sortingType,
        shouldReverse
      };
    });
  }

  sortStories = (stories) => {
    const { sortingOption, sortingType, shouldReverse } = this.state;

    if (shouldReverse) {
      return sortBy(stories, sortingOption).reverse();
    } 
    return sortBy(stories, sortingOption);
  }

  render() {
    const { stories, onDismiss } = this.props;
    const { sortingOption } = this.state;

    return (
      <div className="table" >
        <div className="table-header">
          <span className={'title' === sortingOption ? 'table-header-active' : ''} 
                onClick={() => this.setSortingOption('title', 'alphanumeric')} 
                style={{ 'width': '55%' }}>Title</span>
          <span className={'author' === sortingOption ? 'table-header-active' : ''} 
                onClick={() => this.setSortingOption('author', 'alphanumeric')} 
                style={{ 'width': '15%' }}>Author</span>
          <span className={'num_comments' === sortingOption ? 'table-header-active' : ''} 
                onClick={() => this.setSortingOption('num_comments', 'numeric')} 
                style={{ 'width': '10%' }}>Comments</span>
          <span className={'points' === sortingOption ? 'table-header-active' : ''} 
                onClick={() => this.setSortingOption('points', 'numeric')} 
                style={{ 'width': '10%' }}>Points</span>
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