import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'http://hn.algolia.com/api/v1';
const PATH_SPECIFIC = '/search';
const PARAM = 'query=';

const isSearched = (searchTerm) => {
  return item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

class App extends Component {

  state = {
    searchTerm: DEFAULT_QUERY,
    result: null
  }

  componentDidMount = () => {
    const { searchTerm } = this.state;
    const url = `${PATH_BASE}${PATH_SPECIFIC}?${PARAM}${searchTerm}`;
    
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ result: result.hits }))
      .catch(e => e);
  }
 
  onInputChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    const { searchTerm, result } = this.state;

    if (result === null) return <div>Loading...</div>;

    return (
      <div className="App">
        <input onChange={this.onInputChange} type="text"/>
        <ul>
          {
            result
              .filter(isSearched(searchTerm))
              .map(item => <li key={item.objectID}>{item.title}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
