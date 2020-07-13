import React, { useState } from "react";
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
    <SilderForm>
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
    </SilderForm>
  );
};

export default CampaignHistory;

const SilderForm = styled.section`
  width: 100vw;

  article {
    position: relative;
    outline: none;

    .descForm {
      position: absolute;
      top: 16%;
      left: 22%;
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
