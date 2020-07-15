import React, { Component } from "react";
import "./Homme.scss";

class Homme extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categoryBox: false,
    };
  }

  /*const LIMIT = 16;
  const nextOffset = LIMIT + offset;*/

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
      <div className="Homme">
        <div className="headerContainer">
          <h1>옴므</h1>
        </div>
        <div className="topBox">
          <p>옴므 &gt; </p>
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
        <div className="numberOfProducts">옴므 {products.length}개 상품</div>
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
                  <p>크림</p>
                  <p>BB</p>
                </div>
                <div className="division">
                  <div className="subDivision">
                    <p>클렌징</p>
                    <p>로션/에멀젼</p>
                    <p>선케어</p>
                    <p>기프트세트</p>
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
                  <p>피지/모공</p>
                  <p>자외선차단</p>
                </div>
                <div className="subDivision">
                  <p>수분/보습</p>
                  <p>주름/탄력/보습</p>
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
                  <p>블루에너지</p>
                  <p>크림스킨</p>
                </div>
                <div className="subDivision">
                  <p>액티브워터</p>
                  <p>오일컨트롤</p>
                  <p>기타</p>
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

export default Homme;
