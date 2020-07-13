import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FlagshipReservation = () => {
  const [uploadReservationData, setUploadReservationData] = useState(false);

  const [reservationInfo, setReservationInfo] = useState({
    reservationStore: "명동점",
    reservationDate: "2020-07-14",
    reservationTime: "10:30 AM",
    userName: "",
    userPhoneNum: "",
    userGender: "",
    userAge: "15~19세",
  });

  const {
    reservationStore,
    reservationDate,
    reservationTime,
    userName,
    userPhoneNum,
    userGender,
  } = reservationInfo;

  useEffect(() => {
    fetch("http://localhost:3000/data/reservationData.json")
      .then((res) => res.json())
      .then((res) => setReservationInfo(res.reservationUser));
  }, []);

  const handleReservationInfo = (e) => {
    const { name, value } = e.target;
    setReservationInfo({
      ...reservationInfo,
      [name]: value,
    });
  };

  const handleReviewSubmit = () => {
    console.log(reservationInfo);
    setUploadReservationData(true);
    // 예약 정보 백한테 전송+headers에 유저 token 담아서 -> 응답으로 예약번호 받아야 함
    // fetch("api 주소")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.status === 200 || res.status === 201) {
    //       setUploadReservationData(true);
    //     }
    //   });
  };

  return uploadReservationData ? (
    <ReservationSection>
      <TableTitle>
        <p>서비스 예약이 완료되었습니다.</p>
      </TableTitle>
      <div>
        <table className="confirmForm">
          <tbody>
            <tr>
              <th>
                <p>예약 서비스</p>
                <span>Service</span>
              </th>
              <td>마이 딜리셔스 테라피</td>
            </tr>

            <tr>
              <th>
                <p>예약 매장</p>
                <span>Reservation Store </span>
              </th>
              <td>{reservationStore}</td>
            </tr>

            <tr>
              <th>
                <p>예약 일자</p>
                <span>Reservation Date</span>
              </th>
              <td>{reservationDate}</td>
            </tr>

            <tr>
              <th>
                <p>예약 시간</p>
                <span>Reservation Time</span>
              </th>
              <td>{reservationTime}</td>
            </tr>

            <tr>
              <th>
                <p>예약자</p>
                <span>Name / Phone</span>
              </th>
              <td>
                {userName} / {userPhoneNum}
              </td>
            </tr>

            <tr>
              <th>
                <p>동반인</p>
                <span>Companion’s Info </span>
              </th>
              <td>- / -</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="attentionForm">
        <h2>주의사항</h2>
        <div>
          <ul>
            <li>
              예약 접수 결과와 함께 ‘예약번호’가 휴대폰 SMS로 자동 발신됩니다.
            </li>
            <li>
              서비스 이용 시 매장에 방문하셔서 예약 완료 문자를 보여주세요.
            </li>
            <li>예약 확인은 Reservation(예약확인) 페이지에서 가능합니다.</li>
            <li>
              실제 신청 인원 및 스케줄에 따라 원하는 날짜와 시간에 신청이
              가능하지 않을 수도 있으며, 이 경우 별도 유선 연락을 드립니다.
            </li>
            <li>
              예약 취소는 온라인에서 하루 전까지 가능합니다.(예약 문의 전화 :
              플래그십 스토어 명동점 02-752-0214)
            </li>

            <li>
              Along with confirmation,‘reservation number’will be sent to your
              phone number as SMS message.
            </li>
            <li>
              You must show the confirmation message in store to use service.
            </li>
            <li>
              You can confirm your reservation at ‘Reservation’. (Put
              confirmation number)
            </li>
            <li>
              You might not be able to reserve the time and date you want
              depending on the number of people who made reservation. In that
              case, we will contact you by phone.
            </li>
            <li>
              You can cancel the reservation online until the day before your
              reservation. (Telephone inquiry for reservation : Flagship Store
              Myeongdong 02-752-0214)
            </li>
          </ul>
        </div>
      </div>

      <div>
        <SubmitBtn
          confirm
          className="mainFont"
          onClick={() => setUploadReservationData(false)}
        >
          확인
        </SubmitBtn>
      </div>
    </ReservationSection>
  ) : (
    <ReservationSection>
      <TableTitle>
        <h3 className="brandFont">STEP. 1</h3>
        <div className="titleBg" />
        <p>예약 일시를 선택해주세요.</p>
      </TableTitle>
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                <p>예약 서비스</p>
                <span>Service</span>
              </th>
              <td>마이 딜리셔스 테라피</td>
            </tr>

            <tr>
              <th>
                <p>예약 매장</p>
                <span>Reservation Store</span>
              </th>
              <td>
                <SelectBox
                  name="reservationStore"
                  value={reservationStore}
                  onChange={handleReservationInfo}
                >
                  <option value="라네즈 플래그십 스토어 명동점">
                    라네즈 플래그십 스토어 명동점
                  </option>
                  <option value="라네즈 로드샵 이대점">
                    라네즈 로드샵 이대점
                  </option>
                  <option value="라네즈 로드샵 가로수길점">
                    라네즈 로드샵 가로수길점
                  </option>
                </SelectBox>
              </td>
            </tr>

            <tr>
              <th>
                <p>예약 일자</p>
                <span>Reservation Date</span>
              </th>
              <td>
                <ReservationInput
                  type="date"
                  max="9999-12-31"
                  name="reservationDate"
                  value={reservationDate}
                  onChange={handleReservationInfo}
                />
              </td>
            </tr>

            <tr>
              <th>
                <p>예약 시간</p>
                <span>Reservation Time</span>
              </th>
              <td>
                <TimeList>
                  <li>
                    <input
                      type="radio"
                      name="reservationTime"
                      value="10:30 AM"
                      id="10:30 AM"
                      onChange={handleReservationInfo}
                    />
                    <label htmlFor="10:30 AM">10:30 AM</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="reservationTime"
                      value="1:30 PM"
                      id="1:30 PM"
                      onChange={handleReservationInfo}
                    />
                    <label htmlFor="1:30 PM">1:30 PM</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="reservationTime"
                      value="2:10 PM"
                      id="2:10 PM"
                      onChange={handleReservationInfo}
                    />
                    <label htmlFor="2:10 PM">2:10 PM</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="reservationTime"
                      value="3:20 PM"
                      id="3:20 PM"
                      onChange={handleReservationInfo}
                    />
                    <label htmlFor="3:20 PM">3:20 PM</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="reservationTime"
                      value="5:30 PM"
                      id="5:30 PM"
                      onChange={handleReservationInfo}
                    />
                    <label htmlFor="5:30 PM">5:30 PM</label>
                  </li>
                </TimeList>
                <div className="moreOption">
                  <input type="checkbox" />
                  <p>
                    동반 1인 참여를 원할 경우 체크
                    <br />
                    Please check if you want to bring one more person.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <TableTitle>
          <h3 className="brandFont">STEP. 2</h3>
          <div className="titleBg" />
          <p>예약하시는 분의 정보를 입력해 주세요.</p>
        </TableTitle>
        <table>
          <tbody>
            <tr>
              <th>
                <p>예약자 이름</p>
                <span>Name</span>
              </th>
              <td>
                <ReservationInput
                  placeholder="이름을 입력해주세요"
                  name="userName"
                  value={userName}
                  onChange={handleReservationInfo}
                />
                <div className="moreOption">
                  <input type="checkbox" />
                  <p>Check if you are a foreigner</p>
                </div>
              </td>
            </tr>

            <tr>
              <th>
                <p>휴대 전화</p>
                <span>Phone</span>
              </th>
              <td>
                <ReservationInput
                  placeholder="- 없이 숫자만 입력해 주세요"
                  name="userPhoneNum"
                  value={userPhoneNum}
                  onChange={handleReservationInfo}
                />
                <p className="userPhoneNumText">Please enter numbers only.</p>
              </td>
            </tr>

            <tr>
              <th>
                <p>성별</p>
                <span>Gender</span>
              </th>
              <td className="genderForm">
                <input
                  type="radio"
                  name="userGender"
                  value="male"
                  id="male"
                  onChange={handleReservationInfo}
                  checked={userGender === "male" ? "checked" : ""}
                />
                <label htmlFor="male">남자 (Male)</label>
                <input
                  type="radio"
                  name="userGender"
                  value="female"
                  id="female"
                  onChange={handleReservationInfo}
                  checked={userGender === "female" ? "checked" : ""}
                />
                <label htmlFor="female">여자 (Famale)</label>
              </td>
            </tr>

            <tr>
              <th>
                <p>연령대</p>
                <span>Age</span>
              </th>
              <td>
                <SelectBox>
                  <option
                    name="userAge"
                    value="15~19세"
                    onChange={handleReservationInfo}
                  >
                    15~19세
                  </option>
                  <option
                    name="userAge"
                    value="20~24세"
                    onChange={handleReservationInfo}
                  >
                    20~24세
                  </option>
                  <option
                    name="userAge"
                    value="25~29세"
                    onChange={handleReservationInfo}
                  >
                    25~29세
                  </option>
                  <option
                    name="userAge"
                    value="30~34세"
                    onChange={handleReservationInfo}
                  >
                    30~34세
                  </option>
                  <option
                    name="userAge"
                    value="35~39세"
                    onChange={handleReservationInfo}
                  >
                    35~39세
                  </option>
                  <option
                    name="userAge"
                    value="40~44세"
                    onChange={handleReservationInfo}
                  >
                    40~44세
                  </option>
                  <option
                    name="userAge"
                    value="45~49세"
                    onChange={handleReservationInfo}
                  >
                    45~49세
                  </option>
                  <option
                    name="userAge"
                    value="50~54세"
                    onChange={handleReservationInfo}
                  >
                    50~54세
                  </option>
                  <option
                    name="userAge"
                    value="55세 이상"
                    onChange={handleReservationInfo}
                  >
                    55세 이상
                  </option>
                </SelectBox>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="attentionForm">
        <h2>주의사항</h2>
        <div>
          <ul>
            <li>
              예약 접수 결과와 함께 ‘예약번호’가 휴대폰 SMS로 자동 발신됩니다.
            </li>
            <li>
              서비스 이용 시 매장에 방문하셔서 예약 완료 문자를 보여주세요.
            </li>
            <li>예약 확인은 Reservation(예약확인) 페이지에서 가능합니다.</li>
            <li>
              실제 신청 인원 및 스케줄에 따라 원하는 날짜와 시간에 신청이
              가능하지 않을 수도 있으며, 이 경우 별도 유선 연락을 드립니다.
            </li>
            <li>
              예약 취소는 온라인에서 하루 전까지 가능합니다.(예약 문의 전화 :
              플래그십 스토어 명동점 02-752-0214)
            </li>

            <li>
              Along with confirmation,‘reservation number’will be sent to your
              phone number as SMS message.
            </li>
            <li>
              You must show the confirmation message in store to use service.
            </li>
            <li>
              You can confirm your reservation at ‘Reservation’. (Put
              confirmation number)
            </li>
            <li>
              You might not be able to reserve the time and date you want
              depending on the number of people who made reservation. In that
              case, we will contact you by phone.
            </li>
            <li>
              You can cancel the reservation online until the day before your
              reservation. (Telephone inquiry for reservation : Flagship Store
              Myeongdong 02-752-0214)
            </li>
          </ul>
        </div>
      </div>

      <div>
        <SubmitBtn cancel className="mainFont">
          취소
        </SubmitBtn>
        <SubmitBtn className="mainFont" onClick={handleReviewSubmit}>
          예약
        </SubmitBtn>
      </div>
    </ReservationSection>
  );
};

export default FlagshipReservation;

const TableTitle = styled.div`
  position: relative;
  text-align: center;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #2b2b2b;
    margin-bottom: 25px;
  }

  .titleBg {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 70px;
    height: 12px;
    background-color: #b4d0f8;
    transform: translateX(-50%);
    z-index: -1;
  }

  p {
    font-size: 19px;
  }
`;

const ReservationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 120px;

  h2 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.06em;
    color: #2b2b2b;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 29px;
  }

  table {
    width: 780px;
    margin: 35px 0;
    border-top: 1px solid #2b2b2b;
    border-bottom: 1px solid #ccc;
    border-spacing: unset;
    text-align: left;
    vertical-align: top;
    background-color: white;

    tbody {
      th {
        width: 270px;
        padding: 25px 40px;
        border-bottom: 1px solid #ccc;
        vertical-align: top;
        color: #2b2b2b;
        background-color: #f7f7f7;

        p {
          margin-bottom: 6px;
        }
      }

      td {
        padding: 25px;
        border-bottom: 1px solid #ccc;
        line-height: 2.4;
        vertical-align: top;
      }
    }
  }

  .confirmForm {
    th {
      padding: 30px;
    }

    td {
      padding: 30px 40px;
      line-height: 50px;
    }
  }

  .moreOption {
    display: flex;
    margin-top: 10px;

    input {
      margin-top: 3px;
      margin-right: 8px;
    }

    p {
      font-size: 15px;
      line-height: 1.4;
      color: #5f5f5f;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #79a3dc;
        transition: color 0.3s ease-in-out;
      }
    }
  }

  .userPhoneNumText {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.4;
    color: #5f5f5f;
  }

  .genderForm {
    label {
      margin-left: 3px;
      font-size: 17px;
      color: #5f5f5f;
      cursor: pointer;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #79a3dc;
        transition: color 0.3s ease-in-out;
      }
    }

    input:nth-of-type(2) {
      margin-left: 30px;
    }
  }

  .attentionForm {
    max-width: 780px;
    margin-bottom: 50px;

    h2 {
      margin-left: 20px;
      font-size: 19px;
    }

    div {
      border-top: 1px solid #2b2b2b;
      border-bottom: 1px solid #ccc;

      ul {
        margin-left: 30px;
        padding: 20px 0;

        li {
          list-style: disc;
          font-size: 14px;
          line-height: 1.7;
          color: #767676;

          &:nth-of-type(6) {
            margin-top: 12px;
          }
        }
      }
    }
  }
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: 15px;
  color: #444;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid black;
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    border: 1px solid black;
  }
`;

const ReservationInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.25;
  color: #444;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #999;
  }

  &:hover {
    border: 1px solid black;
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    border: 1px solid black;
  }
`;

const TimeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 510px;

  li {
    margin-right: 5px;
    margin-bottom: 8px;

    label {
      display: inline-block;
      width: 132px;
      height: 55px;
      border: 1px solid #dfdfdf;
      text-align: center;
      line-height: 55px;
      color: #5f5f5f;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #4477be;
        transition: all 0.2s ease-in-out;
      }
    }

    input[type="radio"] {
      display: none;

      &:checked + label {
        color: white;
        background-color: #4477be;
      }
    }
  }
`;

const SubmitBtn = styled.button`
  margin: 0 5px;
  padding: ${(props) => (props.confirm ? "13px 103px" : "13px 73px")};
  border: 1px solid #2b2b2b;
  font-size: 17px;
  color: ${(props) => (props.cancel ? "#2b2b2b" : "white")};
  background-color: ${(props) => (props.cancel ? "white" : "#2b2b2b")};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #4477be;
    color: white;
    background-color: #4477be;
    transition: all 0.2s ease-in-out;
  }
`;
