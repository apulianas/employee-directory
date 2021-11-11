import React, {Component, useEffect, useState} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import DirectoryPage from './pages/Directory';
import CreatePage from './pages/Create';
import AdminPage from './pages/Admin';
import './App.css';


const App = () => {
  return (
      <BrowserRouter>
        <Switch> 
          <Redirect from="/" to="/directory" exact /> 
          <Route path="/directory" component={DirectoryPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </BrowserRouter>
   
  );
}

export default App;
