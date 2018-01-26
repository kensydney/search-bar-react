import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import SearchPage from './components/searchPage';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={SearchPage} />         
  </Route>
);