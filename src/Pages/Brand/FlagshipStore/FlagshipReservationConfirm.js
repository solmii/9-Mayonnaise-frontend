import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FlagshipReservationConfirm = () => {
  const [reservationConfirmInfo, setReservationConfirm] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/data/reservationConfirm.json")
      .then((res) => res.json())
      .then((res) => setReservationConfirm(res.reservationConfirm))
      .then(setLoading(true));
  }, []);

  useEffect(() => {
    console.log(reservationConfirmInfo);
    console.log("reflog")
  }, [reservationConfirmInfo]);

  return loading ? (
    <ReservationConfirmContainer>
      <h3>최근 예약 현황</h3>
      <RecentReservationForm>
        <input type="radio" name="recent" value="1" />
        <label htmlFor="recent">1개월</label>
        <input type="radio" name="recent" value="2" />
        <label htmlFor="recent">3개월</label>
        <input type="radio" name="recent" value="3" />
        <label htmlFor="recent">6개월</label>
      </RecentReservationForm>
      {/* map */}
      <ReservationInfoForm>
        <div className="reservationInfoForm">
          <ul>
            <li>예약 서비스</li>
            <li>예약 일시</li>
            <li>예약 매장</li>
            <li>예약자</li>
            <li>동반인</li>
          </ul>

          <ul>
            <li>마이 딜리셔스 테라피</li>
            <li>
              {reservationConfirmInfo[0] &&
                reservationConfirmInfo[0].reservationDate}{" "}
              {reservationConfirmInfo[0] &&
                reservationConfirmInfo[0].reservationTime}
            </li>
            <li>
              {reservationConfirmInfo[0] &&
                reservationConfirmInfo[0].reservationStore}
            </li>
            <li>
              {reservationConfirmInfo[0] && reservationConfirmInfo[0].userName}
              {" / "}
              {reservationConfirmInfo[0] &&
                reservationConfirmInfo[0].userPhoneNum}
            </li>
            <li>- / -</li>
          </ul>
        </div>
        <div className="reservationConfirmForm"></div>
      </ReservationInfoForm>
    </ReservationConfirmContainer>
  ) : (
    ""
  );
};

export default FlagshipReservationConfirm;

const ReservationConfirmContainer = styled.section`
  max-width: 780px;
  margin: 0 auto;

  h3 {
    margin-bottom: 35px;
    font-size: 19px;
    text-align: center;
  }
`;

const RecentReservationForm = styled.div`
  display: flex;
  padding: 16px 24px;
  border-top: 1px solid black;

  label {
    padding: 0 30px 0 10px;
    font-size: 17px;
    color: #2b2b2b;
  }
`;

const ReservationInfoForm = styled.article`
  padding: 30px 40px 20px;
  border: 1px solid #ccc;

  .reservationInfoForm {
    display: flex;
  }

  .reservationConfirmForm {
  }
`;
