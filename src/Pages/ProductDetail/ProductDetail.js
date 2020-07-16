import React, { Component } from "react";
import ProductDetailReview from "./ProductDetailReview";
import "./ProductDetail.scss";
import "./ProductDetailData.scss";

export default class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      productDetail: {}
    };
  }

  clickHandler(idx) {
    this.setState({ colorIdNum: idx });
  }

  componentDidMount() {
    fetch(`http://10.58.7.218:8000/product/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then(res => this.setState({ productDetail: res.item }));
  }

  render() {
    const { product_feature } = this.state.productDetail;

    return (
      <div className="Product">
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
                  <p className="subName">
                  </p>
                  <div className="subImgContainer">
                    {this.state.productDetail.product_images && this.state.productDetail.product_images.map((el, idx) => {
                      return (
                        <img
                          onClick={() => this.clickHandler(idx)}
                          className="subImg"
                          src={el}
                          alt="subImg"
                        />
                      )
                    })}
                  </div>
                </div>
                <div className="productImgContainer">
                  <img
                    className="productImg"
                    src={
                      this.state.product_feature !== 0 &&    
                      this.state.productDetail.product_images
                    }
                    // src={
                    //   this.state.product_feature.length !== 0 &&
                    //   this.state.product_feature.product_images[
                    //     `sub${this.state.subIdNum + 1}` //서브이미지가 클릭될 때마다 여기가 변해야함
                    //   ] //메인사진, product_feature에 어떤것이 있고 product_feature의 product_images일때 컬러가 coloridnum+1씩 해준다
                    // } //궁금한게 같이 넘어오는 사진인데 state.이름만 다르게 해서 각각 받을 수 있는지 궁금함 아니면 너무 헷갈린다..
                    alt=""
                  />
                </div>
                <div className="productInfo">
                  <div className="productInfoBox">
                    <p className="hashtag">
                      {/* <span className="hashtag-1">{this.state.product_feature.product_tag}</span>{" "} */}
                      {/* <span className="sking">{this.state.product_feature.product_tag}</span> */}
                      {/* {this.state.product_feature.product_hashtag} */}
                    </p>
                    <p className="name">
                      
                      {/* {this.state.product_feature.product_name_ko} */}
                    </p>
                    <p className="productInfoSubname">
                      
                      {/* {this.state.product_feature.product_name_en} */}
                    </p>
                    <p className="discription">
                   
                      <br />
                    
                      {/* {this.state.product_feature.product_description} */}
                    </p>
                    <div className="totalPrice">
                      <p className="volume">
                    
                        {/* {this.state.product_feature.product_volume} */}
                      </p>
                      <p className="price">
                      
                        {/* {this.state.product_feature.product_price} */}
                      </p>
                    </div>
                  </div>

                  <div className="btnContainer">
                    <div className="buyBtn">장바구니</div>
                    {/* <div className="cartBtn" onClick={this.cartHandler}>
                      <img className="cartImg" src={CartImg} alt="" /> */}
                    <div className="btnContainer">
                      <div className="buyBtn">구매하기</div>
                      {/* <div className="cartBtn" onClick={this.cartHandler}>
                      <img className="cartImg" src={CartImg} alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <ul className="imgCollection">
                <li>
                  <img
                    className="img"
                    src={
                      this.state.product_feature.length !== 0 &&
                      this.state.product_feature.product_images[
                        `color${this.state.subIdNum + 1}`
                      ][this.state.subId]
                    }
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src={
                      this.state.product_feature.length !== 0 &&
                      this.state.product_feature.product_images[
                        `color${this.state.subIdNum + 1}`
                      ][this.state.subId + 1]
                    }
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src={
                      this.state.product_feature.length !== 0 &&
                      this.state.product_feature.product_images[
                        `color${this.state.subIdNum + 1}`
                      ][this.state.subId + 2]
                    }
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src={
                      this.state.product_feature.length !== 0 &&
                      this.state.product_feature.product_images[
                        `color${this.state.subIdNum + 1}`
                      ][this.state.subId + 3]
                    }
                    alt=""
                  />
                </li>
              </ul> */}
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
              dangerouslySetInnerHTML={{ __html: this.state.productDetail.product_feature }}
            ></div>
            {/* <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
            <div dangerouslySetInnerHTML={{ __html: stage }}></div> */}
          </article>
          <ProductDetailReview productId={this.state.productDetail.product_id} />
        </section>
        {/* <Footer /> */}
      </div>
    );
  }
}
