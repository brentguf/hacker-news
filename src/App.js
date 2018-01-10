import React, { Component } from 'react';
import './index.css';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'http://hn.algolia.com/api/v1';
const PATH_SPECIFIC = '/search';
const PARAM = 'query=';

class App extends Component {

  state = {
    searchTerm: DEFAULT_QUERY,
    result: null
  }

  componentDidMount = () => {
    this.fetchStories();
  }

  clearStories = () => {
    this.setState({
      result: null
    });
  }

  fetchStories = () => {
    const { searchTerm } = this.state;
    const url = `${PATH_BASE}${PATH_SPECIFIC}?${PARAM}${searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ result: result.hits }))
      .catch(e => e);
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
      result: this.state.result.filter(item => {
        return item.objectID !== itemToDismiss.objectID;
      })
    });
  };

  render() {
    const { searchTerm, result } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Search 
            searchTerm={searchTerm} 
            onSubmit={this.onSubmit}
            onInputChange={this.onInputChange}>
            Search...
          </Search>
        </div>
        { result ? <Table 
          onDismiss={this.onDismiss}
          result={result}  />
          : <div>Loading...</div> 
        }
      </div>
    );
  }
}

export default App;
