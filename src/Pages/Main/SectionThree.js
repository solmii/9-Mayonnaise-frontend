import React, { Component } from "react";
import "./SectionThree.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});

export default class SectionThree extends Component {
  render() {
    return (
      <section className="SectionThree">
      <div className="imageList">
        <ul className="ulImg">
          <div className="imageListClass">
            <div className="imageText1">
              <img data-aos="fade-up"
                src="https://www.laneige.com/kr/ko/layout/main/contents-3/__icsFiles/afieldfile/2019/12/02/feature-a-0.jpg"
                className="imageList1"
                alt=""
              />
              <div className="textBox1">
              <p>루미너스 뷰티</p>
              <br />
              <p>
                수분 가득 맑고 건강하게 빛나는 아름다움, <br />
                루미너스 뷰티
              </p>
              </div>
            </div>
            <div className="imageText2">
              <img data-aos="fade-down"
                src="https://www.laneige.com/kr/ko/layout/main/contents-3/__icsFiles/afieldfile/2020/06/18/20201617_neo_cushion_foundation_new-arrivals_01.png"
                className="imageList2"
                alt=""
              />
              <div className="textBox2">
              <p>네오 쿠션_매트</p>
              <br />
              <p>
                한 번의 터치로 타고난 듯 24시간 완벽하게
                <br />
                커버해주는 매트쿠션
              </p>
            </div>
            </div>
            <div className="imageText1">
              <img data-aos="fade-up"
                src="https://www.laneige.com/kr/ko/layout/main/contents-3/__icsFiles/afieldfile/2019/12/02/feature-a-2.jpg"
                className="imageList3"
                alt=""
              />
              <div className="textBox3">
              <p>워터 슬리핑 마스크</p>
              <br />
              <p>
                2019 글로우픽 컨슈머 뷰티어워드
                <br />
                수면팩 부문 1위
              </p>
              </div>
            </div>
          </div>
        </ul>
      </div>
      </section>
    );
  }
}
