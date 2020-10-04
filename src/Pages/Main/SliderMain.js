import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  AOS.init({ duration : 2000});
  }

  render() {
    return (
      <div >
        <Hello name={this.state.name}  />
        <p data-aos="fade-left">
          Start editing to see some magic happen :)<br />          <hr />
        </p>
        <p data-aos="fade-right">
          Start editing to see some magic happen :)<br />          <hr />
        </p>
        <div data-aos="fade-zoom-in" data-aos-duration="2000">
         fade-zoom-in         <hr />
        </div>
        <div data-aos="flip-right"  style={{width:"40%", hieght:"40%", padding:"10px", backgroundColor:"black" , color:"white" , textAlign:"center"}}>
      Filp      
        </div>
      </div>
    );
  }
}