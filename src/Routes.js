import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './Pages/Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;