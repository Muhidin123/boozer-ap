import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";

export default class TestLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Link to='/home' onClick={this.props.hideIt}>
            Test Home
          </Link>
          <Link to='/' onClick={this.props.hideIt}>
            Home
          </Link>

          <Switch>
            <Route exact path='/home'>
              <Form />
            </Route>
            <Route exact path='/'></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
