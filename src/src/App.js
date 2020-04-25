import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
//import Friends from './components/Friends';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route /*path=""*/ component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
