import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';

class Table extends Component {

  static propTypes = {
    stories: PropTypes.arrayOf(PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      point: PropTypes.number
    })).isRequired,
    onDismiss: PropTypes.func.isRequired,
  }

  state = {
    sortingOption: 'points',
    sortingType: 'numeric',
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
    const { sortingOption, shouldReverse } = this.state;

    if (shouldReverse) {
      return sortBy(stories, sortingOption).reverse();
    } 
    return sortBy(stories, sortingOption);
  }

  render() {
    const { sortingOption } = this.state;
    const { stories, onDismiss } = this.props;

    return (
      <div className="table" >
        <div className="table-header">
          {
            tableHeaders.map(header => {
              const activeClassName = header.sortingOption === sortingOption ? 'table-header-active' : '';

              return (
                <TableHeader
                  className={activeClassName}
                  onSelect={() => this.setSortingOption(header.sortingOption, header.sortingType)}
                  style={header.style}
                  content={header.content}
                  key={header.key}
                />);
            })            
          }
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

const tableHeaders = [
  {
    content: 'Title',
    sortingOption: 'title',
    sortingType: 'alphanumeric',
    style: { 'width': '55%' },
    key: 'header-1'
  },
  {
    content: 'Author',
    sortingOption: 'author',
    sortingType: 'alphanumeric',
    style: { 'width': '15%' },
    key: 'header-2'
  },
  {
    content: 'Comments',
    sortingOption: 'num_comments',
    sortingType: 'numeric',
    style: { 'width': '10%' },
    key: 'header-3'
  },
  {
    content: 'Points',
    sortingOption: 'points',
    sortingType: 'numeric',
    style: { 'width': '10%' },
    key: 'header-4'
  }
];

export default Table;