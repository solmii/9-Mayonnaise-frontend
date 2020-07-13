import React, { Component } from "react";
import "./ProductDetailReview.scss";
import ModalBtn from "./ModalBtn";
import ProductDetailGrid from "./ProductDetailGrid";
import ProductDetailSource from "./ProductDetailSource";

export default class ProductDetailReview extends Component {
  constructor() {
    super();

    this.state = {
      ptConditionShow: false,
      ptBtnOptionListShow: "피부타입",
      btConditionShow: false,
      btBtnOptionListShow: "작성일순",
    };
  }

  ptConditionclassNameName = () => {
    this.setState({ ptConditionShow: !this.state.ptConditionShow }); //이거는 true 일때, 피티컨디션쇼가 폴스니까
  };

  ptBtnClick = (name) => {
    this.setState({ ptBtnOptionListShow: name }); // 트루일때(피부타입일때) 그 내가 정한 리스트 이름이 보이게
  };
  btConditionclassNameName = () => {
    this.setState({ btConditionShow: !this.state.btConditionShow });
  };

  btBtnClick = (name) => {
    this.setState({ btBtnOptionListShow: name });
  };
  /*changePointclassNameName = (num) => {
    let starNum =
      (this.props.ptProInfoData.stars &&
        this.props.ptProInfoData.stars.review__score__avg) - num;
    if (starNum >= 0) {
      return "star-point full";
    } else if (-1 < starNum && starNum < -0.5) {
      return "star-point";
    } else if (-0.5 <= starNum && starNum < 0) {
      return "star-point half";
    } else if (this.props.point - num <= -1) {
      return "star-point";
    } else {
      return "star-point";
    }
  };*/
  render() {
    // console.log(this.props.ptProReviewData.reviews);
    // const { ptProInfoData, ptProReviewData } = this.props;

    return (
      <section className="pdp-review">
        <div className="wrapperOver">
          <header className="pdp__sub-header">
            <em className="pdp__sub-cap">Aritaum Reviews</em>
            <h3 className="h4 pdp__sub-heading xreview_totalcount">
              86개의 소중한 상품 리뷰
            </h3>
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
                <select name="one" class="dropdown-select">
                  <option value="1">피부타입</option>
                  <option value="2">민감성</option>
                  <option value="3">건성</option>
                  <option value="4">지성</option>
                  <option value="5">중성</option>
                  <option value="6">복합성 </option>
                  <option value="7">모든피부</option>
                  <option value="8">악건성</option>
                  <option value="9">트러블성</option>
                </select>
              </div>
              <div class="dropdown dropdown-dark">
                <select name="two" class="dropdown-select">
                  <option value="1">작성일순</option>
                  <option value="2">작성일순</option>
                  <option value="3">높은평점순</option>
                  <option value="4">낮은평점순</option>
                </select>
              </div>
            </div>
          </header>
        </div>

        <ProductDetailGrid />
        <ModalBtn />
        <ProductDetailSource />
      </section>
    );
  }
}
