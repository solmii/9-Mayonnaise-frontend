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

  // 장바구니 버튼 클릭시 상품 정보 POST로 서버에 전송
  addCartHandler = () => {
    fetch("http://10.58.5.123:8001/cart", {
      method: "post",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        productNum: this.state.productNum,
        currentSize: this.state.currentSize,
        currentOrigin: this.state.currentOrigin,
        currentSale: this.state.currentSale,
        currentQuantity: this.state.currentQuantity,
      }),
    })
    .then((res) => res.json()) // 제이슨 바디로 온다...
    .then((res) => {
      if (res.token) {
        //토큰이름은 종헌님이랑 같이 상의
        localStorage.setItem("access_token", res.token); //access_token이름은 내가 정하는거 res.token은 그 토큰 종헌님한테 오는거 긴 토큰 이름임..
        this.props.history.push("cart");
      }
    })
    .then((res) => console.log(res)); //그냥 콘솔에 뿌리고 끝 리턴 안함
  };
  clickHandler(idx) {
    this.setState({ colorIdNum: idx });
  }

  componentDidMount() {
    fetch(`http://10.58.3.235:8000/product/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then(res => this.setState({ productDetail: res.item }));
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
                    <p className="subName">
                    </p>
                    <div className="subImgContainer">
                      {this.state.productDetail.product_images.map((el, idx) => {
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
                        this.state.productDetail.product_images[0]
                      }
                      // src={
                        // this.state.productDetail.product_images.length > 0 &&
                        // this.state.productDetail.product_images[1]
                          // `sub${this.state.subIdNum + 1}` //서브이미지가 클릭될 때마다 여기가 변해야함
                         //메인사진, product_feature에 어떤것이 있고 product_feature의 product_images일때 컬러가 coloridnum+1씩 해준다
                       //궁금한게 같이 넘어오는 사진인데 state.이름만 다르게 해서 각각 받을 수 있는지 궁금함 아니면 너무 헷갈린다..
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <div className="productInfoBox">
                      <p className="hashtag">
                        <span className="hashtag-1">{this.state.productDetail.product_tag[0]}</span>{" "}
                        <span className="sking">{this.state.productDetail.product_tag[0]}</span>
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
                      <div className="buyBtn">장바구니</div>
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
            </article>
            <ProductDetailReview productId={this.state.productDetail.product_id} />
          </section>
          </>
        )}
        {/* <Footer /> */}
      </div>
    )
  }
}
