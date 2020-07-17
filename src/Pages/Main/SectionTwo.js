import React, { Component } from "react";
import "./SectionTwo.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {
//   MAIN_SLIDER_IMG1,
//   MAIN_SLIDER_IMG2,
//   MAIN_SLIDER_IMG3,
//   MAIN_SLIDER_IMG4,
// } from "config";
export default class SectionTwo extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
     <div className="SectionTwo_MJ">
      <section className="bestsellerBox_MJ">
        <div className="laneige_bestseller_MJ">
          <div className="bgBestseller_MJ" role="presentation">
            <video
              className="bgVideo"
              preload
              autoplay="autoplay"
              muted="muted"
              loop
              playsinline
              type="video/mp4"
              poster="https://www.laneige.com/kr/ko/assets/image/index/bestseller-bg.jpg"
            >
              <source
                src="https://www.laneige.com/kr/ko/assets/video/index/bestseller-bg.mp4"
                type="video/mp4"
              />
            </video>
           
          </div>
        </div>
        <div className="SectionMainOne_MJ">
          <div className="MainSlider_MJ">
            <div className="BestSellerTitle">BEST SELLER</div>
            <Slider {...settings}>
              <div className="1">
                <img
                  className="imageOne"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2020/03/25/20200325_final_product_cream-skin_pc.png"
                />
                <p className="imageInfo3">
                  CREAM SKIN REFINER
                  <br />
                  <strong className="creamSkin">크림스킨
                  
                  </strong><br />
                  <p className="icon">
                    
                  </p>
                  스킨인데 뛰어난 보습지속력과, 산뜻한
                  <br />
                  사용감으로 이만한 스킨은 없는 것<br />
                  같아요
                  <br />
                  @rabb********
                </p>
              </div>
              <div className="2">
                <img
                  className="imageTwo"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-1.png"
                />
                <p className="imageInfo3">
                   WATER SLEEPING MASK
                  <br />
                  워터 슬리핑 마스크
                  <br />
                  수분감 충만한 슬리핑팩! 밤에 듬뿍
                  <br />
                 바르고 자고 일어나면 아침에 화장이<br />
                  매우 잘먹는다
                  <br />
                  @heat********
                </p>
              </div>
              <div className="3">
                <img
                  className="imageThree"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-2.png"
                />
                <p className="imageInfo3">
                  SKIN VEIL BASE
                  <br />
                  스킨 베일 베이스
                  <br />
                  <p className="icon">
                    
                  </p>
                  피부 색이 탁해서 베이스를 무조건
                  <br />
                  깔아줘야하는 피부였는데 이거<br />
                  쓰고나서 정착했어요
                  <br />
                  @du**********
                </p>
              </div>
              <div className="4">
                <img
                  className="imageFour"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-3.png"
                />
                <p className="imageInfo3">
                  WATER BANK HYDRO ESSENCE
                  <br />
                  워터뱅크 하이드로 에센스
                  <br />
                  <img
                  className="Icon1"
                  alt="main_slider1"
                  src="/www.laneige.com/kr/ko/skincare/cream-skin-refiner.html"
                />
                  얼굴도 속당김없이 여전히 촉촉하구요
                  <br />
                  재구매의사 100%에요 다들 정말<br />
                  추천합니다
                  <br />
                  @rabb********
                </p>
              </div>
              <div className="5">
                <img
                  className="imageFive"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-4.png"
                />
                <p className="imageInfo3">
                 LIP SLEEPING MASK
                  <br />
                  립 슬리핑 마스크
                  <br />
                  자기전 딱 바르고 나면 다음 날 입술
                  <br />
                  컨디션이 넘넘 좋아져서 요즘 매일 사용<br />
                  하고 있어요
                  <br />
                  @rabb********
                </p>
              </div>
              <div className="6">
                <img
                  className="imageSix"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-5.png"
                />
                <p className="imageInfo3">
                  LAYERING COVER CUSHION
                  <br />
                  크림스킨
                  <br />
                  컨실러랑 쿠션이 함께라서 옴총 편한
                  <br />
                  라네즈 로지 쿠션<br />
                  같아요
                  <br />
                  @rabb********
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      </div>
    );
  }
}
