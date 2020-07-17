import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "Pages/Main/Main";
import Nav from "Components/Nav/Nav.js";
import Footer from "Components/Footer/Footer.js";
import Login from "Pages/Login/Login";
import SignUp from "Pages/SignUp/SignUp";
import ProductDetail from "Pages/ProductDetail/ProductDetail";
import SkinCare from "Pages/ProductList/SkinCare/SkinCare";
import Homme from "Pages/ProductList/Homme/Homme";
import FlagshipStore from "Pages/Brand/FlagshipStore/FlagshipStore";
import RefillMe from "Pages/Brand/RefillMe/RefillMe";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product_detail" component={ProductDetail} />
          <Route exact path="/product_detail/:id" component={ProductDetail} />
          <Route exact path="/skincare" component={SkinCare} />
          <Route exact path="/homme" component={Homme} />
          <Route exact path="/brand/flagship_store" component={FlagshipStore} />
          <Route exact path="/brand/refillme" component={RefillMe} />
          {/* <Route
            exact
            path="/products/list/:category"
            component={ProductList}
          /> */}
        </Switch>
        <Footer />
      </Router>
    );
  
}

export default Routes;
