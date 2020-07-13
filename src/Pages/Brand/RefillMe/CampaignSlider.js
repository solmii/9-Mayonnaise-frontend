import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const CampaignSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SilderForm>
      <div className="sliderCorner" />
      <Slider {...settings}>
        <article>
          <header>캠페인에서는 어떤 활동을 하고 있나요?</header>
          <div className="mainDesc">
            캠페인 기간 동안 발생하는 라네즈 제품 판매 수익금의 일부를 글로벌 각
            국가들의 NGO를 통해 후원합니다. 각 단체에 기부된 금액은 전 세계 물
            부족 국가의 식수 지원 사업에 의미 있게 쓰여지고 있습니다.
          </div>
        </article>
        <article>
          <header>라네즈와 함께하는 '팀앤팀'은 어떤 단체인가요?</header>
          <div className="mainDesc">
            대한민국 유일의 수자원 전문 국제구호개발 NGO로, 1999년부터
            아프리카의 식수지원, 긴급구호개발 중심으로 사업을 수행하고 있으며,
            라네즈와는 2016년부터 현재까지 협약을 맺고 있습니다.
          </div>
          <p className="subDesc">
            <span>* 식수지원사업:</span> 팀앤팀은 목마른 지구촌 이웃에게 생명과
            연결된 '깨끗한 물'을 공급하기 위해 각 지역과 상황을 고려한
            식수지원사업을 진행하고 있습니다.
          </p>
        </article>
      </Slider>
    </SilderForm>
  );
};

export default CampaignSlider;

const SilderForm = styled.section`
  position: relative;
  max-width: 780px;
  margin: 40px auto;
  padding: 60px 70px 55px;
  border: 5px solid #e8e9e9;
  text-align: center;

  .sliderCorner {
    position: absolute;
    width: 42px;
    height: 42px;
    right: -5px;
    bottom: -5px;
    border-top: 21px solid #e8e9e9;
    border-left: 21px solid #e8e9e9;
    border-right: 21px solid #fff;
    border-bottom: 21px solid #fff;
  }

  article {
    outline: none;

    header {
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: bolder;
      color: #2b2b2b;
    }

    .mainDesc {
      font-size: 16px;
      line-height: 1.5;
      color: #5f5f5f;
    }

    .subDesc {
      margin: 0;
      font-size: 14px;
      line-height: 1.7;
      color: #5f5f5f;

      span {
        font-weight: bolder;
      }
    }
  }
`;
