import React, { Component } from 'react';
import './styles.scss';
import { Header } from '../Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        App body
      </div>
    );
  }
}

export default App;
