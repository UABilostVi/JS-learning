import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from "./Layout";
import { Main, UserPage } from './routes';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/user/:login' component={UserPage}/>
              <Route path='/about-me' component={() => <h1>About me</h1>}/>
              <Route path='/404' component={()=><div>Not found</div>} />
            </Switch>
          </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
