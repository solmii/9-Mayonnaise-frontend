import React, { Component } from "react";

import "./ProductDetail.scss";

export default class ProductDetailCard extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      source: [],
    };
  }

  // 클릭 시 리뷰창이 펼쳐지고 닫히는 이벤트
  openReviewHandler = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { isActive } = this.state;
    // const { data } = this.props;

    return (
      <div className="ReviewBoard">
        <div className="review_board_top">
          {/* {<img alt="guest_icon" src={GUEST_ICON}></img> */}
          <div className="review_board_bottom">
            <span className="rating_star">
              {/* {"★".repeat(data.rating)} */}
              별점
            </span>
            아이디{/* 아이디 <p className="font-b">아이디{data.name}</p> */}
          </div>
          피부타입 {/* <p className="font-b">피부타입{data.skinData}</p> */}
          날짜{/* <p className="font-b">날짜{data.yyyymmdd}</p> */}
          코멘트{" "}
          {/* <p className="font-b">코멘트{data.comment}</p>
        </div>{" "} */}
          {/* {isActive && data.img ? (
          <div className="review_img">
            <img alt={data.title} src={data.img} />
          </div>
        ) : (
          ""
        )} */}
          <button className="underline font-b" onClick={this.openReviewHandler}>
            {isActive ? "더보기" : ""}
          </button>
        </div>
      </div>
    );
  }
}
