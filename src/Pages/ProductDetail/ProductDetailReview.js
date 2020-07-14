import React, { Component } from "react";
import "./ProductDetailReview.scss";
import ModalBtn from "./ModalBtn";
import ProductDetailGrid from "./ProductDetailGrid";
import ProductDetailSource from "./ProductDetailSource";

export default class ProductDetailReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      reviewData: {},
      ptConditionShow: false,
      ptBtnOptionListShow: "피부타입",
      btConditionShow: false,
      btBtnOptionListShow: "작성일순",
      filter: "",
    };
  }

  componentDidMount() {
    fetch(`http://10.58.1.117:8000/review?product_id=1`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.reviews }));
  }

  filter = (e) => {
    this.setState({ filter: e.target.value });
    // console.log("filter >>> ", e.target.value);

    fetch(
      `http://10.58.1.117:8000/review?product_id=${this.props.productId}&skin_type_id=${e.target.value}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.reviews }));
  };

  getReviewData = () => {
    fetch(`http://10.58.1.117:8000/review?product_id=${this.props.productId}`)
      .then((res) => res.json())
      // .then((res) => console.log("ProductDetailReview res: ", res));
      .then((res) => this.setState({ data: res.reviews }));
  };

  render() {
    return (
      <section className="pdp-review">
        <div className="wrapperOver">
          <header className="pdp__sub-header">
            <p className="pdp__sub-cap">Aritaum Reviews</p>
            <h3 className="pdp_namesubtwo">86개의 소중한 상품 리뷰</h3>
            <div className="rating rating--with-score">
              <div className="rating__pad">
                <div
                  className="rating__stars xrating__hstarts"
                  aria-hidden="true"
                >
                  <span className="iconic">★</span>
                  <span className="iconic">★</span>
                  <span className="iconic">★</span>
                  <span className="iconic">★</span>
                  <span className="iconic">★</span>
                </div>
              </div>
              <span className="rating__score xrating__score">4.8 / 5.0</span>
            </div>

            <div className="total-filter">
              <div className="filter-bar">
                <button className="entire-button">전체</button>
                <span className="hipen"> | </span>

                <button className="entire-photo">포토</button>
              </div>
              <div class="dropdown">
                <select
                  name="one"
                  className="dropdown-select"
                  onChange={this.filter}
                  value={this.state.value}
                >
                  <option value="all">피부타입</option>
                  <option value={1}>민감성</option>
                  <option value={2}>건성</option>
                  <option value={3}>지성</option>
                  <option value={4}>중성</option>
                  <option value={5}>복합성</option>
                  <option value={6}>모든피부</option>
                  <option value={7}>악건성</option>
                  <option value={8}>트러블성</option>
                </select>
              </div>
              <div class="dropdown dropdown-dark">
                <select
                  name="two"
                  className="dropdown-select"
                  onChange={this.filter}
                  value={this.state.value}
                >
                  <option value="작성일순">작성일순</option>
                  <option value="높은평점순">높은평점순</option>
                  <option value="낮은평점순">낮은평점순</option>
                </select>
              </div>
            </div>
          </header>
        </div>
        <ModalBtn />
        <ProductDetailGrid reviewData={this.state.data} />
        <ProductDetailSource />
      </section>
    );
  }
}
