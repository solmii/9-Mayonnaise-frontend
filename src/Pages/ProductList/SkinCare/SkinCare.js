import React, { Component } from "react";
import "./SkinCare.scss";

class SkinCare extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data_product.json")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.product_list }));
  }

  render() {
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
          <div className="categoryBox">
            <div className="letterCategory">카테고리</div>
            <div className="plusSign">+</div>
          </div>
          <div className="categoryBox">
            <div className="letterCategory">가격순</div>
            <div className="closeSign">v</div>
          </div>
        </div>
        <div className="numberOfProducts">
          스킨케어 {this.state.products.length}개 상품
        </div>
        <div className="categoryBoxIsOpened hide"></div>
        <div className="mainContentsWhole">
          <div className="subBox">
            {this.state.products.map((element) => {
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
