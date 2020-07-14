import React, { Component } from "react";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import "./Homme.scss";

class Homme extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categoryBox: false,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.1.117:8000/product?menu_id=4`)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.product_list }));
  }

  getData = (num) => {
    this.setState({ categoryBox: false });
    fetch(`http://10.58.1.117:8000/product?menu_id=4&type_id=${num}`)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.product_list }));
  };

  handleClick = () => {
    this.props.history.push(`/product?menu_id=${this.state.products.id}`);
  };

  handleCategory = () => {
    this.setState({ categoryBox: !this.state.categoryBox });
  };

  render() {
    const { products, categoryBox } = this.state;
    return (
      <div className="Homme">
        <Nav />
        <div className="headerContainer">
          <h1>옴므</h1>
        </div>
        <div className="topBox">
          <p>옴므 &gt; </p>
          <p onClick={() => this.getData()}> 전체보기</p>
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
          <div className="seeAll" onClick={() => this.getData()}>
            전체보기
          </div>
          <div className="wholeBox">
            <div className="boxInCategoryBox">
              <div className="underline">
                <p>유형별</p>
              </div>
              <div className="division">
                <div className="subDivision">
                  <p>전체보기</p>
                  <p onClick={() => this.getData(2)}>스킨/미스트</p>
                  <p onClick={() => this.getData(28)}>크림</p>
                  <p onClick={() => this.getData(29)}>BB</p>
                </div>
                <div className="division">
                  <div className="subDivision">
                    <p onClick={() => this.getData(1)}>클렌징</p>
                    <p onClick={() => this.getData(3)}>로션/에멀젼</p>
                    <p onClick={() => this.getData(8)}>선케어</p>
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
                  <p onClick={() => this.getData(15)}>피지/모공</p>
                  <p onClick={() => this.getData(16)}>자외선차단</p>
                </div>
                <div className="subDivision">
                  <p onClick={() => this.getData(11)}>수분/보습</p>
                  <p onClick={() => this.getData(30)}>주름/탄력/보습</p>
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
                  <p onClick={() => this.getData(32)}>블루에너지</p>
                  <p onClick={() => this.getData(26)}>크림스킨</p>
                </div>
                <div className="subDivision">
                  <p onClick={() => this.getData(31)}>액티브워터</p>
                  <p onClick={() => this.getData(33)}>오일컨트롤</p>
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
                <div className="productBox" onClick={this.handleClick}>
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
        <div className="paginationBox">
          <button>1</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homme;
