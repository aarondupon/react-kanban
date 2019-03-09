import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './api/data.json';
import List from './components/List';

console.log(data)


class App extends Component {
 
  render() {
    return (
      <div className="App">
       {data.map(list=><List {...list} />)}
      </div>
    );
  }
}

export default App;
