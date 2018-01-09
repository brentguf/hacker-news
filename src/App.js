import React, { Component } from 'react';
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

  onDismiss = (itemToDismiss) => {
    this.setState({
      result: this.state.result.filter(item => {
        return item.objectID !== itemToDismiss.objectID;
      })
    });
  };

  render() {
    const { searchTerm, result } = this.state;

    if (result === null) return <div>Loading...</div>;

    return (
      <div className="page">
        <div className="interactions">
          <Search>Search...</Search>
        </div>
        <Table 
          onDismiss={this.onDismiss}
          result={result} 
          searchTerm={searchTerm} />
      </div>
    );
  }
}

export default App;