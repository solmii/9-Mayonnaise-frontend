import React, { Component } from "react";
import ProductDetailReview from "./ProductDetailReview";
import "./ProductDetail.scss";
import "./ProductDetailData.scss";

export default class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      productDetail: {},
    };
  }

  
  addCartHandler = () => {
    fetch("http://10.58.1.117:8000/order/cart", {
      method: "post",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        product: this.state.productDetail.product_id,
        quantity: 1,
      }),
    }).then((res) => console.log(res));
  };

  clickHandler(idx) {
    this.setState({ colorIdNum: idx });
  }

  componentDidMount() {
    fetch(`http://10.58.1.117:8000/product/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ productDetail: res.item }));
  }

  render() {
    return (
      <div className="Product">
        {this.state.productDetail.product_description && (
          <>
            <section className="ProductDetailSite">
              <ol className="breadcrumb">
                <li className="breadcrumb__item">
                  <a className="breadcrumb__link" href="/kr/ko/skincare/">
                    <span className="breadcrumb__name">스킨케어</span>
                  </a>
                </li>
                <li className="breadcrumb__item">
                  <a className="breadcrumb__link" href="/kr/ko/skincare/line/">
                    <span className="breadcrumb__name-1">라인별</span>
                  </a>
                </li>
                <li className="breadcrumb__item">
                  <a
                    className="breadcrumb__link"
                    href="/kr/ko/skincare/line/radian-c/"
                  >
                    <span className="breadcrumb__name-2">래디언-C</span>
                  </a>
                </li>
              </ol>
            </section>
            <section>
              <header>
                <div className="headerContainer">
                  <div className="headerInfoContainer">
                    <div className="productInfoSub">
                      <p className="subName"></p>
                      <div className="subImgContainer">
                        {this.state.productDetail.product_images.map(
                          (el, idx) => {
                            return (
                              <img
                                onClick={() => this.clickHandler(idx)}
                                className="subImg"
                                src={el}
                                alt="subImg"
                              />
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="productImgContainer">
                      <img
                        className="productImg"
                        src={this.state.productDetail.product_images[0]}
                       
                        alt=""
                      />
                    </div>
                    <div className="productInfo">
                      <div className="productInfoBox">
                        <p className="hashtag">
                          <span className="hashtag-1">
                            {this.state.productDetail.product_tag[0]}
                          </span>{" "}
                          <span className="sking">
                            {this.state.productDetail.product_tag[0]}
                          </span>
                          {/* {this.state.product_feature.product_tag} */}
                        </p>
                        <p className="name">
                          {this.state.productDetail.product_name_ko}
                        </p>
                        <p className="productInfoSubname">
                          {this.state.productDetail.product_name_en}
                        </p>
                        <p className="discription">
                          <br />

                          {this.state.productDetail.product_description}
                        </p>
                        <div className="totalPrice">
                          <p className="volume">
                            {this.state.productDetail.product_volume}
                          </p>
                          <p className="price">
                            {this.state.productDetail.product_price}
                          </p>
                        </div>
                      </div>

                      <div className="btnContainer">
                        <div className="buyBtn" onClick={this.addCartHandler}>
                          장바구니
                        </div>
                        {/* <div className="car tBtn" onClick={this.cartHandler}>
                        <img className="cartImg" src={CartImg} alt="" /> */}
                        <div className="btnContainer">
                          <div className="buyBtn">구매하기</div>
                          {/* <div className="cartBtn" onClick={this.cartHandler}>
                        <img className="cartImg" src={CartImg} alt="" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </header>
              <section>
                <div id="pdp-tabs" class="tabs pdp__tabs">
                  <a href="#feature" class="tab-link tab-link--active">
                    상품 특징
                  </a>
                  <a href="#review" class="tab-link-1">
                    사용 리뷰(6,543)
                  </a>
                  <a href="#info" class="tab-link-2">
                    전성분/주의사항
                  </a>
                </div>
              </section>
              <article>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.productDetail.product_feature,
                  }}
                ></div>
              </article>
              <ProductDetailReview
                productId={this.state.productDetail.product_id}
              />
            </section>
          </>
        )}
        {/* <Footer /> */}
      </div>
    );
  }
}
