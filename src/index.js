import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home'
import Chat from './Components/Chat';
import Navigation from './Components/Navigation';

ReactDOM.render(
  <Router>
    <Navigation>
      <Switch>
        <Route exact path="/Chat" component={Home} />
        <Route exact path="/" component={Chat} />
      </Switch>
    </Navigation>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
