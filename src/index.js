import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/app/App';
import Resume from '../src/components/resume/Resume.jsx';

render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  </Router>,

  document.getElementById('root')
);
