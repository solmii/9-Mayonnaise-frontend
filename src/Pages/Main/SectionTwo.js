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
      <section className="bestsellerBox">
        <div className="laneige_bestseller">
          <div className="bgBestseller" role="presentation">
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
            <p className="headerTitle">best seller</p>
          </div>
        </div>
        <div className="SectionMainOne">
          <div className="MainSlider">
            <Slider {...settings}>
              <img
                className="imageOne"
                alt="main_slider1"
                src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2020/03/25/20200325_final_product_cream-skin_pc.png"
              />
              <img
                className="imageTwo"
                alt="main_slider1"
                src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-1.png"
              />
              <img
                className="imageThree"
                alt="main_slider1"
                src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-2.png"
              />
              <img
                className="imageFour"
                alt="main_slider1"
                src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-3.png"
              />
              <img
                className="imageFive"
                alt="main_slider1"
                src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-4.png"
              />
              <img
                className="imageSix"
                alt="main_slider1"
                src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-5.png"
              />
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
