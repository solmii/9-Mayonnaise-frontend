import React from "react";
import Slider from "react-slick";
import { HistoryData } from "./HistoryData";
import styled from "styled-components";

const CampaignHistory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <HistorySilderForm>
      <Slider {...settings}>
        {HistoryData.map((data) => (
          <article>
            <div className="descForm">
              <h1 className="brandFont">{data.slider_title}</h1>
              <p>{data.slider_first_desc}</p>
              <p>{data.slider_second_desc}</p>
            </div>
            <img alt="refill_me_campaign" src={data.slider_img} />
          </article>
        ))}
      </Slider>
    </HistorySilderForm>
  );
};

export default CampaignHistory;

const HistorySilderForm = styled.section`
  width: 100vw;

  /* .slick-slide {
    max-width: 1000px;
  } */

  .slick-list {
    top: 0;
    left: 13%;
    padding-left: 14%;
    width: 100%;
    overflow: visible;
  }

  article {
    position: relative;
    margin: 0 auto;
    outline: none;

    .descForm {
      position: absolute;
      top: 16%;
      left: -15%;
      max-width: 320px;

      h1 {
        margin-bottom: 30px;
        font-size: 34px;
        text-align: left;
        line-height: 1.3;
        z-index: 100;
      }

      p {
        margin: 10px 0;
        font-size: 16px;
        text-align: left;
        line-height: 1.5;
        color: #5f5f5f;
        z-index: 100;
      }
    }

    img {
      width: 780px;
      height: auto;
      margin: 0 auto;
    }
  }
`;
