import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "Pages/ProductDetail/ProductDetail";
// import ProductDetailReview from "Pages/ProductDetail/ProductDetailReview";
// import ProductDetailCard from "Pages/ProductDetail/ProductDetailCard";
// import ProductDetailGrid from "Pages/ProductDetail/ProductDetailGrid";
// import ProductDetailSource from "Pages/ProductDetail/ProductDetailSource";
import Main from "Pages/Main/Main";
import Login from "Pages/Login/Login";
import SignUp from "Pages/SignUp/SignUp";
import Homme from "Pages/ProductList/Homme/Homme";
import Nav from "Components/Nav/Nav.js";
import Footer from "Components/Footer/Footer.js";
import RefillMe from "Pages/Brand/RefillMe";
import SkinCare from "Pages/ProductList/SkinCare/SkinCare";
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
          {/* <Route exact path="/product_review" component={ProductDetailReview} />
          <Route exact path="/product_card" component={ProductDetailCard} />
          <Route exact path="/product_grid" component={ProductDetailGrid} />
          <Route exact path="/product_source" component={ProductDetailSource} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/skincare" component={SkinCare} />
          <Route exact path="/homme" component={Homme} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/brand/refillme" component={RefillMe} />
          {/* <Route
            exact
            path="/products/list/:category"
            component={ProductList}
          /> */}
          {/* <Route exact path="/product_detail/test" component={ReviewModal} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
