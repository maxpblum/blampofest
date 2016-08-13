import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

var App = require('../components/app')
var About = require('../components/about')
var Accommodations = require('../components/accommodations')
var Registry = require('../components/registry')
var Party = require('../components/party')
var Rsvp = require('../components/rsvp')




var router = (
  <Router history={hashHistory}>

    <Route path="/" component={App} >
      <IndexRoute component={About} />
      <Route path="about" component={About} />
      <Route path="party" component={Party} />
      <Route path="accommodations" component={Accommodations} />
      <Route path="registry" component={Registry} />
      <Route path="rsvp" component={Rsvp} />
    </Route>

  </Router>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById('app'));
});
