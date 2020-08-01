import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

//Containers
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>  // Should be header that applies to all pages</h1>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
