import React, { Component, PropTypes } from "react";
import { Router, browserHistory, IndexRoute, Route } from "react-router";
import App from "./components/App";


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
  
    </Route>


  </Router>
);
