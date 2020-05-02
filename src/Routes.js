import React from 'react';
import App from './component/App'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
      </Switch>
    </Router>
  );
}

export default Routes;