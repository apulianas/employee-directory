import React, {Component, useEffect, useState} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import DirectoryPage from './pages/Directory';
import CreatePage from './pages/Create';
import './App.css';

import {ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql} from "@apollo/client";

const App = () => {
  //grab contacts from database 
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache()
  });
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch> 
          <Redirect from="/" to="/directory" exact />
          <Route path="/directory" component={DirectoryPage} />
          <Route path="/create" component={CreatePage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider> 
   
  );
}

/*class App extends Component{
  render (){
    return (
      <BrowserRouter>
        <Switch> 
          <Redirect from="/" to="/directory" exact />
          <Route path="/directory" component={DirectoryPage} />
          <Route path="/create" component={CreatePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}*/

export default App;
