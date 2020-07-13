import React, { Component } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
export default class Main extends Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <>
        <SectionOne />
        <SectionTwo />
      </>
    );
  }
}
