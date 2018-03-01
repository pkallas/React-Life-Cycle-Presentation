import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../home_page';
import NotFound from '../not_found';
import ErrorBoundary from '../error_boundary';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ErrorBoundary>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
};
