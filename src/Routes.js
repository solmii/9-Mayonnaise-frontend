import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "Pages/Login/Login";
import SignUp from "Pages/SignUp/SignUp";

import SkinCare from "Pages/ProductList/SkinCare/SkinCare";
import Homme from "Pages/ProductList/Homme/Homme";
import RefillMe from "Pages/Brand/RefillMe";
// import ReviewModal from "Pages/ProductDetail/ModalBtn";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Main} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} /><<<<<<< feature/product_list
          <Route exact path="/skincare" component={SkinCare} />
          <Route exact path="/homme" component={Homme} />
          <Route exact path="/brand/refillme" component={RefillMe} />
          {/* <Route exact path="/product_detail/test" component={ReviewModal} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
