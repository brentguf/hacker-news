import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = (searchTerm) => {
  return item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

class App extends Component {

  state = {
    searchTerm: '',
    list
  }
 
  onInputChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <input onChange={this.onInputChange} type="text"/>
        {
          list.filter(isSearched(searchTerm)).map(item => <h1 key={item.objectID}>{item.title}</h1>)
        }
      </div>
    );
  }
}

export default App;
