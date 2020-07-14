import React, { useState } from "react";
import styled from "styled-components";
import { RESERVATION_API } from "config";

const ReservationConfirmBoard = (confirmInfo) => {
  const [reservationDelete, setReservationDelete] = useState(false);

  const handleDeleteSubmit = () => {
    fetch(`${RESERVATION_API}?reservation_no=${confirmInfo.reservation_no}`, {
      method: "DELETE",
    }).then(() => setReservationDelete(!reservationDelete));
  };

  return (
    <ReservationInfoContainer>
      <ReservationInfoForm deleteState={reservationDelete}>
        <div className="reservationInfoForm">
          <ul>
            <li>예약 서비스</li>
            <li>예약 일시</li>
            <li>예약 매장</li>
            <li>예약자</li>
            <li>동반인</li>
          </ul>

          <ul className="userReservationInfo">
            <li>마이 딜리셔스 테라피</li>
            <li>
              {confirmInfo.reservation_date} {confirmInfo.reservation_time}
            </li>
            <li>{confirmInfo.reservation_store}</li>
            <li>
              {confirmInfo.name}
              {" / "}
              {confirmInfo.phone_number}
            </li>
            <li>- / -</li>
          </ul>
        </div>
        <div className="reservationConfirmForm">
          <p>{reservationDelete ? "예약취소" : "예약완료"}</p>
          <p>{confirmInfo.reservation_no}</p>
          <SubmitBtn
            className="mainFont"
            onClick={handleDeleteSubmit}
            deleteState={reservationDelete}
          >
            예약 취소
          </SubmitBtn>
          <SubmitBtn
            confirm
            className="mainFont"
            deleteState={reservationDelete}
          >
            예약 수정
          </SubmitBtn>
        </div>
      </ReservationInfoForm>
    </ReservationInfoContainer>
  );
};

export default ReservationConfirmBoard;

const ReservationInfoContainer = styled.section`
  margin: 20px 0;
`;

const ReservationInfoForm = styled.article`
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.deleteState ? "#f7f7f7" : "white")};

  .reservationInfoForm {
    display: flex;
    min-width: 70%;
    border-right: 1px dashed #ccc;

    li {
      margin-right: 50px;
      padding-bottom: 30px;
      font-size: 17px;
      color: #2b2b2b;

      &:nth-of-type(1) {
        padding-top: 30px;
      }
    }

    .userReservationInfo {
      li {
        color: #444;
      }
    }
  }

  .reservationConfirmForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin-top: ${(props) => (props.deleteState ? "67px" : "0")};
    padding: 20px;

    p {
      padding: 10px 0;
      font-size: 17px;
      text-align: center;
      color: #2b2b2b;

      &:nth-of-type(2) {
        margin-bottom: 14px;
      }
    }
  }
`;

const SubmitBtn = styled.button`
  display: ${(props) => (props.deleteState ? "none" : "block")};
  margin: 5px 0;
  padding: 13px 40px;
  border: 1px solid #2b2b2b;
  font-size: 17px;
  color: ${(props) => (props.confirm ? "#2b2b2b" : "white")};
  background-color: ${(props) => (props.confirm ? "white" : "#2b2b2b")};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #4477be;
    color: white;
    background-color: #4477be;
    transition: all 0.2s ease-in-out;
  }
`;
