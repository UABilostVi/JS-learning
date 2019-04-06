import React, { Component } from 'react';
import './styles.scss';
import { Layout } from "./Layout";
import { Main } from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Main/>
        </Layout>
      </div>
    );
  }
}

export default App;
