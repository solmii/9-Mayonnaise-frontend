import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="footerBar">
          <li>
            <span>회사소개</span>
          </li>
          <li>
            <span>서비스이용약관</span>
          </li>
          <li>
            <span>UGC이용약관</span>
          </li>
          <li>
            <span>개인정보처리방침</span>
          </li>
          <li>
            <span>뷰티포인트</span>
          </li>
          <li>
            <span>사이트맵</span>
          </li>
          <li>
            <span>공지사항</span>
          </li>
        </ul>
        <div className="bottomInfo">
          <p>고객상담실 (수신자요금부담) 080-023-5454</p>
          <p>
            <span>|</span> 운영시간 : 월-금 09:00 ~ 18:00
          </p>
          <img
            className="wa"
            src="https://www.laneige.com/kr/ko/assets/image/a/wa-mark.png"
          />
          <div className="social">
            <img
              src="https://www.laneige.com/kr/ko/assets/image/sns_instagram_renew.png"
              alt="라네즈"
            />
            <img
              src=" https://www.laneige.com/kr/ko/assets/image/sns_facebook_renew.png"
              alt="라네즈"
            />
            <img
              src="https://www.laneige.com/kr/ko/assets/image/sns_youtube_renew.png"
              alt="라네즈"
            />
          </div>
        </div>

        <p className="third">
          © <strong>AMOREPACIFIC</strong> CORPORATION. ALL RIGHTS RESERVED.
        </p>
      </div>
    );
  }
}

export default Footer;
