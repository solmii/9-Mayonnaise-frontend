import React, { Component } from "react";
import "./SectionTwo.scss";


export default class SectionTwo extends Component {
  constructor() {
    super();
    this.state = {
      trans: "",
    };
  }
  photoChangeEvent = (e) => {
    this.setState = {hovered: false};
  };
  render() {
   

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
            <div className="listPhoto">
              <div className="PhotoListOne">
                <img
                  className="imageOne"
                  alt="main_slider1"
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2020/03/25/20200325_final_product_cream-skin_pc.png"
                />
              </div>
              <div className="2">
                <img
                  className="imageTwo"
                  alt="main_slider1"
                 
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-1.png"
                />
               
              </div>
              <div className="3">
                <img
                  className="imageThree"
                  alt="main_slider1"
                 
                  src="https://www.laneige.com/kr/ko/layout/main/best-seller/__icsFiles/afieldfile/2019/11/15/bestseller-2.png"
                />
              
              </div>
             
              </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}