import React, { Component } from "react";
import "./SectionThree.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});



export default class SectionFour extends Component {
  render() {
    return (
      <section className="SectionThree">
      <div className="imageList">
        <ul className="ulImg">
          <div className="imageListClass">
            <div className="imageText1">
              <img data-aos="fade-down"
                className="imageListMiddle1"
                src="https://www.laneige.com/kr/ko/layout/main/contents-4/__icsFiles/afieldfile/2019/12/02/feature-b-0.jpg"
                alt="스테인드 글로우 립밤 - 2019 상반기 언파 뷰티 리뷰 위너스 립밤 부문 위너"
              />
              <p>루미너스 뷰티</p>
              <br />
              <p>
                수분 가득 맑고 건강하게 빛나는 아름다움, <br />
                루미너스 뷰티
              </p>
            </div>

            <div className="imageText1">
              <img data-aos="fade-up"
                className="imageListMiddle2"
                src="https://www.laneige.com/kr/ko/layout/main/contents-4/__icsFiles/afieldfile/2019/12/02/feature-b-1.jpg"
                alt="MY DELICIOUS THERAPY"
              />
            <div className="textBox4">
              <p>워터 슬리핑 마스크</p>
              <br />
              <p>
                2019 글로우픽 컨슈머 뷰티어워드
                <br />
                수면팩 부문 1위
              </p>
              </div>
            </div>
            <div className="secondBottom">
              <div className="imageText6">
                <img data-aos="fade-up"
                  className="imageListMiddle3"
                  src="https://www.laneige.com/kr/ko/layout/main/contents-4/__icsFiles/afieldfile/2020/01/03/200103-feature-b-2.jpg"
                  alt="레이어링 립 바"
                />
                <div className="textBox5">
                <p>레이어링 립 바</p>
                <br />
                <p>한 번의 터치로,리얼 볼륨 그라데이션을 완셩하세요.</p></div>
              </div>
              <div className="imageText6">
                <img data-aos="fade-down"
                  className="imageListMiddle4"
                  src="https://www.laneige.com/kr/ko/layout/main/contents-4/__icsFiles/afieldfile/2019/12/02/feature-b-3.jpg"
                  alt="라네즈 리필 미 캠페인"
                />
                <div className="textBox6">
                <p>레니즈 리필 미 캠페인</p>
                <br />
                <p>라네즈는 물을 지키고, 깨끗하게 하는 일을 함께합니다.</p></div>
              </div>
            </div>
          </div>
        </ul>
      </div>
      </section>
    );
  }
}
