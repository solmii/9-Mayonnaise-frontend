import React, { Component } from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";
class KakaoTalkLogin extends Component {
  responseKaKao = (kakaoUserData) => {
    console.log(JSON.stringify(kakaoUserData));
    // 백엔드 준비된 후에 header에 token 담아서 전달할 예정
  };

  responseFail = (error) => {
    alert(error);
  };

  render() {
    return (
      <>
        <KaKaoBtn
          jsKey={"ac589b2cbbb3df158d003bf15006995d"}
          className="kakaoBtn main-font"
          buttonText="카카오톡으로 로그인 하기"
          onSuccess={this.responseKaKao}
          onFailure={this.responseFail}
          getProfile={true}
        />
      </>
    );
  }
}

export default KakaoTalkLogin;

const KaKaoBtn = styled(KaKaoLogin)`
  position: absolute;
  top: 70%;
  left: 20%;
  max-width: 348.75px;
  padding: 13px 85px;
  font-size: 17px;
  color: white;
  background-color: #2b2b2b;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: #fbc02d;
    transition: all 0.2s ease-in-out;
  }
`;
