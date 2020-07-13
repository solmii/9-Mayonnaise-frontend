import React, { Component } from "react";
import "./PartnerProfile.scss";

// 랜덤데이터
const keyword = 
//  "정제수, 소듐메칠코코일타우레이트, 아크릴레이트코폴리머, 포타슘코코일글리시네이트, 
// 프로판디올, 코코-글루코사이드, 글리세린, 코카미도프로필베타인, 티타늄디옥사이드 (CI 77891),
//  삼백초추출물, 라피노오스, 판테놀, 트레할로스, 효모추출물, 디소듐이디티에이, 부틸렌글라이콜, 
//  포타슘하이드록사이드, 폴리쿼터늄-7, 피이지-14M, 글리세릴카프릴레이트, 에칠헥실글리세린, 
//  카프릴릴/카프릴글루코사이드, 소듐벤조에이트, 향료, 리날룰, 리모넨"


export default class ProductDetailSourceData extends Component {
  //   changePointClassName = (num) => {
  //     let starNum = this.props.review_score - num;
  //     if (starNum >= 0) {
  //       return "star-point full";
  //     } else if (-1 < starNum && starNum < -0.5) {
  //       return "star-point";
  //     } else if (-0.5 <= starNum && starNum < 0) {
  //       return "star-point half";
  //     } else if (starNum - num <= -1) {
  //       return "star-point";
  //     }
  //   };

  render() {
    const { everySource } = this.props;
    // console.log(everySource);
    return (
        <div className="Source">
        <div className="underline" />
        <div className="refund_info_title p-a">
          <div className="SourceBtn">
            <p>전성분</p>
            <button
              className={moreBtn ? "btn_plus" : "btn_minus"}
              type="button"
              onClick={this.moreBtnClickHandler}
            >
              {moreBtn ? "+" : "_"}
            </button>
          </div>
        </div>

        {moreBtn ? (
          <section className="refund_info_list">
            <div className="exchange_guide">
              <ul className="gray-20-font info-list-style">
                <li>
                 <p className="sourceText">{sourceCode}</p>
                </li>
              </ul>
            </div>
          </section>
        ) : (
          ""
        )}
          <div className="review-cate">
            <h5>{program[Math.floor(Math.random() * program.length)]}</h5>
            <ul>
              <li>{keyword[Math.floor(Math.random() * 6) + 0]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 6]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 12]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 18]}</li>
              <li>{keyword[Math.floor(Math.random() * 5) + 24]}</li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}
