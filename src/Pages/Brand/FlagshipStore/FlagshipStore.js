import React, { useState } from "react";
import styled from "styled-components";
import FlagshipIntroduction from "./FlagshipIntroduction";
import FlagshipServices from "./FlagshipServices";
import FlagshipReservation from "./FlagshipReservation";
import FlagshipReservationConfirm from "./FlagshipReservationConfirm";
import { crumb_position } from "config";

const flagship_store = {
  0: <FlagshipIntroduction />,
  1: <FlagshipServices />,
  2: <FlagshipReservation />,
  3: <FlagshipReservationConfirm />,
};

const FlagshipStore = () => {
  const [activeTab, setActiveTab] = useState(3);
  return (
    <>
      <CrumbNav>
        <ul>
          <li>브랜드 &nbsp;{">"}&nbsp;</li>
          <li>플래그십 스토어 &nbsp;{">"}&nbsp;</li>
          <li>{crumb_position[activeTab]}</li>
        </ul>
      </CrumbNav>
      <FlagshipSection>
        <header>
          <h1>플래그십 스토어</h1>
          <nav>
            <FlagshipMenu>
              <ul>
                <li
                  className={activeTab === 0 ? "ActiveTab" : ""}
                  onClick={() => setActiveTab(0)}
                >
                  플래그십 스토어 소개
                </li>
                <li
                  className={activeTab === 1 ? "ActiveTab" : ""}
                  onClick={() => setActiveTab(1)}
                >
                  서비스 소개
                </li>
                <li
                  className={activeTab === 2 ? "ActiveTab" : ""}
                  onClick={() => setActiveTab(2)}
                >
                  서비스 예약
                </li>
                <li
                  className={activeTab === 3 ? "ActiveTab" : ""}
                  onClick={() => setActiveTab(3)}
                >
                  예약확인 및 취소
                </li>
              </ul>
            </FlagshipMenu>
          </nav>
        </header>
        <article>{flagship_store[activeTab]}</article>
      </FlagshipSection>
    </>
  );
};

export default FlagshipStore;

const CrumbNav = styled.nav`
  margin: 15px 0 0 50px;

  ul {
    display: flex;

    li {
      padding-right: 3px;
      font-size: 14px;
      color: #5f5f5f;
      cursor: pointer;

      &:nth-of-type(3) {
        font-weight: bold;
      }
    }
  }
`;

const FlagshipSection = styled.section`
  margin: 0 auto;

  h1 {
    margin: 45px 0 35px;
    font-size: 2.5rem;
    text-align: center;
  }

  article {
    max-width: 1180px;
    margin: 0 auto;
  }
`;

const FlagshipMenu = styled.div`
  margin-bottom: 60px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  ul {
    display: flex;
    justify-content: space-between;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 9%;

    li {
      padding: 18px 51px;
      font-size: 17px;
      font-weight: bold;
      color: #5f5f5f;
      cursor: pointer;
      border-bottom: 0 solid #ddd;
      transition: border 0.2s;

      &:hover {
        border-bottom: 2px solid #000;
        transition: border 0.2s;
      }
    }

    .ActiveTab {
      border-bottom: 2px solid #000;
      color: black;
    }
  }
`;
