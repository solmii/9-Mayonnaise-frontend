import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="footerBar">
          <li className="company">
            <span>회사소개</span>
          </li>
          <li className="service">
            <span>서비스이용약관</span>
          </li>
          <li className="ugc">
            <span>UGC이용약관</span>
          </li>
          <li className="personal">
            <span>개인정보처리방침</span>
          </li>
          <li className="beauty">
            <span>뷰티포인트</span>
          </li>
          <li className="sitemap">
            <span>사이트맵</span>
          </li>
          <li className="notice">
            <span>공지사항</span>
          </li>
        </ul>
        <div className="social">
          <img
            className="insta"
            src="https://www.laneige.com/kr/ko/assets/image/sns_instagram_renew.png"
            alt="라네즈"
          />
          <img
            className="facebook"
            src=" https://www.laneige.com/kr/ko/assets/image/sns_facebook_renew.png"
            alt="라네즈"
          />
          <img
            className="youtube"
            src="https://www.laneige.com/kr/ko/assets/image/sns_youtube_renew.png"
            alt="라네즈"
          />
        </div>
        <div className="bottomInfo">
          <p className="first">고객상담실 (수신자요금부담) 080-023-5454</p>
          <p className="second">
            <span className="slash">|</span> 운영시간 : 월-금 09:00 ~ 18:00
          </p>
        </div>
        <p className="third">
          © <strong>AMOREPACIFIC</strong> CORPORATION. ALL RIGHTS RESERVED.
        </p>
        <img
          className="wa"
          src="https://www.laneige.com/kr/ko/assets/image/a/wa-mark.png"
        />
      </div>
    );
  }
}

export default Footer;
