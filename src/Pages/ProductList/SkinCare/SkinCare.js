import React, { Component } from "react";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import "./SkinCare.scss";
class SkinCare extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categoryBox: false,
      offset: 0,
    };
  }

  componentDidMount() {
    fetch(
      `http://10.58.1.117:8000/product?menu_id=3&offset=${this.state.offset}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.product_list }));
  }

  getData = (num) => {
    this.setState({ categoryBox: false });
    fetch(
      `http://10.58.1.117:8000/product?menu_id=3&offset=${this.state.offset}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.product_list }));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.offset !== this.state.offset) {
      this.getData();
      window.scrollTo(0, 0);
    }
  }

  handleClick = (id) => {
    this.props.history.push(`/product_detail/${id}`);
  };

  handlePaging = (e) => {
    this.setState({ offset: (Number(e.target.innerText) - 1) * 16 });
  };

  handleCategory = () => {
    this.setState({ categoryBox: !this.state.categoryBox });
  };

  render() {
    const { products, categoryBox } = this.state;
    console.log(this.state.products);
    return (
      products && (
        <div className="SkinCare">
          {/* <Nav getData={(num) => this.getData(num)} /> */}
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
          <div className="numberOfProducts">스킨케어 58개 상품</div>
          <div
            className={
              categoryBox
                ? "categoryBoxIsOpened show"
                : "categoryBoxIsOpened hide"
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
                    <p onClick={() => this.getData(2)}>스킨/미스트</p>
                    <p onClick={() => this.getData(4)}>세럼/에센스</p>
                    <p onClick={() => this.getData(6)}>마스크/팩</p>
                    <p onClick={() => this.getData(8)}>선케어</p>
                    <p>기프트세트</p>
                  </div>
                  <div className="division">
                    <div className="subDivision">
                      <p onClick={() => this.getData(1)}>클렌징</p>
                      <p onClick={() => this.getData(3)}>로션/에멀젼</p>
                      <p onClick={() => this.getData(5)}>젤/크림</p>
                      <p onClick={() => this.getData(7)}>아이케어</p>
                      <p onClick={() => this.getData(9)}>립케어</p>
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
                    <p onClick={() => this.getData(11)}>수분/보습</p>
                    <p onClick={() => this.getData(13)}>브라이트닝</p>
                    <p onClick={() => this.getData(15)}>피지/모공</p>
                  </div>
                  <div className="subDivision">
                    <p onClick={() => this.getData(10)}>밸런싱</p>
                    <p onClick={() => this.getData(12)}>민감/진정</p>
                    <p onClick={() => this.getData(14)}>안티에이징</p>
                    <p onClick={() => this.getData(16)}>자외선차단</p>
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
                    <p onClick={() => this.getData(18)}>클리어-C</p>
                    <p onClick={() => this.getData(20)}>워터뱅크</p>
                    <p onClick={() => this.getData(22)}>퍼펙트리뉴</p>
                    <p onClick={() => this.getData(24)}>슬리핑케어</p>
                    <p onClick={() => this.getData(26)}>크림 스킨</p>
                    <p>기타</p>
                  </div>
                  <div className="subDivision">
                    <p onClick={() => this.getData(17)}>래디언-C</p>
                    <p onClick={() => this.getData(19)}>베이직케어</p>
                    <p onClick={() => this.getData(21)}>포커스 액티브 앰플</p>
                    <p onClick={() => this.getData(23)}>타임프리즈</p>
                    <p onClick={() => this.getData(25)}>프레시카밍</p>
                    <p onClick={() => this.getData(27)}>화이트듀</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainContentsWhole">
            <div className="subBox">
              {products.map((element) => {
                return (
                  <div
                    className="productBox"
                    onClick={() => this.handleClick(element.product_id)}
                  >
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
            <button onClick={(e) => this.handlePaging(e)}>1</button>
            <button onClick={(e) => this.handlePaging(e)}>2</button>
            <button onClick={(e) => this.handlePaging(e)}>3</button>
            <button onClick={(e) => this.handlePaging(e)}>4</button>
          </div>
        </div>
      )
    );
  }
}

export default SkinCare;
