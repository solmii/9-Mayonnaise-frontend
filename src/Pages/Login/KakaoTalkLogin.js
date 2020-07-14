import React, { Component } from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";
class KakaoTalkLogin extends Component {
  responseKaKao = (kakaoUserData) => {
    fetch("http://10.58.1.117:8000/account/kakao-login", {
      method: "post",
      headers: {
        Authorization: kakaoUserData.response.access_token,
      },
      body: {},
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert("카카오톡 로그인이 성공했습니다.");
          // this.props.history.push("/");
        }
        return res.json();
      })
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("access_token", res.access_token);
        }
      });
  };

  responseFail = (error) => {
    alert(error);
  };

  render() {
    return (
      <>
        <KaKaoBtn
          jsKey={"ac589b2cbbb3df158d003bf15006995d"}
          className="kakaoBtn mainFont"
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
