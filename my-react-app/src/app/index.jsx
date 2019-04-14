import React, { Component } from 'react';
import './styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from "./Layout";
import { Main, UserPage } from './routes';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/user/:login' component={UserPage}/>
              <Route path='/404' component={()=><div>Not found</div>} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
