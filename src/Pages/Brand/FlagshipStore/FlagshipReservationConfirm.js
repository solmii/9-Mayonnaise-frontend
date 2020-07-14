import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReservationConfirmBoard from "./ReservationConfirmBoard";
import { fetchReservationConfirmInfo } from "./ReservationFetchFunction";

const FlagshipReservationConfirm = () => {
  const [reservationConfirmInfo, setReservationConfirm] = useState([]);

  useEffect(() => {
    fetchReservationConfirmInfo("GET").then((res) =>
      setReservationConfirm(res.reservation_list)
    );
  }, []);

  // const monthArr = [
  //   { month: 1, value: 1 },
  //   { month: 3, value: 2 },
  //   { month: 6, value: 3 },
  // ];

  return (
    reservationConfirmInfo && (
      <ReservationConfirmContainer>
        <h3>최근 예약 현황</h3>
        {/* {monthArr.map(({ month, value }, idx) => (
          <div className="recentReservationForm" key={idx}>
            <input type="radio" name="recent" value={value} />
            <label htmlFor="recent">{month}개월</label>
          </div>
        ))} */}
        {reservationConfirmInfo.map((confirmInfo) => (
          <ReservationConfirmBoard
            {...confirmInfo}
            key={confirmInfo.reservation_no}
          />
        ))}
      </ReservationConfirmContainer>
    )
  );
};

export default FlagshipReservationConfirm;

const ReservationConfirmContainer = styled.section`
  max-width: 780px;
  margin: 0 auto;

  h3 {
    margin-bottom: 35px;
    padding-bottom: 20px;
    font-size: 19px;
    text-align: center;
  }

  .recentReservationForm {
    display: inline;
    padding-left: 24px;

    label {
      padding: 0 30px 0 10px;
      font-size: 17px;
      color: #2b2b2b;
    }
  }
`;
