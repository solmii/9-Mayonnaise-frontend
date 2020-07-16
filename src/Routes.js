import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductDetail from "Pages/ProductDetail/ProductDetail";
import ProductDetailReview from "Pages/ProductDetail/ProductDetailReview";
import ProductDetailCard from "Pages/ProductDetail/ProductDetailCard";
import ProductDetailGrid from "Pages/ProductDetail/ProductDetailGrid";
import ProductDetailSource from "Pages/ProductDetail/ProductDetailSource";
import Main from "Pages/Main/Main";
import Login from "Pages/Login/Login";
import SignUp from "Pages/SignUp/SignUp";
import RefillMe from "Pages/Brand/RefillMe";
// import ReviewModal from "Pages/ProductDetail/ModalBtn";
// import Login from "Pages/ProductDetail/Login";
// import SignUp from "Pages/ProductDetail/SignUp";
// import Main from "Pages/ProductDetail/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />

          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/product_detail" component={ProductDetail} />
          <Route exact path="/product_detail/:id" component={ProductDetail} />
          <Route exact path="/" component={Main} />
          <Route exact path="/product_review" component={ProductDetailReview} />
          <Route exact path="/product_card" component={ProductDetailCard} />
          <Route exact path="/product_grid" component={ProductDetailGrid} />
          <Route exact path="/product_source" component={ProductDetailSource} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/brand/refillme" component={RefillMe} />
          {/* <Route exact path="/product_detail/test" component={ReviewModal} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
