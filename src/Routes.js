import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "Pages/Login/Login";
import SignUp from "Pages/SignUp/SignUp";
import Nav from "Components/Nav/Nav.js";
import Footer from "Components/Footer/Footer.js";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Main} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/footer" component={Footer} />

        </Switch>
      </Router>
    );
  }
}

export default Routes;
