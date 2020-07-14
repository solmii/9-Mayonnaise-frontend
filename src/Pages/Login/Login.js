import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import KakaoTalkLogin from "./KakaoTalkLogin";
import styled from "styled-components";
import { SIGN_API, LOGIN_BG_LG, WARNING_ICON } from "config";

const Login = () => {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const { id, password } = loginData;

  const handelChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (id.length > 3 && password.length > 5) {
      fetch(`${SIGN_API}/sign-in`, {
        method: "post",
        headers: {},
        body: JSON.stringify({
          password: id,
          user_email: password,
        }),
      })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            alert("로그인에 성공했습니다.");
          }
          return res.json();
        })
        .then((res) => {
          if (res.access_token) {
            localStorage.setItem("access_token", res.access_token);
          }
        });
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <LoginSection className="Login">
      <LoginHeader>
        <div className="LoginHeader">
          <LoginDescription titleFont>로그인</LoginDescription>
          <LoginDescription className="gray">
            라네즈는 아모레퍼시픽 통합멤버십(뷰티포인트)
          </LoginDescription>
          <LoginDescription className="gray">
            회원 계정으로 함께 이용이 가능합니다.
          </LoginDescription>
        </div>
        <div className="LoginLink">
          <LoginListUl>
            <li>
              <Link to="/signup">회원 가입하기</Link>
            </li>
            <ListBefore />
            <li>아이디 찾기</li>
            <ListBefore />
            <li>비밀번호 찾기</li>
          </LoginListUl>
        </div>
      </LoginHeader>
      <LoginForm>
        <div className="loginInput">
          <input
            type="text"
            name="id"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={handelChangeInput}
          />
          <WarningText>
            {id.length < 4 && <img alt="warning_icon" src={WARNING_ICON} />}
            {id.length === 0
              ? "아이디를 입력해주세요"
              : id.length < 4
              ? "아이디는 4글자 이상입니다."
              : ""}
          </WarningText>
        </div>
        <div className="loginInput">
          <input
            type="text"
            name="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={handelChangeInput}
            onKeyPress={handleEnterPress}
          />
          <WarningText>
            {password.length < 6 && (
              <img alt="warning_icon" src={WARNING_ICON} />
            )}
            {password.length === 0
              ? "비밀번호를 입력해주세요"
              : password.length < 6
              ? "비밀번호는 6글자 이상입니다."
              : ""}
          </WarningText>
        </div>
        <button className="submitBtn mainFont" onClick={() => handleSubmit()}>
          로그인 하기
        </button>
        <KakaoTalkLogin />
      </LoginForm>
    </LoginSection>
  );
};

export default withRouter(Login);

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 650px;
  margin-top: 60px;
  background-image: url(${LOGIN_BG_LG});
  background-size: 110vw;
  background-position: -50px -60px;
`;

const LoginHeader = styled.div`
  margin-right: 10%;

  .LoginLink {
    li {
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        transition: all 0.4s ease-in-out;
      }
    }
  }
`;

const LoginDescription = styled.h1`
  margin-bottom: ${(props) => (props.titleFont ? "60px" : "5px")};
  font-size: ${(props) => (props.titleFont ? "40px" : "16px")};
`;

const LoginListUl = styled.ul`
  display: flex;
  margin-top: 120px;
`;

const ListBefore = styled.span`
  width: 1px;
  height: 10px;
  margin: 3px 15px 0 15px;
  font-size: 10px;
  background-color: black;
`;

const LoginForm = styled.div`
  position: relative;
  min-width: 580px;
  max-height: 430px;
  padding: 80px 90px;
  background-color: rgba(255, 255, 255, 0.9);

  .loginInput {
    position: absolute;
    width: 400px;

    &:nth-child(2) {
      top: 36%;
    }

    input {
      display: block;
      width: 100%;
      margin-bottom: 6px;
      padding: 10px;
      border-bottom: 1px solid rgba(95, 95, 95, 0.4);
      font-size: 1em;
      background: none;
      outline: none;

      ::placeholder {
        color: #929292;
      }

      &:focus {
        border-bottom: 2px solid #4477be;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  .submitBtn {
    position: absolute;
    top: 57%;
    left: 20%;
    padding: 13px 134px;
    font-size: 17px;
    color: white;
    background-color: #2b2b2b;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: white;
      background-color: #4477be;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const WarningText = styled.p`
  font-size: 14px;
  color: #b30b0b;

  img {
    width: 13px;
    margin-right: 5px;
  }
`;
