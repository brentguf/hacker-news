import React, { Component } from 'react';
import './index.css';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import fetch from 'isomorphic-fetch';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SPECIFIC = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

class App extends Component {

  state = {
    searchTerm: DEFAULT_QUERY,
    sortingOption: 'points',
    stories: null,
    page: 0,
  }

  componentDidMount = () => {
    this.fetchStories();
  }

  clearStories = () => {
    this.setState({
      stories: null
    });
  }

  fetchStories = (page = 0) => {
    const { searchTerm } = this.state;
    const url = `${PATH_BASE}${PATH_SPECIFIC}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.updateStories(result))
      .catch(e => console.log(e))
  }

  updateStories = (result) => {
    const { stories } = this.state;
    const updatedStories = stories ? 
      [...stories, ...result.hits] : [...result.hits];
    
    this.setState({
      stories: updatedStories, 
      page: result.page
    })
  }

  onInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.clearStories();
    this.fetchStories();
  }

  onDismiss = (itemToDismiss) => {
    this.setState({
      stories: this.state.stories.filter(item => {
        return item.objectID !== itemToDismiss.objectID;
      })
    });
  };

  render() {
    const { searchTerm, stories, page } = this.state;
    return (
      <div className="page">
        <div className="header interactions">
          <h1 className="header-primary">Hacker News Search</h1>
          <Search 
            searchTerm={searchTerm} 
            onSubmit={this.onSubmit}
            onInputChange={this.onInputChange}>
            Search...
          </Search>
        </div>
        { stories ? <Table 
            stories={stories} 
            onDismiss={this.onDismiss}
          />
          : <div className='table'>Loading...</div>
        }
        <div className="standalone-button">
          <button className='button button-load' onClick={() => this.fetchStories(page + 1)}>Load More Stories...</button>
        </div>
      </div>
    );
  }
}

export default App;
