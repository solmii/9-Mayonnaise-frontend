import React, { Component } from "react";
import "./ProductDetailSource.scss";
export default class ProductDetailSource extends Component {
  constructor() {
    super();
    this.state = {
      moreBtn: false,
      htmlBody: {},
      product_ingredient: [],
    };
  }

  // 리뷰 펼쳐보기/접기 버튼 클릭시 마다 moreBtn 상태 변경
  moreBtnClickHandler = () => {
    this.setState({
      moreBtn: !this.state.moreBtn,
    });
  };

  render() {
    return (
      <body>
        <nav class="accordion arrows">
          <input type="radio" name="accordion" id="cb1" />
          <section class="box">
            <label class="box-title" for="cb1">
              주의사항
            </label>
            <label class="box-close" for="acc-close"></label>
            <div class="box-content">
              1 화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은
              반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우
              전문
              <br />의 등과 상담할 것<br />
              <br />
              2 상처가 있는 부위 등에는 사용을 자제할 것<br />
              <br />
              3 보관 및 취급 시의 주의사항
              <br />
              가 어린이의 손이 닿지 않는 곳에 보관할 것<br />
              나 직사광선을 피해서 보관할 것 <br />
              <br />
              4) 제형의 특성상 미세성분이 보일
              <br />수 있으나 제품에 이상이 있는 것이 아니니 안심하고 사용하셔도
              됩니다.
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section class="box">
            <label class="box-title" for="cb2">
              전성분
            </label>
            <label class="box-close" for="acc-close"></label>
            <div class="box-content">
              <p className="name">{this.state.htmlBody.product_ingredient}</p>
              정제수, 프로판다이올, 1,2-헥산다이올,
              피피지-13-데실테트라데세스-24, 부틸렌글라이콜, 에틸헥실글리세린,
              나이아신아마이드, 향료, 다이소 듐이디 티에이, 마그네슘설페이트,
              칼슘클로라이드, 에칠아스코빌에텔, 코튼추출물,
              부틸페닐메틸프로피오날, 리모넨, 망가니즈설페이트, 시트로 넬올,
              퀴노아씨 추출물, 징크설페이트, 토코페롤, 아스코빌글루코사이드,
              마그네슘설페이트, 망가니즈설페이트, 칼슘클로라이드,
              포타슘알지네이트, 암모늄아크릴로일디메칠타우레이트/브이피코폴리머,
              폴리소르베이트20, 디메치콘, 디메치콘올,
              디메치콘/비닐디메치콘크로스폴리머, 프로판디올, 에칠헥실글리세린
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </body>
    );
  }
}
