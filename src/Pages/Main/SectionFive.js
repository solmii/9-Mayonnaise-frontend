import React, { Component } from "react";

import "./SectionFive.scss";
export default class SectionFive extends Component {
  render() {
  

    return (
      <section className="SectionFive">
      <div className="BottomPage">
        <h1 className="BomttomTitle">#LUMINOUS LIVE</h1>
        <div className="BottomSubName">SHARE YOUR LUMINOUS MOMENTS WITH LANEIGE!
     </div>
          <div className="bottomPhoto">
          <div className="bottomSliderForm">
            <img className="bottomImg" 
              alt="main_slider1"
              src="https://z3photorankmedia-a.akamaihd.net/media/8/k/9/8k94cs4/mobile.jpg" 
            />
          </div>
          <div className="bottomSliderForm" >
            <img className="bottomImg"
              alt="main_slider1"
              src="https://z3photorankmedia-a.akamaihd.net/media/m/f/w/mfwf8s4/mobile.jpg"
            />
          </div>
          <div className="bottomSliderForm" >
            <img className="bottomImg"
              alt="main_slider1"
              src="https://z3photorankmedia-a.akamaihd.net/media/h/6/j/h6jn6s4/mobile.jpg"
            />
          </div>
          <div className="bottomSliderForm" >
            <img className="bottomImg"
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
          </div>
      </div>
     
      </section>
    );
  }
}
