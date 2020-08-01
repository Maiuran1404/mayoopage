import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./styles.scss";

//Containers
import Home from './containers/Home';
import DigitalBrain from './containers/DigitalBrain';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Digbrain' component={DigitalBrain} />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
