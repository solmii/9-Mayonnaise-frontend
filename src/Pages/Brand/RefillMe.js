import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import CampaignSlider from "./CampaignSlider";
import CampaignHistory from "./CompaignHistory";
import styled from "styled-components";
import {
  REFILLME_VIDEO,
  REFILLME_BG,
  REFILL_ITEM_VIDEO1,
  REFILL_ITEM_VIDEO2,
  REFILL_ITEM_VIDEO3,
  REFILLME_IMG,
  PARTNER_IMG1,
  PARTNER_IMG2,
  PARTNER_IMG3,
  PARTNER_IMG4,
  PARTNER_IMG5,
  PARTNER_IMG6,
  TOGETHER_IMG1,
  TOGETHER_IMG2,
  TOGETHER_IMG3,
  TOGETHER_IMG4,
  QUOTE_ICON,
  BOTTOM_BG,
} from "config";

const RefillMe = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());

    return () => {
      window.removeEventListener("scroll", () => handleScroll());
    };
  });

  const [showVideo, setShowVideo] = useState(true);
  const [waterBtn, setwaterBtn] = useState(false);
  const [lifeBtn, setlifeBtn] = useState(false);
  const [ecoBtn, setecoBtn] = useState(false);
  // const [bgOpacity, setbgOpacity] = useState(0); opacity event 구현 예정

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 5) {
      setShowVideo(false);
    } else {
      setShowVideo(true);
    }

    if (scroll < 2150 && scroll > 1550) {
      setwaterBtn(true);
      setlifeBtn(false);
      setecoBtn(false);
    } else if (scroll < 2800 && scroll > 2150) {
      setwaterBtn(false);
      setlifeBtn(true);
      setecoBtn(false);
    } else if (scroll < 3400 && scroll > 2800) {
      setwaterBtn(false);
      setlifeBtn(false);
      setecoBtn(true);
    } else {
      setwaterBtn(false);
      setlifeBtn(false);
      setecoBtn(false);
    }
  };

  return (
    <>
      {/* <Section bgOpacity={bgOpacity}> opacity event 구현 예정 */}
      <Nav />
      <RefillMeVideo videoPlay={showVideo}>
        <div className="refillMeVideoForm">
          <div className="refillMeVideoTitle">
            <h1 className="brandFont">REFILL ME CAMPAIGN</h1>
            <p className="mainFont">
              라네즈는 물을 지키고,
              <br />
              깨끗하게 하는 일을 함께 합니다.
            </p>
          </div>
          <div className="lineAnimation">
            <span className="scrollLine" />
            <p>SCROLL</p>
          </div>
          {showVideo && (
            <video
              src={REFILLME_VIDEO}
              autoplay="autoplay"
              muted="muted"
              playsinline="playsinline"
            />
          )}
        </div>

        <div className="refillMeImgForm">
          <div className="refillMeImgTitle">
            <h1 className="brandFont">OUR PROMISE</h1>
            <strong className="mainFont">
              라네즈는 물을 지키고,
              <br />
              깨끗하게 하는 일을 함께 합니다.
            </strong>
            <p className="mainFont">
              라네즈는 모든 생명의 근원인 물이 아름다운 피부와 활력 넘치는 삶의
              열쇠라고 믿습니다.
              <br />
              물이 지닌 놀라운 능력과 소중함을 잘 알기에 우리의 삶도, 환경도
              생기 있게 빛날 수 있도록
              <br />
              물이 부족한 국가를 후원하고
              <br />
              물 자원을 보존하는 의미 있는 일에
              <br />
              동참하고 있습니다.
            </p>
          </div>
          <img alt="refill_me_background" src={REFILLME_BG} />
        </div>
      </RefillMeVideo>
      <SlotCount>
        <h1 className="numFont">352,000,000</h1>
        <p>
          2010년부터 지금까지 라네즈가
          <br />물 보호 활동에 후원한 금액
        </p>
      </SlotCount>
      <RefillItem>
        <nav>
          <ul>
            <NavigationForm isActive={waterBtn}>
              <Link
                activeClass="active"
                to="navigator1"
                spy={true}
                smooth={true}
                duration={700}
              >
                WATER
              </Link>
            </NavigationForm>
            <NavigationForm isActive={lifeBtn}>
              <Link
                activeClass="active"
                to="navigator2"
                spy={true}
                smooth={true}
                duration={700}
              >
                LIFE
              </Link>
            </NavigationForm>
            <NavigationForm isActive={ecoBtn}>
              <Link
                activeClass="active"
                to="navigator3"
                spy={true}
                smooth={true}
                duration={700}
              >
                ECO
              </Link>
            </NavigationForm>
          </ul>
        </nav>
        <div className="videoForm">
          <article className="navigator1" name="navigator1">
            <h2 className="brandFont">
              VITAL POWER
              <br />
              OF WATER
            </h2>
            <video
              src={REFILL_ITEM_VIDEO1}
              loop="loop"
              autoplay="autoplay"
              muted="muted"
              playsinline="playsinline"
            />
            <p>‘리필 미 보틀’을 사용해 몸 속에 수분을 가득 채워</p>
            <strong>나를 리필!</strong>
          </article>
          <article className="navigator2" name="navigator2">
            <h2 className="brandFont">LUMINOUS</h2>
            <video
              src={REFILL_ITEM_VIDEO2}
              loop="loop"
              autoplay="autoplay"
              muted="muted"
              playsinline="playsinline"
            />
            <p>일상 속 트렌디한 보틀과 함께 하며</p>
            <strong>삶을 리필!</strong>
          </article>
          <article className="navigator3" name="navigator3">
            <h2 className="brandFont">
              YOUTHFUL
              <br />
              SPIRIT
            </h2>
            <video
              src={REFILL_ITEM_VIDEO3}
              loop="loop"
              autoplay="autoplay"
              muted="muted"
              playsinline="playsinline"
            />
            <p>
              친환경 다회성 보틀을 사용하고, 일회용 플라스틱 사용 절감에
              동참하여
            </p>
            <strong>환경을 리필!</strong>
          </article>
        </div>
      </RefillItem>
      <Campaign>
        <img alt="refill_me_campaign" src={REFILLME_IMG} />
        <p>
          라네즈 ‘리필 미 캠페인’은 친환경 리필 미 보틀을 사용하여 내 피부에
          수분을
          <br />
          채우고, 삶을 생기 있게 할 뿐만 아니라 환경 보호까지 동참하는
          활동입니다.
        </p>
        <CampaignSlider />
        <CampaignHistory />
      </Campaign>
      <GlobalPartner>
        <h1 className="brandFont">OUR GLOBAL PARTNERS</h1>
        <ul>
          <li>
            <img
              alt="global_partner"
              className="partnerImg1"
              src={PARTNER_IMG1}
            />
          </li>
          <li>
            <img
              alt="global_partner"
              className="partnerImg2"
              src={PARTNER_IMG2}
            />
          </li>
          <li>
            <img
              alt="global_partner"
              className="partnerImg3"
              src={PARTNER_IMG3}
            />
          </li>
          <li>
            <img
              alt="global_partner"
              className="partnerImg4"
              src={PARTNER_IMG4}
            />
          </li>
          <li>
            <img
              alt="global_partner"
              className="partnerImg5"
              src={PARTNER_IMG5}
            />
          </li>
          <li>
            <img
              alt="global_partner"
              className="partnerImg6"
              src={PARTNER_IMG6}
            />
          </li>
        </ul>
      </GlobalPartner>
      <Together>
        <h1 className="brandFont">LET'S TOGETHER</h1>
        <div className="photoForm">
          <img alt="let's_together" src={TOGETHER_IMG1} />
          <img alt="let's_together" src={TOGETHER_IMG2} />
          <img alt="let's_together" src={TOGETHER_IMG3} />
          <img alt="let's_together" src={TOGETHER_IMG4} />
        </div>
        <div className="tag">
          <a href="">#리필미캠페인</a>
          <a href="">#RefillMe</a>
        </div>
        <div className="textForm">
          <p>
            앞으로도 라네즈는 물을 아끼고 사랑하는 마음을 담아 지속적인 물 보존
            <br />
            활동에 참여하고, 맑고 깨끗한 물을 소중하게 지키고 나누는 일에
            <br />
            앞장서겠습니다.
          </p>
          <img className="doubleQuoteIcon" alt="＂" src={QUOTE_ICON} />
        </div>
      </Together>
      <Bottom>
        <div>
          <img alt="bottom_model" src={BOTTOM_BG} />
          <strong>
            우리의 작은 움직임이
            <br />
            더 큰 변화를
            <br />
            만들 수 있습니다.
          </strong>
        </div>
      </Bottom>
    </>
  );
};

export default RefillMe;

// const Section = styled.section`
//   background: linear-gradient(
//     to right bottom,
//     rgba(121, 163, 220, ${(props) => props.bgOpacity}),
//     white
//   );
// `;  opacity event 구현 예정

// 테스트용! 팀원 Nav bar merge 되면 pull 받고 지울 것.
const Nav = styled.div`
  position: fixed;
  width: 100vw;
  height: 60px;
  z-index: 200;
  background-color: skyblue;
`;

const RefillMeVideo = styled.article`
  position: relative;
  width: 100%;
  height: 100vh;

  .refillMeVideoForm {
    transition: opacity 0.7s;
    opacity: ${(props) => (props.videoPlay ? "1" : "0")};
    height: ${(props) => (props.videoPlay ? "100%" : "0.2")};

    .refillMeVideoTitle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      text-align: center;

      h1 {
        margin-bottom: 20px;
        font-size: 50px;
        font-weight: 500;
        color: #000;
      }

      p {
        font-family: "Arita-dotum-Medium", sans-serif;
        font-size: 18px;
        font-weight: 300;
        line-height: 1.5;
        color: #444;
      }
    }

    .lineAnimation {
      position: absolute;
      top: 162%;
      left: 39%;
      width: 400px;
      z-index: 100;
      font-size: 16px;
      font-weight: 400;
      color: black;
      transform: rotate(90deg) translate(-130%, 5%);

      .scrollLine {
        content: "";
        position: fixed;
        top: 7px;
        left: -89px;
        width: 80px;
        height: 1px;
        z-index: 100;
        background-color: black;
        transform-origin: 0;
        animation: line-animation 1.3s infinite ease;
      }

      @keyframes line-animation {
        0% {
          transform: scaleX(0);
        }
        25% {
          transform: scaleX(0);
        }
        65% {
          transform: scaleX(1);
          transform-origin: 0;
        }
        90% {
          transform: scaleX(1);
          transform-origin: 100%;
        }
        100% {
          transform: scaleX(0);
          transform-origin: 100%;
        }
      }
    }

    video {
      width: 100%;
    }
  }

  .refillMeImgForm {
    position: relative;
    width: 100vw;
    height: ${(props) => (props.videoPlay ? "0" : "100%")};
    opacity: ${(props) => (props.videoPlay ? "0.2" : "1")};
    transition: opacity 0.7s;

    .refillMeImgTitle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      display: ${(props) => (props.videoPlay ? "none" : "block")};

      h1 {
        padding-bottom: 30px;
        font-size: 35px;
      }

      strong {
        font-size: 19px;
        line-height: 1.4;
        color: #2b2b2b;
      }

      p {
        padding-top: 20px;
        font-size: 17px;
        line-height: 1.7;
        color: #444;
      }
    }

    img {
      min-width: 100vw;
      display: ${(props) => (props.videoPlay ? "none" : "block")};
    }
  }
`;

const SlotCount = styled.article`
  margin: 200px 0;

  h1 {
    margin-bottom: 60px;
    font-size: 100px;
    text-align: center;
    letter-spacing: 4px;
    color: #4477be;
  }

  p {
    font-size: 18px;
    text-align: center;
    line-height: 1.4;
    color: #444;
  }
`;

const RefillItem = styled.article`
  display: flex;
  justify-content: space-between;
  max-width: 1180px;
  margin: 0 auto;

  nav {
    position: relative;

    ul {
      position: sticky;
      top: 30%;
      margin: 190px 0;
    }
  }

  .videoForm {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    article {
      position: relative;
      margin-bottom: 70px;

      h2 {
        position: absolute;
        top: 46%;
        left: -13%;
        transform: translateY(-54%);
        font-size: 34px;
        line-height: 1.4;
      }

      p {
        margin-top: 20px;
        font-size: 17px;
        line-height: 2;
        color: #444;
      }

      strong {
        font-size: 17px;
        font-weight: bold;
        color: #444;
      }
    }
  }
`;

const NavigationForm = styled.li`
  a {
    font-size: 18px;
    font-weight: ${(props) => (props.isActive ? "bold" : "nomal")};
    line-height: 2.5;
    color: ${(props) => (props.isActive ? "black" : "#999")};
    cursor: pointer;

    &::before {
      content: "−";
      display: ${(props) => (props.isActive ? "inline-block" : "none")};
      padding-right: 4px;
    }
  }
`;

const Campaign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  img {
    width: 230px;
  }

  p {
    margin: 20px auto;
    font-size: 19px;
    line-height: 1.5;
    text-align: center;
    color: #2b2b2b;
  }
`;

const GlobalPartner = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 60px 0;
  background-color: #96b6e5;

  h1 {
    font-size: 34px;
    text-align: center;
    line-height: 1.2;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    min-width: 1180px;
    margin: 0 auto;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.3333%;
      padding-top: 5%;

      .partnerImg1 {
        width: 167px;
      }
      .partnerImg2 {
        width: 104px;
      }
      .partnerImg3 {
        width: 168px;
      }
      .partnerImg4 {
        width: 78px;
      }
      .partnerImg5 {
        width: 155px;
      }
      .partnerImg6 {
        width: 180px;
      }
    }
  }
`;

const Together = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  margin: 80px auto 0;
  padding: 60px 0;

  h1 {
    font-size: 34px;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 30px;
  }

  .photoForm {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    img {
      width: 23.5%;
      height: auto;
    }
  }

  .tag a {
    padding-right: 5px;
    font-size: 16px;
    color: #767676;
  }

  .textForm {
    position: relative;
    width: 780px;
    margin: 90px auto;
    padding: 40px 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-size: 19px;
    text-align: center;
    line-height: 1.4;
    color: #2b2b2b;

    .doubleQuoteIcon {
      position: absolute;
      top: -7%;
      left: 50%;
      width: 60px;
      padding: 0 20px;
      transform: translateX(-50%);
      background-color: white;
    }
  }
`;

const Bottom = styled.article`
  max-height: 100vh;
  overflow: hidden;
  background-color: #e5f5fa;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    max-width: 1180px;
    margin: 0 auto;

    strong {
      margin-top: -150px;
      font-size: 34px;
      line-height: 1.3;
    }

    img {
      max-height: 930px;
    }
  }
`;
