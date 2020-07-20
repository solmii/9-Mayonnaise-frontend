import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { isId, isPassword } from "./RegisterTest";
import { SIGN_API } from "config";
import "./SignUp.scss";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    birthDate: "",
    gender: "",
    phoneNumber: "",
    id: "",
    password: "",
    passwordCheck: "",
  });

  const [isValId, setIsValId] = useState({
    idValidation: false,
    idError: "아이디는 4~12자 영문, 숫자, 특수문자를 포함하여 입력해주세요.",
  });
  const { idValidation, idError } = isValId;

  const [isValPw, setIsValPw] = useState({
    pwValidation: false,
    pwError:
      "비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함하여 6-16자로 입력해주세요.",
  });
  const { pwValidation, pwError } = isValPw;

  const [isPwCheck, setIsPwCheck] = useState({
    pwCheck: false,
    pwCheckError: "비밀번호 확인을 입력하세요.",
  });
  const { pwCheck, pwCheckError } = isPwCheck;

  const [checks, setChecks] = useState({
    clauseAll: false,
    clause1: false,
    clause2: false,
    clause3: false,
    clause4: false,
    clause5: false,
    clause6: false,
  });
  const {
    clauseAll,
    clause1,
    clause2,
    clause3,
    clause4,
    clause5,
    clause6,
  } = checks;

  const handelChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // 약관 동의 체크하는 함수
  const handelClickClause = (e) => {
    const checkKey = Object.keys(checks);
    if (e.target.name === "clauseAll") {
      if (!clauseAll) {
        let tempObj = {};
        for (let i in checkKey) {
          tempObj = {
            ...tempObj,
            [checkKey[i]]: true,
          };
        }
        setChecks(tempObj);
      } else {
        let tempObj = {};
        for (let i in checkKey) {
          tempObj = {
            ...tempObj,
            [checkKey[i]]: false,
          };
        }
        setChecks(tempObj);
      }
    } else {
      setChecks({
        ...checks,
        [e.target.name]: !checks[e.target.name],
      });
    }
  };

  // id, password validation
  useEffect(() => {
    if (isId(userData.id)) {
      setIsValId({
        idValidation: true,
        idError: "등록 가능한 아이디 입니다.",
      });
    } else if (userData.id) {
      setIsValId({
        idValidation: false,
        idError: "사용할 수 없는 아이디 입니다.",
      });
    } else {
      setIsValId({
        idError:
          "아이디는 4~12자 영문, 숫자, 특수문자를 포함하여 입력해주세요.",
      });
    }

    if (isPassword(userData.password)) {
      setIsValPw({
        pwValidation: true,
        pwError: "등록 가능한 비밀번호 입니다.",
      });
    } else if (userData.password) {
      setIsValPw({
        pwValidation: false,
        pwError: "사용 할 수 없는 비밀번호 입니다.",
      });
    } else {
      setIsValPw({
        pwError:
          "비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함하여 6-16자로 입력해주세요.",
      });
    }

    if (userData.password !== userData.passwordCheck) {
      setIsPwCheck({
        pwCheck: false,
        pwCheckError: "비밀번호 확인을 입력하세요.",
      });
    } else {
      setIsPwCheck({
        pwCheck: true,
        pwCheckError: "",
      });
    }
  }, [idError, pwError, userData]);

  const onSubmit = (data) => {
    if (idValidation && pwValidation) {
      clauseAll || (clause1 && clause2)
        ? fetch(`${SIGN_API}/sign-up`, {
            method: "POST",
            headers: {},
            body: JSON.stringify({
              name: data.name,
              password: data.password,
              birthdate: data.birthDate,
              gender: data.gender,
              phone_number: data.phoneNumber,
              user_email: data.id,
            }),
          }).then((res) => {
            if (res.status === 200 || res.status === 201) {
              alert("회원가입이 완료되었습니다.");
            }
          })
        : alert("필수 동의 항목에 동의해 주세요");
    } else {
      alert("회원 정보를 입력해주세요.");
    }
  };

  return (
    <section className="SignUp">
      <header>
        뷰티포인트 X <span>라네즈</span> 회원가입
      </header>

      <div className="signUpTitleForm">
        <h1>뷰티포인트 통합멤버십 회원가입을 환영합니다!</h1>
        <p>
          아모레퍼시픽 통합멤버십(뷰티포인트)에 가입하시면 <span>라네즈</span>{" "}
          외 모든 브랜드 온/오프 매장에서 상품을 구매 할 때마다 현금처럼 사용할
          수 있는 포인트 적립과 사용 등 다양한 혜택을 받으실 수 있습니다.
        </p>
      </div>

      <div className="signUpInputForm">
        <input
          className="userInput"
          onChange={handelChangeInput}
          name="name"
          placeholder="이름(실명으로 입력해주세요)"
        />

        <div className="genderRadioForm">
          <input
            className="userInput"
            onChange={handelChangeInput}
            name="birthDate"
            placeholder="생년월일8자리(ex.19980905)"
          />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handelChangeInput}
            />
            <span>남자</span>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handelChangeInput}
            />
            <span>여자</span>
          </label>
        </div>

        <div className="phoneNumberForm">
          <select>
            <option value>통신사 선택</option>
            <option value="SKT">SKT</option>
            <option value="KT">KT</option>
            <option value="LG U+">LG U+</option>
            <option value="SKT 알뜰폰">SKT 알뜰폰</option>
            <option value="KT 알뜰폰">KT 알뜰폰</option>
            <option value="LG U+ 알뜰폰">LG U+ 알뜰폰</option>
          </select>

          <input
            className="userInput"
            onChange={handelChangeInput}
            name="phoneNumber"
            placeholder="전화번호 입력"
          />
        </div>

        <Error validation={idValidation}>
          {idError || (idValidation === true && idError)}
        </Error>
        <Input
          onChange={handelChangeInput}
          name="id"
          placeholder="아이디 (4~12자 영문, 숫자, 특수문자)"
          validation={idValidation}
        />

        <div className="radioBtn">
          <label>
            <input type="radio" name="password" value="pw_on" />
            <span>비밀번호 직접입력</span>
          </label>
          <label>
            <input type="radio" name="password" value="pw_off" />
            <span>비밀번호 자동발급</span>
          </label>
        </div>

        <Error validation={pwValidation}>
          {pwError || (pwValidation === true && pwError)}
        </Error>
        <Input
          type="password"
          onChange={handelChangeInput}
          name="password"
          placeholder="비밀번호는 6~16자 영문 대소문자, 숫자, 특수문자를 모두 포함하여 입력해주세요"
          validation={pwValidation}
        />
        <Error validation={pwCheck}>
          {pwCheckError || (pwCheck === true && pwCheckError)}
        </Error>
        <Input
          type="password"
          onChange={handelChangeInput}
          name="passwordCheck"
          placeholder="비밀번호 확인"
          validation={pwCheck}
        />

        <div className="clausContainer">
          <div className="allAgreeBtn">
            <CheckInput
              type="checkbox"
              name="clauseAll"
              checked={clauseAll}
              onChange={handelClickClause}
            />
            <span>모든 약관 동의</span>
            <button type="button">⌵</button>
          </div>
          <div className="clauseForm">
            <div className="agreeText">
              아래 모든 약관 (필수/선택 포함) 및 광고성 정보수신 동의 내용을
              확인하고 전체 동의합니다. ※ 선택 항목에 대한 동의를 거부하더라도
              회원가입에 영향을 미치지 않습니다.
            </div>

            <h3>아모레퍼시픽 통합 멤버십 뷰티포인트 회원약관</h3>
            <ul>
              <li className="checkBtn">
                <CheckInput
                  type="checkbox"
                  name="clause1"
                  checked={clause1}
                  onChange={handelClickClause}
                />
                <span>[필수] 뷰티포인트 서비스 이용약관</span>
                <button type="button">〉</button>
              </li>
              <li className="checkBtn">
                <CheckInput
                  type="checkbox"
                  name="clause2"
                  checked={clause2}
                  onChange={handelClickClause}
                />
                <span>[필수] 개인정보 이용 및 수집에 대한 동의</span>
                <button type="button">〉</button>
              </li>
              <li className="checkBtn">
                <CheckInput
                  type="checkbox"
                  name="clause3"
                  checked={clause3}
                  onChange={handelClickClause}
                />
                <span>[선택] 개인정보 제3자 제공 동의</span>
                <button type="button">〉</button>
                <span className="clausDescription">
                  ※ 외부 컨텐츠 마케팅 활용
                </span>
              </li>
              <li className="checkBtn">
                <CheckInput
                  type="checkbox"
                  name="clause4"
                  checked={clause4}
                  onChange={handelClickClause}
                />
                <span>[선택] 국외이전동의</span>
                <button type="button">〉</button>
              </li>
            </ul>

            <h3>
              광고성 정보 수신 동의
              <span className="clausDescription2">
                쇼핑 혜택, 이벤트 소식을 받아보세요
              </span>
            </h3>
            <ul>
              <li className="checkBtn">
                <CheckInput
                  type="checkbox"
                  name="clause5"
                  checked={clause5}
                  onChange={handelClickClause}
                />
                <span>[선택] 뷰티포인트 문자 수신 동의</span>
              </li>
              <li className="checkBtn">
                <CheckInput
                  type="checkbox"
                  name="clause6"
                  checked={clause6}
                  onChange={handelClickClause}
                />
                <span>[선택] 온라인 사이트 문자 수신 동의</span>
              </li>
            </ul>

            <h3>개인정보 처리 위탁에 대한 안내</h3>
            <div className="agreeText">
              ※ 아모레퍼시픽은 서비스 향상 및 원활한 전산 처리 등을 위하여
              이용자의 개인정보 관리를 외부 전문업체에 위탁하고 있습니다.
              아모레퍼시픽의 업무를 위탁받는 자 및 업무의 내용은 아모레퍼시픽
              홈페이지{" "}
              <a href="https://www.beautypoint.co.kr/footer/privacy.do">
                https://www.beautypoint.co.kr/footer/pri vacy/
                <br />
                personal.html
              </a>{" "}
              에서 확인 하실 수 있습니다.
            </div>
          </div>
        </div>

        <button className="signupSubmitBtn" onClick={() => onSubmit(userData)}>
          본인인증 및 회원가입
        </button>
        <button className="foreignRegistration">외국인 회원가입 〉</button>
      </div>
    </section>
  );
};

export default withRouter(SignUp);

const CheckInput = styled.input`
  background-image: url({CHECKED_ICON});
`;

const Error = styled.label`
  padding-left: 12px;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => (props.validation ? "green" : "red")};
`;

const Input = styled.input`
  margin: 6px 10px;
  padding: 18px 15px 17px;
  border: 1px solid;
  border-color: ${(props) => (props.validation ? "#dadada" : "red")};
  font-size: 16px;
  color: #929292;

  &:focus {
    outline: none;
    border: 1px solid #b5b5b5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  }
`;
