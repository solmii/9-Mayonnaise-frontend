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
            <p className="headerTitle_MJ">best seller</p>
          </div>
        </div>
        <div className="SectionMainOne_MJ">
          <div className="MainSlider_MJ">
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
                  크림스킨
                  <br />
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
                  CREAM SKIN REFINER
                  <br />
                  크림스킨
                  <br />
                  스킨인데 뛰어난 보습지속력과, 산뜻한
                  <br />
                  사용감으로 이만한 스킨은 없는 것<br />
                  같아요
                  <br />
                  @rabb********
                </p>
              </div>
              <div className="3">
                <img
                  className="imageThree"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-2.png"
                />
                <p className="imageInfo3">
                  CREAM SKIN REFINER
                  <br />
                  크림스킨
                  <br />
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
              <div className="4">
                <img
                  className="imageFour"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-3.png"
                />
                <p className="imageInfo3">
                  CREAM SKIN REFINER
                  <br />
                  크림스킨
                  <br />
                  <img
                  className="Icon1"
                  alt="main_slider1"
                  src="/www.laneige.com/kr/ko/skincare/cream-skin-refiner.html"
                />
                  스킨인데 뛰어난 보습지속력과, 산뜻한
                  <br />
                  사용감으로 이만한 스킨은 없는 것<br />
                  같아요
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
                  CREAM SKIN REFINER
                  <br />
                  크림스킨
                  <br />
                  스킨인데 뛰어난 보습지속력과, 산뜻한
                  <br />
                  사용감으로 이만한 스킨은 없는 것<br />
                  같아요
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
                  CREAM SKIN REFINER
                  <br />
                  크림스킨
                  <br />
                  스킨인데 뛰어난 보습지속력과, 산뜻한
                  <br />
                  사용감으로 이만한 스킨은 없는 것<br />
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
