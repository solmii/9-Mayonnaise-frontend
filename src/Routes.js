import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import Login from "Pages/Login/Login";
import SignUp from "Pages/SignUp/SignUp";
import ProductDetail from "Pages/ProductDetail/ProductDetail";
import RefillMe from "Pages/Brand/RefillMe/RefillMe";
import FlagshipStore from "Pages/Brand/FlagshipStore/FlagshipStore";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product_detail" component={ProductDetail} />
          <Route exact path="/brand/refillme" component={RefillMe} />
          <Route exact path="/brand/flagship_store" component={FlagshipStore} />
          {/* <Route exact path="/product_detail/test" component={ReviewModal} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
