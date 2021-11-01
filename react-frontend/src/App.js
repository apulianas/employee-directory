import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import DirectoryPage from './pages/Directory';

import './App.css';

class App extends Component{
  render (){
    return (
      <BrowserRouter>
        <Switch> 
          <Redirect from="/" to="/directory" exact />
          <Route path="/directory" component={DirectoryPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
