import React, { Component } from 'react';
import './styles.scss';
import { Header } from '../Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
        React app
      </div>
    );
  }
}

export default App;
