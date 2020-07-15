import React, { Component } from "react";
import "./SkinCare.scss";
class SkinCare extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categoryBox: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data_product.json")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.product_list }));
  }

  handleCategory = () => {
    this.setState({ categoryBox: !this.state.categoryBox });
  };

  render() {
    const { products, categoryBox } = this.state;
    return (
      <div className="SkinCare">
        <div className="headerContainer">
          <h1>스킨케어</h1>
        </div>
        <div className="topBox">
          <p>스킨케어 &gt; </p>
          <p> 전체보기</p>
        </div>
        <div className="filterCategoryWrapper">
          <div className="categoryBox" onClick={this.handleCategory}>
            <div className="letterCategory">카테고리</div>
            {categoryBox ? (
              <div className="minusSign">-</div>
            ) : (
              <div className="plusSign">+</div>
            )}
          </div>

          <div className="categoryBox">
            <div className="letterCategory">가격순</div>
            <div className="closeSign">v</div>
          </div>
        </div>
        <div className="numberOfProducts">
          스킨케어 {products.length}개 상품
        </div>
        <div
          className={
            categoryBox
              ? "categoryBoxIsOpened show"
              : "categoryBoxIsOpened  hide"
          }
        >
          <div className="seeAll">전체보기</div>
          <div className="wholeBox">
            <div className="boxInCategoryBox">
              <div className="underline">
                <p>유형별</p>
              </div>
              <div className="division">
                <div className="subDivision">
                  <p>전체보기</p>
                  <p>스킨/미스트</p>
                  <p>세럼/에센스</p>
                  <p>마스크/팩</p>
                  <p>선케어</p>
                  <p>기프트세트</p>
                </div>
                <div className="division">
                  <div className="subDivision">
                    <p>클렌징</p>
                    <p>로션/에멀젼</p>
                    <p>젤/크림</p>
                    <p>아이케어</p>
                    <p>립케어</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="boxInCategoryBox">
              <div className="underline">
                <p>고민별</p>
              </div>
              <div className="division">
                <div className="subDivision">
                  <p>전체보기</p>
                  <p>수분/보습</p>
                  <p>브라이트닝</p>
                  <p>피지/모공</p>
                  <p>수분/보습</p>
                </div>
                <div className="subDivision">
                  <p>밸런싱</p>
                  <p>민감/진정</p>
                  <p>안티에이징</p>
                  <p>자외선차단</p>
                </div>
              </div>
            </div>
            <div className="boxInCategoryBox">
              <div className="underline">
                <p>라인별</p>
              </div>
              <div className="division">
                <div className="subDivision">
                  <p>전체보기</p>
                  <p>클리어-C</p>
                  <p>워터뱅크</p>
                  <p>퍼펙트리뉴</p>
                  <p>슬리핑케어</p>
                  <p>크림 스킨</p>
                  <p>기타</p>
                </div>
                <div className="subDivision">
                  <p>래디언-C</p>
                  <p>베이직케어</p>
                  <p>포커스 액티브 앰플</p>
                  <p>타임프리즈</p>
                  <p>프레시카밍</p>
                  <p>화이트듀</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainContentsWhole">
          <div className="subBox">
            {products.map((element) => {
              return (
                <div className="productBox">
                  <img src={element.product_image} alt="Laneige" />
                  <p>
                    #{element.product_tag[0]} #{element.product_tag[1]}
                  </p>
                  <h1> {element.product_name_ko} </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SkinCare;
