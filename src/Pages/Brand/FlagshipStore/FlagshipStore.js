import React, { useState } from "react";
import styled from "styled-components";
import FlagshipIntroduction from "./FlagshipIntroduction";
import FlagshipServices from "./FlagshipServices";
import FlagshipReservation from "./FlagshipReservation";
import FlagshipReservationConfirm from "./FlagshipReservationConfirm";
import { crumb_position, menu_title } from "config";

const FlagshipStore = () => {
  const [activeTab, setActiveTab] = useState(2);

  const flagship_store = [
    <FlagshipIntroduction />,
    <FlagshipServices />,
    <FlagshipReservation />,
    <FlagshipReservationConfirm />,
  ];

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
                {menu_title.map((title, idx) => (
                  <li
                    className={activeTab === idx ? "ActiveTab" : ""}
                    onClick={() => setActiveTab(idx)}
                    key={idx}
                  >
                    {title}
                  </li>
                ))}
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
      height: 54px;
      padding: 18px 51px;
      font-size: 17px;
      font-weight: bold;
      color: #5f5f5f;
      border-bottom: 0 solid #ddd;
      transition: border 0.2s;
      cursor: pointer;

      &:hover {
        border-bottom: 2px solid #000;
      }
    }

    .ActiveTab {
      border-bottom: 2px solid black;
      color: black;
    }
  }
`;
