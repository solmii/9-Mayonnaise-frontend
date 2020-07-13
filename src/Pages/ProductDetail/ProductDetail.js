import React, { Component } from "react";
import ModalBtn from "./ModalBtn";
import ProductDetailReview from "./ProductDetailReview";
import "./ProductDetail.scss";

export default class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      productData: {},
      productImg: [],
      htmlBody: [],
      hashtag: [],
      productName: [],
      productSubName: [],
      productComment: [],
      productVolume: [],
      productPrice: [],
      clickHandlerId: "",
      subId: 0,
      subIdNum: 0,
      reviewArr: [],
      product_detail: [],
    };
  }

  // componentDidMount() {
  //   fetch("http://10.58.7.35:8000/product/detail?product_id=1")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }
  // htmlBody data 받아오기
  componentDidMount() {
    // const id = this.props.match.params.pid;
    fetch("http://10.58.7.99:8000/product/detail?product_id=1")
      .then((res) => res.json())
      .then((res) => console.log(res));
    // .then((res) => this.setState({ htmlBody: res.item.product_feature }));
  }
  // htmlBody: res,
  // [this.state.htmlBody[0].product_name]; //백엔드로부터 받아오는 html.body의 첫번째는 프로덕트 네임이다

  // shouldComponentUpdate(nextProps, nextState) {
  //   const top = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
  //   top < 0 && this.setState({ a: "b" });
  //   return true;
  // }

  // onScroll = (e) => {
  //   console.log(window.pageYOffset);
  // };

  // // this.state.htmlBody.length !== 0 && this.state.htmlBody.product_id// htmlbody에 아무것도 없지 않고 그것이 product_id일때
  // // this.state.htmlBody.length !== 0 && this.state.htmlBody.color

  // clickHandler(num) {
  //   this.setState({ subIdNum: num });
  // }
  // //장바구니 버튼 클릭 시 상품 정보 POST로 서버에 전송
  // cartHandler = () => {
  //   fetch(`${API_URL_HG}/cart/order`, {
  //     method: "POST",
  //     headers: {
  //       Authorization:
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.aSotmF-u-BxCD-U_jbFTRpZf6P-AHDKRhBynD-21DvA",
  //     },
  //     body: JSON.stringify({
  //       product_id: this.state.htmlBody.product_id,
  //       color: this.state.htmlBody.color[this.state.subIdNum],
  //       quantity: 1,
  //     }),
  //   });
  // };this.state.htmlBody

  render() {
    console.log("dddddd: ", this.state.htmlBody);
    // const { htmlBody } = this.state;
    const { htmlBody } = this.state.htmlBody;
    // const htmlCode = this.state.htmlBody.length !== 0 && Description;
    // const teaser = this.state.htmlBody.length !== 0 && Teaser;
    // const stage = this.state.htmlBody.length !== 0 && Stage;

    return (
      <div className="Product">
        {/* <Header /> */}
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
                    {/* {this.state.htmlBody.length !== 0 && //메인사진 옆에 클릭되는 사진
                      this.state.htmlBody.sub[this.state.subIdNum]} */}
                  </p>
                  <div className="subImgContainer">
                    <img
                      onClick={() => this.clickHandler(0)}
                      className="subImg"
                      // src={
                      //   this.state.htmlBody.length !== 0 &&
                      //   this.state.htmlBody.product_image[0] //서브이미지에서 첫번째꺼 클릭하면 메인의 사진이 바뀐다
                      // }
                      alt=""
                    />
                    <img
                      onClick={() => this.clickHandler(1)}
                      className="subImg"
                      // src={
                      //   this.state.htmlBody.length !== 0 &&
                      //   this.state.htmlBody.product_image[1]
                      // }
                      alt=""
                    />
                    <img
                      // onClick={() => this.clickHandler(2)}
                      className="subImg"
                      // src={
                      //   this.state.htmlBody.length !== 0 &&
                      //   this.state.htmlBody.product_image[2]
                      // }
                      alt=""
                    />
                  </div>
                </div>
                <div className="productImgContainer">
                  <img
                    className="productImg"
                    // src={
                    //   this.state.htmlBody.length !== 0 &&
                    //   this.state.htmlBody.product_images[
                    //     `sub${this.state.subIdNum + 1}` //서브이미지가 클릭될 때마다 여기가 변해야함
                    //   ] //메인사진, htmlbody에 어떤것이 있고 htmlbody의 product_images일때 컬러가 coloridnum+1씩 해준다
                    // } //궁금한게 같이 넘어오는 사진인데 state.이름만 다르게 해서 각각 받을 수 있는지 궁금함 아니면 너무 헷갈린다..
                    alt=""
                  />
                </div>
                <div className="productInfo">
                  <div className="productInfoBox">
                    <p className="hashtag">
                      <span className="hashtag-1">#브라이트닝</span>{" "}
                      <span className="sking">#맑고투명한피부</span>
                      {/* {this.state.htmlBody.product_hashtag} */}
                    </p>
                    <p className="name">
                      제품이름
                      {/* {this.state.htmlBody.product_name}제품이름 */}
                    </p>
                    <p className="productInfoSubname">
                      제품 서브네임
                      {/* {this.state.htmlBody.product_subname} */}
                    </p>
                    <p className="discription">
                      밀키 텍스처가 피부에 순하게 작용해 촉촉하고 뽀얀 우윳빛
                      <br />
                      피부로 가꿔줄 클렌징 폼이에요.
                      {/* {this.state.htmlBody.product_description} */}
                    </p>
                    <div className="totalPrice">
                      <p className="volume">
                        30ml
                        {/* {this.state.htmlBody.product_volume} */}
                      </p>
                      <p className="price">
                        23000원
                        {/* {this.state.htmlBody.product_price}3000원 */}
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
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
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
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
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
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
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
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
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
            <div dangerouslySetInnerHTML={{ __html: htmlBody }}></div>
            {/* <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
            <div dangerouslySetInnerHTML={{ __html: stage }}></div> */}
          </article>
          <ProductDetailReview />
        </section>
        {/* <Footer /> */}
      </div>
    );
  }
}
