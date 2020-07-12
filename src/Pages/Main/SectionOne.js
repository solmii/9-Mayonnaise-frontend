import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./SectionOne.scss";

class SectionOne extends Component {
  render() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
      <div className="MainSlide">
        <AutoplaySlider
          arrow={false}
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3000}
        >
          <div data-src="https://www.laneige.com/kr/ko/layout/main/key-visual/__icsFiles/afieldfile/2020/06/17/20200617_neo-cushion_KV_pc_1.png"></div>
          <div data-src="https://www.laneige.com/kr/ko/layout/main/key-visual/__icsFiles/afieldfile/2020/04/24/cream-skin-refiner-main_kv-200424-pc_1.jpg">
            <div className="slideTextBox">
              <h3>워터뱅크하이드로에센스</h3>
              <h2 style={{ fontSize: "30px" }}>
                하이드로 라이트닝
                <br />
                라네즈
              </h2>
            </div>
          </div>
          <div data-src="https://www.laneige.com/kr/ko/layout/main/key-visual/__icsFiles/afieldfile/2020/04/24/cream-skin-refiner-main_kv-200424-pc_1.jpg"></div>
        </AutoplaySlider>
      </div>
    );
  }
}

export default SectionOne;
