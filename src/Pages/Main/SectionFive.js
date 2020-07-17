import React, { Component } from "react";
import "./SectionThree.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SectionFive.scss";
export default class SectionFive extends Component {
  render() {
    const settings = {
      
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
      <section className="SectionFive">
      <div className="BottomPage">
        <h1 className="BomttomTitle">#LUMINOUS LIVE</h1>
        <div className="BottomSubName"><p>
     <span className="BottomSubTitle">SHARE YOUR LUMINOUS MOMENTS WITH LANEIGE!</span></p>
     </div>
      <div className="BottomSlider">
        <Slider {...settings}>
          
          <div className="bottomSliderForm" key={1}>
            <img className="bottomImg1"
              alt="main_slider1"
              src="https://z3photorankmedia-a.akamaihd.net/media/8/k/9/8k94cs4/mobile.jpg"
            />
          </div>
          <div className="bottomSliderForm" key={2}>
            <img className="bottomImg2"
              alt="main_slider1"
              src="https://z3photorankmedia-a.akamaihd.net/media/m/f/w/mfwf8s4/mobile.jpg"
            />
          </div>
          <div className="bottomSliderForm" key={3}>
            <img className="bottomImg3"
              alt="main_slider1"
              src="https://z3photorankmedia-a.akamaihd.net/media/h/6/j/h6jn6s4/mobile.jpg"
            />
          </div>
          <div className="bottomSliderForm" key={4}>
            <img className="bottomImg4"
              alt="main_slider1"
              src="https://z3photorankmedia-a.akamaihd.net/media/w/8/c/w8cd6s4/mobile.jpg"
            />
          </div>
          <div className="bottomSliderForm" key={4}>
            <img className="bottomImg"
              alt="main_slider1"
              src="https://z3photorankmedia-a.akamaihd.net/media/7/r/i/7ri96s4/mobile.jpg"
            />
          </div>
        </Slider>
      </div>
      </div>
      </section>
    );
  }
}
